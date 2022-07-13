import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirestoreService } from 'src/app/services/firestore.service';
import { AuthService } from 'src/app/services/auth.service';
import { Usuario } from 'src/app/models/models';
import Swal from 'sweetalert2';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  public loading: any = { activo: false, mensaje: '' };
  data: FormGroup;
  id: any;
  datos: Usuario = new Usuario();
 

  lista:string[]=["Cédula de ciudadanía","Cédula de Extranjería","Tarjeta de Identidad"];

  constructor(private router: Router, private firestore: FirestoreService, private auth: AuthService, private fb: FormBuilder ) {
      this.data = this.fb.group({
        primerNombre: ['',[Validators.required]],
        segundoNombre: ['',[Validators.required]],
        primerApellido: ['',[Validators.required]],
        segundoApellido: ['',[Validators.required]],
        tipoDocumento: ['',[Validators.required]],
        documento: ['',[Validators.required]],
        celular: ['',[Validators.required]] ,
        direccion: ['',[Validators.required]],
        correo: ['',[Validators.required]],
        contrasena: ['',[Validators.required]]       
     })
   }

  ngOnInit(): void {
  }

  regresar(){
    this.router.navigate(['login']);
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
        const res = await this.auth.registrarUser(this.data.value).catch(error =>{
        console.log('Error');
        this.loading.activo = false;
        Swal.fire({
          title: "¡Email está en uso!",
          width: 300,
          showCancelButton: false,
          confirmButtonColor: "#03c793",
        });
      })
        if (res){
        const path = 'Usuario';
        this.id = res.user?.uid;
        this.datos = this.data.value;
        this.datos.uid = this.id;
        await this.firestore.crearDoc(this.datos, path, this.id);       
        Swal.fire({
          title: "¡Se registró!",
          width: 300,
          showCancelButton: false,
          confirmButtonColor: "#03c793",
        });
        this.loading.activo = true;
        this.router.navigate(['/login']);
            }
      }
  }

}