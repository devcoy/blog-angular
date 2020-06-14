// Importar los módulos del router de Angular
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Módulos
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'registro', component: RegisterComponent},
  { path: 'iniciar-sesion', component: LoginComponent },
  { path: 'logout/:sure', component: LoginComponent },
  { path: 'inicio', component: HomeComponent },
  { path: '**', component: ErrorPageComponent }
];

export const appRoutingProvider: any = [];
export const routingModule: ModuleWithProviders = RouterModule.forRoot(appRoutes);