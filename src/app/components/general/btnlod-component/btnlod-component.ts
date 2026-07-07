import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  LucideDynamicIcon,
  LucideLock,
  LucideCheck,
  LucideSave,
  LucideX,
  LucideSquarePen,
} from '@lucide/angular';

const ICONS: any = {
  LOCK: LucideLock,
  CHECK: LucideCheck,
  SAVE: LucideSave,
  CANCEL: LucideX,
  EDIT: LucideSquarePen,
} as const;

@Component({
  selector: 'app-btnlod-component',
  standalone: true,
  imports: [LucideDynamicIcon],
  templateUrl: './btnlod-component.html',
  styleUrl: './btnlod-component.css',
})
export class BtnlodComponent {
  @Input() btnLabel: string = '';
  @Input() btnStyle: string = 'primary';
  @Input() btnSpinner: boolean = false;
  @Input() btnIcon: string = 'LOCK';

  @Output() clickSend = new EventEmitter<void>();

  sendAction = () => this.clickSend.emit();

  get cssClass(): string {
    const styles: Record<string, string> = {
      primary: 'btn btn-primary',
      secondary: 'btn btn-secondary',
      success: 'btn btn-success',
      error: 'btn btn-error',
      warning: 'btn btn-warning',
      ghost: 'btn btn-ghost',
    };

    return styles[this.btnStyle] ?? 'btn btn-neutral';
  }

  get iconType() {
    return ICONS[this.btnIcon] ?? LucideLock;
  }
}
