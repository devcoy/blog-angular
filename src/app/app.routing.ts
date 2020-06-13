// Importar los módulos del router de Angular
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Módulos
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

const appRoutes: Routes = [
  { path: 'registro', component: RegisterComponent},
  { path: 'iniciar-sesion', component: LoginComponent }
];

export const appRoutingProvider: any = [];
export const routingModule: ModuleWithProviders = RouterModule.forRoot(appRoutes);