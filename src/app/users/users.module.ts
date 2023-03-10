import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms';

import { UsersRoutingModule } from './users-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { UserComponent } from './pages/user/user.component';
import { AddComponent } from './pages/add/add.component';
import { EditComponent } from './pages/edit/edit.component';


@NgModule({
  declarations: [
    HomeComponent,
    UserComponent,
    AddComponent,
    EditComponent,
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    BrowserModule,
    FormsModule
  ]
})
export class UsersModule { }
