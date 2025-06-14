import { Component } from '@angular/core';
import {SidebarManagerComponent} from "../ui/sidebar/sidebar-manager/sidebar-manager.component";

@Component({
  selector: 'app-root',
    imports: [
        SidebarManagerComponent
    ],
  templateUrl: './root.component.html',
  styleUrl: './root.component.css'
})
export class AppComponent {
  title = 'Weather_Forecast';
}
