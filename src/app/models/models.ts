export class Usuario {
    uid!: string;
    primerNombre!: string;
    segundoNombre!: string;
    primerApellido!: string;
    segundoApellido!: string;
    tipoDocumento!: string;
    documento!: number;
    celular!: number;
    direccion!: string;
    correo!: string;
    contrasena!: string;
    rol!: 'Cliente';
}

export class Factura {
    uid!: string;
    primerNombre!: string;
    segundoNombre!: string;
    primerApellido!: string;
    segundoApellido!: string;
    tipoDocumento!: string;
    documento!: number;
    celular!: number;
    direccion!: string;
    correo!: string;
    contrasena!: string;
    rol!: 'Cliente';
}

export class Vehiculo {
    marca!: string;
    referencia!: string;
    placa!: string;
    modelo!: number;
    creadoX!: number;
    documentoPropietario!: number;
    nombrePropietario!: string;
    apellidoPropietario!: number;
}

export class Mantenimiento {
    idMantenimiento!:string;
    marca!: string;
    referencia!: string;
    placa!: string;    
    modelo!: number;
    identificacionMecanico!: number;
    nombreMecanico!: string;
    mantenimientoCreadoX!: number;
    presupuestoPropietario!: number;
    documentoPropietario!: number;
    nombrePropietario!: string;
    apellidoPropietario!: string;
    descripcionArreglo!: string;
    imagen!: string;
    estado!: string;
}

export const RolesLogin = ['Cliente','Administrador'];