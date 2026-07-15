export interface IPlanResponseList {
  codigo: number;
  nombre: string;
  precio: number;
  marca: boolean;
  tabla: boolean;
  json: boolean;
  estado: boolean;
}

export interface IPlanForm {
  codigo: number;
  nombre: string;
  precio: string;
  marca: boolean;
  tabla: boolean;
  json: boolean;
}
