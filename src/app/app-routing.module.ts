import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './Pages/Accueil/accueil/accueil.component';
import { InscriptionComponent } from './Pages/Inscription/inscription/inscription.component';
import { LieuxComponent } from './Pages/Lieuxtouristique/lieux/lieux.component';
import { RegionComponent } from './Pages/Region/region/region.component';
import { PopupaddregionComponent } from './Popups/popupaddregion/popupaddregion.component';

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
  {
    path:'popaddregion',
    component: PopupaddregionComponent
  },
  {
    path:'inscription',
    component: InscriptionComponent
  },

];

@NgModule({
  imports: [

    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
