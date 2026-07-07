import { Component, inject } from '@angular/core';
import { ConfirmService } from '../../../services/confirm-service';

@Component({
  selector: 'app-confirm-component',
  imports: [],
  templateUrl: './confirm-component.html',
  styleUrl: './confirm-component.css',
})
export class ConfirmComponent {
  confirmModal = inject(ConfirmService);
}
