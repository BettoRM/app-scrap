import { Routes } from '@angular/router';
import { LoginxComponent } from './components/secure/loginx-component/loginx-component';
import { DashboardComponent } from './components/secure/dashboard-component/dashboard-component';
import { UsuariolistComponent } from './components/usuario/usuariolist-component/usuariolist-component';
import { PlanlistComponent } from './components/plan/planlist-component/planlist-component';
import { authGuard } from './guards/auth-guard';
import { guestGuard } from './guards/guest-guard';
import { DireccionlistComponent } from './components/direccion/direccionlist-component/direccionlist-component';

export const routes: Routes = [
  { path: 'login', component: LoginxComponent, canActivate: [guestGuard] },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [authGuard],
    children: [
      { path: 'usuario', component: UsuariolistComponent },
      { path: 'plan', component: PlanlistComponent },
      { path: 'direccion', component: DireccionlistComponent },
    ],
  },
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: '**', redirectTo: 'login' },
];
