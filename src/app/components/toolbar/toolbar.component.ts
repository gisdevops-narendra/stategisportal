import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent {
  @Output() toggleSidebar = new EventEmitter<void>();
  isLoggedIn = false;

  // Define buttons dynamically (Main Menu buttons)
  toolbarButtons = [
    { icon: 'home', tooltip: 'Home', action: 'home', active: true },
    { icon: 'map', tooltip: 'Map', action: 'map', active: false },
    { icon: 'layers', tooltip: 'Layers', action: 'layers', active: false },
    { icon: 'settings', tooltip: 'Settings', action: 'settings', active: false },
  ];

  // Define the login/logout button
  loginLogoutButton = {
    icon: this.isLoggedIn ? 'logout' : 'login',
    tooltip: this.isLoggedIn ? 'Logout' : 'Login',
    action: 'loginLogout',
  };

  // Toggle login state
  toggleLogin() {
    this.isLoggedIn = !this.isLoggedIn;
    this.loginLogoutButton.icon = this.isLoggedIn ? 'logout' : 'login';
    this.loginLogoutButton.tooltip = this.isLoggedIn ? 'Logout' : 'Login';
  }

  // Navigation action for main menu buttons
  handleAction(action: string) {
    // Reset all buttons to inactive
    this.toolbarButtons.forEach(button => button.active = false);
    
    // Set the clicked button as active
    const activeButton = this.toolbarButtons.find(button => button.action === action);
    if (activeButton) {
      activeButton.active = true;
    }
    
    console.log(`Action triggered: ${action}`);
    // Implement specific logic for actions if needed
  }
}
