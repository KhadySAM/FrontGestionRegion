import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './Pages/Accueil/accueil/accueil.component';
import { LieuxComponent } from './Pages/Lieuxtouristique/lieux/lieux.component';
import { RegionComponent } from './Pages/Region/region/region.component';

const routes: Routes = [
  {
    path:'accueil',
    component: AccueilComponent
  },
  {
    path:'region',
    component: RegionComponent
  },
  {
    path:'lieux',
    component: LieuxComponent
  },

];

@NgModule({
  imports: [
 
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
