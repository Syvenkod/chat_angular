import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatComponent } from './chat/chat.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MainComponent } from './main.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MainRoutingModule} from '../main/main-routing.module'
import { SearchFilterPipe } from '../shared/search-filter.pipe';



@NgModule({
  declarations: [
    MainComponent,
    ChatComponent,
    SidebarComponent,
    SearchFilterPipe
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class MainModule { }
