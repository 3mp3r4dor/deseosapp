import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { Lista, ListaItem } from '../../app/classes/index';
import { ListaDeseosService } from '../../app/services/lista-deseos.service';

 
@Component({
    selector: 'app-detalle',
    templateUrl: './detalle.component.html',
})
export class DetalleComponent implements OnInit {

    idx: number;
    lista: Lista;

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        public _listaDeseoService: ListaDeseosService,
        public alertCtrl: AlertController
    ) {

        this.idx = this.navParams.get("idx");
        this.lista = this.navParams.get("lista");
     }

    ngOnInit() { }

    actualizar(item: ListaItem) { 

        item.completo = !item.completo;

        let todosMarcados = true;
        for( let item of this.lista.items ){
            if( !item.completo ){
                todosMarcados = false;
                break;
            }
        }

        this.lista.terminada = todosMarcados;

        this._listaDeseoService.actualizaData();
    }

    borrarItem() {
        let confirm = this.alertCtrl.create({
            title: this.lista.nombre,
            message: '¿Está seguro que desea eliminar la lista?',
            buttons: ['Cancelar',                              
              {
                text: 'Aceptar',
                handler: () => {
                  this._listaDeseoService.borrarLista( this.idx );
                  this.navCtrl.pop();
                }
              }
            ]
          });
          confirm.present();
    }
}
