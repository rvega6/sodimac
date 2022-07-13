import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { LoginComponent } from './componentes/login/login.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { AngularFireModule } from '@angular/fire/compat' ; 
import { environment } from 'src/environments/environment';
import { AngularFireAuthModule } from '@angular/fire/compat/auth' ;
import { AngularFirestoreModule } from '@angular/fire/compat/firestore' ; 
import { ServiceWorkerModule } from '@angular/service-worker';
import { FacturasComponent } from './componentes/facturas/facturas.component';
import { MantenimientoComponent } from './componentes/mantenimiento/mantenimiento.component';
import { GestionClienteComponent } from './componentes/gestion-cliente/gestion-cliente.component';
import { RegistrarVehiculoComponent } from './componentes/registrar-vehiculo/registrar-vehiculo.component';
import { Globals } from './global';
import { ListaMantenimientoComponent } from './componentes/lista-mantenimiento/lista-mantenimiento.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistroComponent,
    LoginComponent,
    FacturasComponent,
    MantenimientoComponent,
    GestionClienteComponent,
    RegistrarVehiculoComponent,
    ListaMantenimientoComponent,
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,    
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })],
  providers: [Globals],
  bootstrap: [AppComponent]
})
export class AppModule { }
