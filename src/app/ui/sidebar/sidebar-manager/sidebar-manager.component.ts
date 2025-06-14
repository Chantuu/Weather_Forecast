import { Component } from '@angular/core';
import {SidebarButtonManagerComponent} from "../sidebar-button-manager/sidebar-button-manager.component";

@Component({
  selector: 'app-sidebar-manager',
  imports: [
    SidebarButtonManagerComponent
  ],
  templateUrl: './sidebar-manager.component.html',
  styleUrl: './sidebar-manager.component.css'
})
export class SidebarManagerComponent {

}
