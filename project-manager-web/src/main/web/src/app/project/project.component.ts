import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {ProjectService} from "../service/project.service";
import {Project} from "../model/project";

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  projects: Project[];
  projectModel: Project = new Project();
  opProject: Project = new Project();
  projectSearchText: string;
  sortColumn: string = "startDate";
  previousSortColumn: string = "OriginalOrder";
  sortIndicator: boolean = false;
  isEdit: boolean = false;

  constructor(private router: Router, private projectService: ProjectService) {
  }

  ngOnInit() {
    this.projectService.getAllProjects().subscribe(projectDtos => {
      this.projects = projectDtos;
    });
  }

  sortProject(columnName) {
    if (columnName === this.previousSortColumn) {
      this.sortIndicator = !this.sortIndicator;
    } else {
      this.sortIndicator = true;
    }
    this.previousSortColumn = this.sortColumn;
    this.sortColumn = columnName;
  }

  onSubmit(projectData: Project) {
    this.projectModel = projectData;

    if (this.isEdit) {
      this.projectService.updateProject(this.projectModel)
        .subscribe(
          response => {
            /*Reset User Model*/
            this.router.navigate(['/project']);
          }
        );
      this.isEdit = false;
    } else {
      this.projectService.addProject(this.projectModel)
        .subscribe(
          response => {
            this.router.navigate(['/project']);
          }
        );
    }
  }

  suspendProject(projectData) {
    this.opProject = projectData;
    this.opProject.endDate = new Date();
    this.projectService.suspendProject(this.opProject)
      .subscribe(
        response => {
          /*Reset User Model*/
          this.router.navigate(['/project']);
        }
      );
  }

  editProjectPopulate(projectData) {
    this.projectModel = Object.assign({}, projectData);
    this.isEdit = true;
    window.scrollTo(0, 0);
  }

  cancelEdit() {
    this.isEdit = false;
    this.router.navigate(['/project']);
  }

  projectSuspended(formProject) {
    this.opProject = formProject;
    console.log('Actual Date :'+this.opProject.endDate);
    console.log('Now Date :'+new Date());

    return new Date(this.opProject.endDate).valueOf() < new Date().valueOf();

  }
}
