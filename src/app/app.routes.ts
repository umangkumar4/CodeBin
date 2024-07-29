import { Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { SignupComponent } from './Components/signup/signup.component';
import { ErrorComponent } from './Components/error/error.component';
import { AboutComponent } from './Components/about/about.component';
import { CreateBinComponent } from './Components/create-bin/create-bin.component';
import { authGuard } from './auth.guard';
import { AllSnippetsComponent } from './Components/all-snippets/all-snippets.component';
import { ViewsnippetComponent } from './Components/viewsnippet/viewsnippet.component';

export const routes: Routes = [
    {path:'login' , component : LoginComponent},
    {path:'signup' , component : SignupComponent},
    {path:'about' , component : AboutComponent},
    {path:'', redirectTo:'/login' , pathMatch:'full'},
    {path:'createbin' , component : CreateBinComponent, canActivate: [authGuard]},
    {path:'allsnippet' , component : AllSnippetsComponent, canActivate: [authGuard]},
    {path:'viewsnippet/:id', component:ViewsnippetComponent,canActivate:[authGuard] },
    {path:'signup' , loadComponent:()=> import('./Components/about/about.component').then(mod=>mod.AboutComponent)},// for lazy loading
    {path:'**', component: ErrorComponent}
];
