import { Component, OnInit } from "@angular/core";
import { Lista, ListaItem } from '../../app/classes/index';
import { AlertController, NavController } from 'ionic-angular';


//servicios
import { ListaDeseosService } from '../../app/services/lista-deseos.service';

@Component({
    selector: 'app-agregar',
    templateUrl: 'agregar.component.html',
})

export class AgregarComponent implements OnInit {

    nombreLista: string = "";
    nombreItem: string = "";

    items: ListaItem[] = [];

    constructor( public _listaDeseos: ListaDeseosService, 
                 public alertController: AlertController,
                 public navController: NavController) {}

    ngOnInit() {}

    agregar() {
        console.log('Entra a agregar elemento');
        if(this.nombreItem.length == 0){
            return;
        }

        let item = new ListaItem();
        item.nombre = this.nombreItem;

        this.items.push( item );
        this.nombreItem = "";
    }

    borrar( idx: number ) {
        this.items.splice( idx, 1);
    }

    guardarLista() {
        if( this.nombreLista.length == 0 ){
            let alert = this.alertController.create({
                title: 'Nombre de la lista',
                subTitle: 'El nombre de la lista es necesaria!',
                buttons: ['OK']
            });
            alert.present();
            return;            
        }

        let lista = new Lista( this.nombreLista );
        lista.items = this.items;

        this._listaDeseos.listas.push( lista );
        this.navController.pop();

    }
    
} 