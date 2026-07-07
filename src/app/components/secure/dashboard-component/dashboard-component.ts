import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import {
  LucideUser,
  LucideBlocks,
  LucideNotebookTabs,
  LucideCircleDollarSign,
} from '@lucide/angular';

@Component({
  selector: 'app-dashboard-component',
  imports: [
    RouterOutlet,
    RouterLink,
    LucideUser,
    LucideBlocks,
    LucideNotebookTabs,
    LucideCircleDollarSign,
  ],
  templateUrl: './dashboard-component.html',
  styleUrl: './dashboard-component.css',
})
export class DashboardComponent {}
