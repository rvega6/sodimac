export class Globals{

    setRol(rol: string) {
        localStorage.setItem('rol', rol);
      }

      getRol(): any {
        return localStorage.getItem('rol');
      }

      setUid(uid: string) {
        localStorage.setItem('uid', uid);
      }

      getUid(): any {
        return localStorage.getItem('uid');
      }

      setDocumentoPropietario(documentoPropietario: any) {
        localStorage.setItem('documentoPropietario', documentoPropietario);
      }

      getDocumentoPropietario(): any {
        return localStorage.getItem('documentoPropietario');
      }
      setNombrePropietario(nombrePropietario: string) {
        localStorage.setItem('nombrePropietario', nombrePropietario);
      }

      getNombrePropietario(): any {
        return localStorage.getItem('nombrePropietario');
      }
      setApellidoPropietario(apellidoPropietario: string) {
        localStorage.setItem('apellidoPropietario', apellidoPropietario);
      }

      getApellidoPropietario(): any {
        return localStorage.getItem('apellidoPropietario');
      }
}