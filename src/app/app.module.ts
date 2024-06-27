import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Necesario para Angular Material
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MarkerModalComponent } from './components/marker-modal/marker-modal.component';
import { MapComponent } from './components/map/map.component';
import { ListMarkersComponent } from './components/list-markers/list-markers.component';
import { appConfig } from './app.config';
import { EditMarkerModalComponent } from './components/edit-marker-modal/edit-marker-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    ListMarkersComponent,
    MarkerModalComponent,
    EditMarkerModalComponent,
  ],
  imports: [
    BrowserModule,
    GoogleMapsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync(),
    appConfig()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
