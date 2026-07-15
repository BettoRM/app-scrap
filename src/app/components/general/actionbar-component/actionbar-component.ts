import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LucidePlus } from '@lucide/angular';

@Component({
  selector: 'app-actionbar-component',
  imports: [LucidePlus],
  templateUrl: './actionbar-component.html',
  styleUrl: './actionbar-component.css',
})
export class ActionbarComponent {
  @Input() btnSpinner: boolean = false;
  @Output() sendAction = new EventEmitter<void>();
  @Output() sendQuery = new EventEmitter<string>();

  move = () => this.sendAction.emit();

  filter = (data: string) => {
    if (!this.btnSpinner) this.sendQuery.emit(data);
  };
}
