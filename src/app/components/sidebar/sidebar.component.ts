import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  // Define menu items dynamically
  menuItems = [
    { icon: 'home', tooltip: 'Home', content: 'home' },
    { icon: 'login', tooltip: 'Login', content: 'login' },
    { icon: 'code', tooltip: 'Code', content: 'code' }
  ];

  currentContent: string = 'home'; // Default content
  isSidebarOpen: boolean = true; // Sidebar open state

  // Set the content dynamically based on the menu item clicked
  setContent(content: string): void {
    this.currentContent = content;
  }

  // Handle sidebar state change (open/close)
  onSidebarStateChange(isOpen: boolean): void {
    this.isSidebarOpen = isOpen;
  }

  // Toggle sidebar visibility
  toggleSidebar(): void {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
}
