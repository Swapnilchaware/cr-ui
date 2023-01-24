import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoinsComponent } from './private/coins/coins.component';
import { ProfileComponent } from './private/profile/profile.component';
import { AuthenticationComponent } from './public/authentication/authentication.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';

const routes: Routes = [
  {path : '',component : AuthenticationComponent},
  {path : 'profile',component : ProfileComponent},
  {path : 'coin' , component : CoinsComponent},
  {path : '**', component : PageNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
