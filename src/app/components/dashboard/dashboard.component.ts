import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  isSidebarOpen = true; 

  toggleSidebar(): void {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
  
}
