import { Injectable } from '@angular/core';
import { Lista } from '../classes/listas';

@Injectable()
export class ListaDeseosService {

        listas: Lista[] = [];
        constructor() {

            /* let lista1 = new Lista('Compras de Supermercado');
            let lista2 = new Lista('Juegos que deseo');
            let lista3 = new Lista('Cosas de la universidad');

            this.listas.push( lista1 );
            this.listas.push( lista2 );
            this.listas.push( lista3 ); */
            this.cargarData();
            console.log('Servicio Inicializado');

        }

        actualizaData() {
            console.log( this.listas );
            localStorage.setItem( "data", JSON.stringify( this.listas ) );
        }

        cargarData() {
            console.log('Cargando los datos.....');
            if( localStorage.getItem("data")){
                console.log('Debería de cargar los datos');
                this.listas = JSON.parse(localStorage.getItem("data"));
            }            
        }

        agregarLista( lista: Lista) {
            this.listas.push( lista );
            this.actualizaData();
        }
    }
