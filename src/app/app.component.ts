import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto, ProductosResponse } from './interfaces/productos.interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
    endpointProductos = 'http://test.cbtis051.edu.mx:3051/productos';
    //endpointProductos = 'http://localhost:3051/productos';

    productos:Producto[] = [];

    constructor ( private http: HttpClient ) {}

    obtenerProductos() {

        // Hacemos la petición al servicio
        this.http.get<Producto[]>(this.endpointProductos).subscribe(
            (resp) => {
                console.log(resp);
                // Obtenemos los productos y los guardamos en el array
                this.productos = resp;
            }
        );

    }

}
