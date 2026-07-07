import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class ConfirmService {
  title = signal('');
  message = signal('');
  visible = signal(false);

  private resolver?: (value: boolean) => void;

  open(title: string, message: string): Promise<boolean> {
    this.title.set(title);
    this.message.set(message);
    this.visible.set(true);

    return new Promise((resolve) => {
      this.resolver = resolve;
    });
  }

  accept() {
    this.visible.set(false);
    this.resolver?.(true);
  }

  cancel() {
    this.visible.set(false);
    this.resolver?.(false);
  }
}
