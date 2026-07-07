import { Component, inject, signal } from '@angular/core';
// Componentes propios
import { ListComponent } from '../../general/list-component/list-component';
import { UsuarioService } from '../../../services/usuario-service';
import { IResponse } from '../../../interfaces/IResponse';
import { IUsuarioResponseList } from '../../../interfaces/IUsuario';
import { IColumn } from '../../../interfaces/ITable';
import { ConfirmService } from '../../../services/confirm-service';
import { timeout, finalize } from 'rxjs';

@Component({
  selector: 'app-usuariolist-component',
  imports: [ListComponent],
  templateUrl: './usuariolist-component.html',
  styleUrl: './usuariolist-component.css',
})
export class UsuariolistComponent {
  private usuarioService = inject(UsuarioService);

  // Variables
  showEditSpin = signal(false);
  dataRows = signal<IUsuarioResponseList[]>([]);

  nameKeys: string[] = ['codigo', 'ciclo'];
  nameCols: IColumn[] = [
    { key: 'dni', label: 'DNI' },
    { key: 'usuario', label: 'USUARIO' },
    { key: 'correo', label: 'CORREO' },
    { key: 'estado', label: 'ESTADO' },
  ];

  ngOnInit(): void {
    this.usuarioService
      .queryUsuario({
        fstdat: '1',
        scddat: '1',
        trddat: '',
        fordat: '',
        fifdat: '',
      })
      .subscribe({
        next: (res: IResponse<IUsuarioResponseList[]>) => {
          this.dataRows.set(res.data);
        },
      });
  }

  mostrar = (event: boolean) => {
    console.log('Lo que recibe usuarui', event);
  };

  editar = (event: any) => {
    this.showEditSpin.set(true);
    this.usuarioService
      .queryUsuario({
        fstdat: '2',
        scddat: '1',
        trddat: event.codigo,
        fordat: event.ciclo,
        fifdat: '',
      })
      .pipe(
        timeout(5000),
        finalize(() => this.showEditSpin.set(false)),
      )
      .subscribe({
        next: (res: IResponse<IUsuarioResponseList[]>) => {
          console.log(res.data[0]);
        },
      });
  };
}
