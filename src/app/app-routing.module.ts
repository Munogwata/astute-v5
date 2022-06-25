import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { GrowComponent } from './pages/grow/grow.component';
import { HomeComponent } from './pages/home/home.component';
import { KeepComponent } from './pages/keep/keep.component';
import { MakeComponent } from './pages/make/make.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'make', component: MakeComponent
  },
  { path: 'keep', component: KeepComponent },
  { path: 'grow', component: GrowComponent },
  { path: 'about-us', component: AboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
