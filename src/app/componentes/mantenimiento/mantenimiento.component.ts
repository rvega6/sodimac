import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Mantenimiento, Vehiculo } from 'src/app/models/models';
import { AuthService } from 'src/app/services/auth.service';
import { FirestoreService } from 'src/app/services/firestore.service';
import { StorageService } from 'src/app/services/storage.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-mantenimiento',
  templateUrl: './mantenimiento.component.html',
  styleUrls: ['./mantenimiento.component.css']
})
export class MantenimientoComponent implements OnInit {
  public loading: any = { activo: false, mensaje: '' };
  imagenes: any [] = [];
  data: FormGroup;
  id: any;
  datos: Mantenimiento = new Mantenimiento();
  vehiculos: any;
  selection: any
  cars: Vehiculo = new Vehiculo();
  constructor(private router: Router, private firestore: FirestoreService, 
    private auth: AuthService, private fb: FormBuilder, private storageService: StorageService ) { 
    this.data = this.fb.group({
      placa: ['',[Validators.required]],
      descripcionArreglo: ['',[Validators.required]],
      presupuestoPropietario: ['',[Validators.required]]
      // foto: ['',[Validators.required]]    
   })
  }

 async ngOnInit() {
  this.loading.activo = true;
    await this.loadVehiculos();
    this.loading.activo = false;
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
         const path = 'Mantenimiento';
         this.id = this.datos.placa + Date.now();
         console.log('datos: ', this.datos);
         await this.firestore.crearDoc(this.datos, path, this.id);       
         this.loading.activo = false;
         Swal.fire({
           title: "¡Se registró!",
           width: 300,
           showCancelButton: false,
           confirmButtonColor: "#03c793",
         });
       }
   }

  capturarVehiculo(cars:Vehiculo){
     console.log('carro: ', cars);
    let newCars = JSON.stringify(cars).split('|');

    this.datos.marca = newCars[0].replace(/['"]+/g, '');
    this.datos.referencia = newCars[1].replace(/['"]+/g, '');
    this.datos.placa = newCars[2].replace(/['"]+/g, '');
    const modelo = Number(newCars[3].replace(/['"]+/g, ''));
    this.datos.modelo = modelo;
    const documentoPropietario = Number(newCars[4].replace(/['"]+/g, ''))
    this.datos.documentoPropietario = documentoPropietario;
    this.datos.nombrePropietario = newCars[5].replace(/['"]+/g, '');
    this.datos.apellidoPropietario = newCars[6].replace(/['"]+/g, '');
    this.datos.descripcionArreglo = this.data.value.descripcionArreglo;
    this.datos.presupuestoPropietario = this.data.value.presupuestoPropietario;
console.log('datos que se van a registrar: ', this.datos);

    
    //  var cod = document.?getElementById("producto").value;
      // this.datos.marca = vehiculo.marca;
      // this.datos.referencia = vehiculo.referencia;
      
    }

   regresar(){
    this.router.navigate(['/gestionCliente']);
   }

   loadVehiculos () {
    const path = 'Vehiculo'
    this.firestore.getCollection<Vehiculo>(path).subscribe(vehiculo => {   
    this.vehiculos = vehiculo;
   })
 }

 cargarImagen(event: any){
   this.loading = true;
   let archivos = event.target.files;
   let reader = new FileReader();
   let nombre = "mantenimiento";
   reader.readAsDataURL(archivos[0]);
   reader.onloadend = () =>{
     console.log(reader.result);
     this.imagenes.push(reader.result);
     this.loading = true;
     this.storageService.subirImagen(nombre + "_" + Date.now(), reader.result).then(urlImagen =>{
       console.log(urlImagen);
       this.datos.imagen = urlImagen!;
       this.datos.estado = 'Valoracion'!;
       this.loading = false;
     })
  }
 }
}
