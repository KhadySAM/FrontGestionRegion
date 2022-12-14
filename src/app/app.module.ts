import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './Pages/Accueil/accueil/accueil.component';
import { RegionComponent } from './Pages/Region/region/region.component';
import { LieuxComponent } from './Pages/Lieuxtouristique/lieux/lieux.component';
import { PopupaddregionComponent } from './Popups/popupaddregion/popupaddregion.component';
import { InscriptionComponent } from './Pages/Inscription/inscription/inscription.component';
import { HttpClientModule } from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module
import { FormsModule } from '@angular/forms';
import { FilterPipeModule } from 'ngx-filter-pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './Pages/login/login.component';

// import { DeleteregionComponent } from './Popups/deleteregion/deleteregion.component';


@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    RegionComponent,
    LieuxComponent,
    PopupaddregionComponent,
    InscriptionComponent,
    LoginComponent,
  
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    FilterPipeModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [], 
  bootstrap: [AppComponent]
})
export class AppModule { }
