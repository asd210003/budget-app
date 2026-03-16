import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Login } from './login/login';
import { CreateAccount } from './create-account/create-account';

export const routes: Routes = [

    {path: '', redirectTo: '/login', pathMatch: 'full'},

    {path: 'login', component: Login},

    {path: 'create-account', component: CreateAccount},

    {path: 'home', component: Home}

];
