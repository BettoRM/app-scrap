import { Routes } from '@angular/router';
import { LoginxComponent } from './components/secure/loginx-component/loginx-component';
import { DashboardComponent } from './components/secure/dashboard-component/dashboard-component';
import { UsuariolistComponent } from './components/usuario/usuariolist-component/usuariolist-component';
import { PlanlistComponent } from './components/plan/planlist-component/planlist-component';

export const routes: Routes = [
  { path: 'login', component: LoginxComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      { path: 'usuario', component: UsuariolistComponent },
      { path: 'plan', component: PlanlistComponent },
    ],
  },
];
