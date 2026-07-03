export type ToastType = 'success' | 'error' | 'info' | 'warn';

export interface IToastMessage {
  message: string;
  type: ToastType;
  show: boolean;
}
