import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './Pages/Accueil/accueil/accueil.component';
import { RegionComponent } from './Pages/Region/region/region.component';
import { LieuxComponent } from './Pages/Lieuxtouristique/lieux/lieux.component';
import { PopupaddregionComponent } from './Popups/popupaddregion/popupaddregion.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    RegionComponent,
    LieuxComponent,
    PopupaddregionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [], 
  bootstrap: [AppComponent]
})
export class AppModule { }
