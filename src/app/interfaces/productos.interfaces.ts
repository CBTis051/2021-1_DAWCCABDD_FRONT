export interface ProductosResponse {
    mensaje: string;
    fecha:   string;
    autor:   string;
    data:    Producto[];
}

export interface Producto {
    id:          number;
    nombre:      string;
    descripcion: string;
    modelo:      string;
    marca:       string;
    imagen:      string;
    created:     Date;
    modified:    Date;
}
