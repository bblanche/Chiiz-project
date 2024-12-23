import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AppareilComponent } from './appareil/appareil.component';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NosOffresComponent } from './nos-offres/nos-offres.component';
import { IconProperty1ChevronLeftPComponent } from 'src/app/nos-offres/icon-property-1-chevron-left-p/icon-property-1-chevron-left-p.component';
import {IconProperty1ChevronRightComponent} from 'src/app/nos-offres/icon-property-1-chevron-right/icon-property-1-chevron-right.component';
import { DetailsComponent } from './details/details.component';
import { ReservationComponent } from './reservation/reservation.component';
import { ReservationFormComponent } from './reservation-form/reservation-form.component';

const routes: Routes = [
  { path: '', component: HomeComponent }, // Page d'accueil
  { path: 'nos-offres', component: NosOffresComponent }, // Route pour "Nos Offres"
  { path: 'pack/:id', component: DetailsComponent }, // Route pour les détails d'un photobooth
  { path: 'reservation/:id', component: ReservationComponent }, // Route pour la réservation
  //visualiser le formulaire de réservation
  {path: 'reservation_form/:id', component: ReservationFormComponent}
  // { path: '**', redirectTo: '' } // Redirige vers la page d'accueil pour les chemins inconnus
];

@NgModule({
  declarations: [
    AppComponent, HomeComponent, AppareilComponent,
    FooterComponent, HeaderComponent, NosOffresComponent,
    IconProperty1ChevronLeftPComponent,
    IconProperty1ChevronRightComponent,
    DetailsComponent,
    ReservationComponent,
    ReservationFormComponent,],
  imports: [BrowserModule, CommonModule, ReactiveFormsModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
