import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LucideDynamicIcon, LucideLock, LucideCheck, LucideSave, LucideX } from '@lucide/angular';

const ICONS: any = {
  LOCK: LucideLock,
  CHECK: LucideCheck,
  SAVE: LucideSave,
  CANCEL: LucideX,
} as const;

@Component({
  selector: 'app-btnlod-component',
  standalone: true,
  imports: [LucideDynamicIcon, NgClass],
  templateUrl: './btnlod-component.html',
  styleUrl: './btnlod-component.css',
})
export class BtnlodComponent {
  @Input() btnLabel: string = 'Ingresar';
  @Input() btnStyle: string = 'primary';
  @Input() btnSpinner: boolean = false;
  @Input() btnIcon: string = 'LOCK';

  @Output() clickSend = new EventEmitter<void>();

  sendAction = () => {
    this.clickSend.emit();
  };

  get cssClass(): string {
    let valor:string = `btn btn-${this.btnStyle}`;
    console.log(valor);
    return valor;
  }

  get iconType() {
    return ICONS[this.btnIcon] ?? LucideCheck;
  }
}
