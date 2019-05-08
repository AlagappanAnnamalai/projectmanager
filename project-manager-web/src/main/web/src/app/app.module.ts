import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {FooterComponent} from './footer/footer.component';
import {ProjectComponent} from './project/project.component';
import {UserComponent} from './user/user.component';
import {AddtaskComponent} from './task/addtask/addtask.component';
import {ViewtaskComponent} from './task/viewtask/viewtask.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from "@angular/common/http";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { UsersearchPipe } from './util/usersearch.pipe';
import { UsersortPipe } from './util/usersort.pipe';
import { ProjectsearchPipe } from './util/projectsearch.pipe';
import { ProjectsortPipe } from './util/projectsort.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    ProjectComponent,
    UserComponent,
    AddtaskComponent,
    ViewtaskComponent,
    UsersearchPipe,
    UsersortPipe,
    ProjectsearchPipe,
    ProjectsortPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
