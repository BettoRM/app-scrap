import { Component, computed, effect, inject, signal } from '@angular/core';
import { ToastService } from '../../../services/toast-service';
import { LucideDynamicIcon, LucideLock, LucideCheck, LucideSave, LucideX } from '@lucide/angular';

const ICONS: any = {
  LOCK: LucideLock,
  CHECK: LucideCheck,
  SAVE: LucideSave,
  CANCEL: LucideX,
} as const;

@Component({
  selector: 'app-toastx-component',
  standalone: true,
  imports: [LucideDynamicIcon],
  templateUrl: './toastx-component.html',
  styleUrl: './toastx-component.css',
})
export class ToastxComponent {
  protected toastService = inject(ToastService);

  get iconType() {
    console.log(this.toastService.toast().type);
    return ICONS['CHECK'] ?? LucideCheck;
  }
}
