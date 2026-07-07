import { Component, EventEmitter, Input, Output, signal } from '@angular/core';
import { IColumn } from '../../../interfaces/ITable';
import { SwitchComponent } from '../switch-component/switch-component';
import { BtnlodComponent } from '../btnlod-component/btnlod-component';

export type TableRow = object;

@Component({
  selector: 'app-list-component',
  imports: [SwitchComponent, BtnlodComponent],
  templateUrl: './list-component.html',
  styleUrl: './list-component.css',
})
export class ListComponent {
  @Input() nameKeys: string[] = ['codigo'];
  @Input() nameCols: IColumn[] = [];
  @Input() dataRows: TableRow[] = [];
  @Input() btnSpinner: boolean = false;

  @Output() clickConfirm = new EventEmitter<boolean>();
  @Output() clickAction = new EventEmitter<Record<string, unknown>>();

  // Variables
  showSpin = signal(false);

  getValues = (row: TableRow): unknown[] => Object.values(row);

  sendEmitConfirm = (result: boolean) => this.clickConfirm.emit(result);
  sendEmitCode = (row: object) => {
    const currentRow = row as Record<string, unknown>;

    const codes = this.nameKeys.reduce<Record<string, unknown>>((acc, key) => {
      acc[key] = currentRow[key];
      return acc;
    }, {});

    this.clickAction.emit(codes);
  };
}
