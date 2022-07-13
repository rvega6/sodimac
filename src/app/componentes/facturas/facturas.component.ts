import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-facturas',
  templateUrl: './facturas.component.html',
  styleUrls: ['./facturas.component.css']
})
export class FacturasComponent implements OnInit {
  data: FormGroup;
  constructor(private fb: FormBuilder ) { 
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

}
