import { Component, OnInit } from '@angular/core';
import {User} from "../../model/user";
import {Project} from "../../model/project";
import {TaskData} from "@angular/core/src/testability/testability";
import {Task} from "../../model/task";
import {ParentTask} from "../../model/parenttask";

@Component({
  selector: 'app-addtask',
  templateUrl: './addtask.component.html',
  styleUrls: ['./addtask.component.css']
})
export class AddtaskComponent implements OnInit {

  users : User[];
  projects : Project[];
  taskModel : Task;
  parentTask : ParentTask;
  isParentTask : boolean = false;
  selectedProjectId : number;
  selectedParentTaskId : number;
  selectedUserId : number;



  constructor() { }

  ngOnInit() {
    
  }

}
