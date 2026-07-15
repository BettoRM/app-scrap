export interface IUsuarioResponseList {
  codigo: number;
  ciclo: number;
  dni: string;
  usuario: string;
  correo: string;
  estado: boolean;
}

export interface IUsuarioForm {
  codigo: number;
  ciclo: number;
  dni: string;
  nombre: string;
  apellido: string;
  direccion: string;
  correo: string;
  passwo:string;
}
