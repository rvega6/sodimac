import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Globals } from 'src/app/global';
import { Usuario } from 'src/app/models/models';
import { AuthService } from 'src/app/services/auth.service';
import { FirestoreService } from 'src/app/services/firestore.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loading: any = { activo: false, mensaje: '' };
  existe: boolean = false;
  usuario: any;
  credenciales = {
    correo: '',
    password: ''
  }
  constructor(private router: Router, private auth: AuthService, 
              private firestore: FirestoreService, private global: Globals) { }

 async ngOnInit() {
    this.loading.activo = true;
    await this.loadUsuarios();
    this.loading.activo = false;
  }

  registrarse(){
    this.router.navigate(['registro']);
  }

  async login(){
    this.loading.activo = true;
    const res = await this.auth.login(this.credenciales.correo, this.credenciales.password).catch(error => {
      console.log('Error');
      this.loading.activo = false;
    })

    if (res){
      this.loading.activo = false;
      const path = 'Usuario'
      if (this.usuario){
        this.usuario.forEach((element: { uid: string; rol: string; documento: number; 
                              primerNombre: string; primeroApellido: string;}) => {
          if (res.user?.uid == element.uid){
            this.global.setRol(element.rol);
            this.global.setUid(element.uid);
            this.global.setDocumentoPropietario(element.documento)
            this.global.setNombrePropietario(element.primerNombre)
            this.global.setApellidoPropietario(element.primeroApellido)
            this.existe = true;
            return;
          }
          
        });
        if(this.existe == false){
          // this.Toast('¡Usuario o contraseña incorrecta!');
          Swal.fire({
            title: "¡Usuario o contraseña incorrecta!",
            
            width: 300,
            showCancelButton: false,
            confirmButtonColor: "#03c793",
          });
        }else{
          this.router.navigate(['gestionCliente']);
        }
      }else{
        // this.Toast('¡Usuario o contraseña incorrecta!'); 
        Swal.fire({
          title: "¡Usuario o contraseña incorrecta!",
          
          width: 300,
          showCancelButton: false,
          confirmButtonColor: "#03c793",
        });
      } 
    }
  }

  loadUsuarios () {
    const path = 'Usuario'
   this.firestore.getCollection<Usuario>(path).subscribe(uid => {   
       this.usuario = uid;     
   })
 }

}
