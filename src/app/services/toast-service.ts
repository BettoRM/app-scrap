import { Injectable, signal } from '@angular/core';
import { IToastMessage, ToastType } from '../interfaces/IToastMessage';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  readonly toast = signal<IToastMessage>({
    message: '',
    type: 'info',
    show: false,
  });

  show(message: string, type: ToastType = 'info') {
    this.toast.set({
      message,
      type,
      show: true,
    });

    setTimeout(() => {
      this.toast.update((t) => ({
        ...t,
        show: false,
      }));
    }, 3000);
  }
}
