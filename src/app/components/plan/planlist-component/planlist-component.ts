import { Component, inject, signal } from '@angular/core';
import { IColumn } from '../../../interfaces/ITable';
import { finalize, timeout } from 'rxjs';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
// Componentes propios
import { ActionbarComponent } from '../../general/actionbar-component/actionbar-component';
import { ListComponent } from '../../general/list-component/list-component';
import { BtnlodComponent } from '../../general/btnlod-component/btnlod-component';
// Interfaces
import { IResponse } from '../../../interfaces/IResponse';
import { IRequestList } from '../../../interfaces/IRequest';
import { IPlanForm, IPlanResponseList } from '../../../interfaces/IPlan';
import { IForm } from '../../../interfaces/IForm';
// Servicios
import { ToastService } from '../../../services/toast-service';
import { PlanService } from '../../../services/plan-service';
import { LucideX } from '@lucide/angular';

@Component({
  selector: 'app-planlist-component',
  imports: [ActionbarComponent, ListComponent, BtnlodComponent, FormsModule, LucideX],
  templateUrl: './planlist-component.html',
  styleUrl: './planlist-component.css',
})
export class PlanlistComponent implements IForm {
  private planService = inject(PlanService);
  private toast = inject(ToastService);
  formData = signal<IPlanForm>(this.emptyForm());

  // Variables
  showDialog = signal(false);
  showSaveSpin = signal(false);
  showFilterSpin = signal(false);
  dataRows = signal<IPlanResponseList[]>([]);

  nameKeys: string[] = ['codigo'];
  nameCols: IColumn[] = [
    { key: 'nombre', label: 'PLAN' },
    { key: 'precio', label: 'PRECIO' },
    { key: 'marca', label: 'MARCA' },
    { key: 'tabla', label: 'TABLA' },
    { key: 'json', label: 'JSON' },
    { key: 'estado', label: 'ESTADO' },
  ];

  ngOnInit(): void {
    this.queryData({
      fstdat: '1',
      scddat: '1',
      trddat: '',
      fordat: '',
      fifdat: '',
    });
  }

  emptyForm(): IPlanForm {
    return {
      codigo: 0,
      nombre: '',
      precio: '',
      marca: false,
      tabla: false,
      json: false,
    };
  }

  confirmChange = (data: any) => {
    if (data !== null) {
      this.planService
        .delPlan({
          codigo: data.codigo,
          nombre: '',
          precio: '',
          marca: false,
          tabla: false,
          json: false,
        })
        .pipe(
          timeout(5000),
          finalize(() => this.showFilterSpin.set(false)),
        )
        .subscribe({
          next: (res: HttpResponse<IResponse<[]>>) => {
            this.toast.show(String(res.body?.message), 'success');
          },
          error: (error: HttpErrorResponse) => {
            this.toast.show(error.error.message, 'error');
          },
        });
    }
  };

  viewModal = () => {
    this.formData.set(this.emptyForm());
    this.showDialog.set(!this.showDialog());
  };

  cancelData = () => this.viewModal();

  queryData = (data: IRequestList) => {
    this.showFilterSpin.set(true);
    this.planService
      .queryPlan<IPlanResponseList[]>(data)
      .pipe(
        timeout(5000),
        finalize(() => this.showFilterSpin.set(false)),
      )
      .subscribe({
        next: (res: IResponse<IPlanResponseList[]>) => {
          this.dataRows.set(res.data);
        },
        error: (error: HttpErrorResponse) => {
          this.toast.show(error.error.message, 'error');
        },
      });
  };

  queryIndividualData = (data: any) => {
    this.viewModal();
    this.showSaveSpin.set(true);
    this.planService
      .queryPlan<IPlanForm[]>({
        fstdat: '2',
        scddat: '1',
        trddat: data.codigo,
        fordat: '',
        fifdat: '',
      })
      .pipe(
        timeout(5000),
        finalize(() => this.showSaveSpin.set(false)),
      )
      .subscribe({
        next: (res: IResponse<IPlanForm[]>) => {
          console.log(res);
          this.formData.set(res.data[0]);
        },
        error: (error: HttpErrorResponse) => {
          this.toast.show(error.error.message, 'error');
        },
      });
  };

  filterData = (data: string) => {
    this.queryData({
      fstdat: '1',
      scddat: '1',
      trddat: data,
      fordat: '',
      fifdat: '',
    });
  };

  saveData = () => {
    this.showSaveSpin.set(true);
    if (this.formData().codigo == 0) {
      this.planService
        .newPlan(this.formData())
        .pipe(
          timeout(5000),
          finalize(() => this.showSaveSpin.set(false)),
        )
        .subscribe({
          next: (res: HttpResponse<IResponse<[]>>) => {
            this.viewModal();
            this.toast.show(String(res.body?.message), 'success');
            this.queryData({ fstdat: '1', scddat: '1', trddat: '', fordat: '', fifdat: '' });
          },
          error: (error: HttpErrorResponse) => {
            this.toast.show(error.error.message, 'error');
          },
        });
    } else if (this.formData().codigo > 0) {
      this.planService
        .editPlan(this.formData())
        .pipe(
          timeout(5000),
          finalize(() => this.showSaveSpin.set(false)),
        )
        .subscribe({
          next: (res: HttpResponse<IResponse<[]>>) => {
            this.viewModal();
            this.toast.show(String(res.body?.message), 'success');
            this.queryData({ fstdat: '1', scddat: '1', trddat: '', fordat: '', fifdat: '' });
          },
          error: (error: HttpErrorResponse) => {
            this.toast.show(error.error.message, 'error');
          },
        });
    }
  };
}
