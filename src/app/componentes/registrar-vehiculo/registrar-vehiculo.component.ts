import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirestoreService } from 'src/app/services/firestore.service';
import { AuthService } from 'src/app/services/auth.service';
import { Vehiculo } from 'src/app/models/models';
import Swal from 'sweetalert2';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Globals } from 'src/app/global';

@Component({
  selector: 'app-registrar-vehiculo',
  templateUrl: './registrar-vehiculo.component.html',
  styleUrls: ['./registrar-vehiculo.component.css']
})
export class RegistrarVehiculoComponent implements OnInit {
  public loading: any = { activo: false, mensaje: '' };
  data: FormGroup;
  id: any;
  check: any;
  datos: Vehiculo = new Vehiculo();
  lista:string[]=["ABT","Alfa Romeo","Aston Martin","Audi","Bentley","BMW","Bugatti",
                  "Cadillac","Chery","Chevrolet",  "Daewoo","Dodge","Ferrari",
                  "Fiat","Ford","Honda","Hyundai",  "JAC Motors","Jaguar","Jeep",
                  "Kia","Lamborghini","Land Rover",  "Lexus","Lincoln Motor Company",
                  "Maserati","Mazda","McLaren",  "Mercedes-Benz","Mini","Mitsubishi",
                  "Nismo","Nissan","Peugeot",  "Porsche","Renault","Samsung",
                  "SsangYong","Subaru","Suzuki",  "Tesla","Toyota","Volkswagen", "Otro"];
  constructor(private router: Router, private firestore: FirestoreService, private global: Globals, 
                  private auth: AuthService, private fb: FormBuilder ) { 
    this.data = this.fb.group({
      marca: ['',[Validators.required]],
      referencia: ['',[Validators.required]],
      placa: ['',[Validators.required]],
      modelo: ['',[Validators.required]],
      documentoPropietario: ['',[Validators.required]],
      nombrePropietario: ['',[Validators.required]],
      apellidoPropietario: ['',[Validators.required]]     
   })
  }

  ngOnInit(): void {
  }

  regresar(){
    this.router.navigate(['gestionCliente']);
  }

  async registrar(){
    this.loading.activo = true;
   if(this.data.invalid){
     Swal.fire({
       title: "Los datos son invalidos",
       
       width: 300,
       showCancelButton: false,
       confirmButtonColor: "#03c793",
     });
   }else{
         const path = 'Vehiculo';
         this.datos = this.data.value;
         this.datos.creadoX = this.global.getDocumentoPropietario();
        //  this.datos.nombrePropietario = this.global.getNombrePropietario();
        //  this.datos.apellidoPropietario = this.global.getApellidoPropietario();
         await this.firestore.crearDoc(this.datos, path, this.datos.placa);       
         Swal.fire({
           title: "¡Se registró!",
           width: 300,
           showCancelButton: false,
           confirmButtonColor: "#03c793",
         });
         this.loading.activo = true;
         this.router.navigate(['/gestionCliente']);
       }
   }

}
