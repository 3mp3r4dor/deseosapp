import { Component, OnInit } from "@angular/core";
import { ListaDeseosService } from '../../app/services/lista-deseos.service';
import { NavController} from 'ionic-angular';
import { Lista } from '../../app/classes/listas';
import { DetalleComponent } from '../detalle/detalle.component';

@Component({
    selector: 'app-terminados',
    templateUrl: 'terminados.component.html',
})

export class TerminadosComponent implements OnInit {
    
    constructor( public _listaDeseos: ListaDeseosService,
        private navCtrl: NavController ) {}    

    ngOnInit() {}

    verDetalle( lista: Lista, idx: number ) {
        this.navCtrl.push( DetalleComponent, {
            lista, idx
        });
    }
}