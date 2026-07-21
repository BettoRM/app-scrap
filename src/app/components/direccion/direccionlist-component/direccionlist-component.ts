import { Component, signal } from '@angular/core';
import { IForm } from '../../../interfaces/IForm';
import { IRequestList } from '../../../interfaces/IRequest';
import { ActionbarComponent } from '../../general/actionbar-component/actionbar-component';

@Component({
  selector: 'app-direccionlist-component',
  imports: [ActionbarComponent],
  templateUrl: './direccionlist-component.html',
  styleUrl: './direccionlist-component.css',
})
export class DireccionlistComponent implements IForm {

  // Variables
  showDialog = signal(false);
  showSaveSpin = signal(false);
  showFilterSpin = signal(false);
  //dataRows = signal<IPlanResponseList[]>([]);


  confirmChange = (data: any): void => {

  };
  viewModal = (): void => { };
  cancelData = (): void => { };
  queryData = (data: IRequestList): void => { };
  queryIndividualData = (data: any): void => { };
  filterData = (data: string): void => { };
  saveData = (): void => { };

}
