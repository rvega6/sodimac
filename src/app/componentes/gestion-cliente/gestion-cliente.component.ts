import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-gestion-cliente',
  templateUrl: './gestion-cliente.component.html',
  styleUrls: ['./gestion-cliente.component.css']
})
export class GestionClienteComponent implements OnInit {

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  cerrarSesion(){
    localStorage.clear();
    this.auth.logout();
    this.router.navigate(['/login']);
  }

  mantenimiento(){
    this.router.navigate(['/mantenimiento']);
  }

  registrarVehiculo(){
    this.router.navigate(['/registrarVehiculo']);
  }
}
