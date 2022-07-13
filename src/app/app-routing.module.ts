import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FacturasComponent } from './componentes/facturas/facturas.component';
import { GestionClienteComponent } from './componentes/gestion-cliente/gestion-cliente.component';
import { LoginComponent } from './componentes/login/login.component';
import { MantenimientoComponent } from './componentes/mantenimiento/mantenimiento.component';
import { RegistrarVehiculoComponent } from './componentes/registrar-vehiculo/registrar-vehiculo.component';
import { RegistroComponent } from './componentes/registro/registro.component';


const routes: Routes = [
  {
    path: 'registro',
    component: RegistroComponent
  },{
    path: 'login',
    component: LoginComponent
  },{
    path: 'facturas',
    component: FacturasComponent
  },{
    path: 'mantenimiento',
    component: MantenimientoComponent
  },{
    path: 'gestionCliente',
    component: GestionClienteComponent
  },{
    path: 'registrarVehiculo',
    component: RegistrarVehiculoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
