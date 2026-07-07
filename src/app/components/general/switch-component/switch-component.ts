import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { ConfirmService } from '../../../services/confirm-service';

@Component({
  selector: 'app-switch-component',
  imports: [],
  templateUrl: './switch-component.html',
  styleUrl: './switch-component.css',
})
export class SwitchComponent {
  confirmModal = inject(ConfirmService);
  @Input() checkValue: boolean = false;

  @Output() clickSend = new EventEmitter<boolean>();

  confirmChange = async (event: Event) => {
    const input = event.target as HTMLInputElement;

    let res = await this.confirmModal.open(
      'Confirmación',
      '¿Esta seguro de cambiar el estado de este registro?',
    );

    input.checked = !res ? this.checkValue : !this.checkValue;

    this.clickSend.emit(res);
  };
}
