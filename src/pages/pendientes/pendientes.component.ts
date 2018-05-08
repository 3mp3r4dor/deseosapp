import { Component, OnInit } from "@angular/core";
import { ListaDeseosService } from '../../app/services/lista-deseos.service';
import { NavController} from 'ionic-angular';
import { AgregarComponent } from '../agregar/agregar.component';


@Component({
    selector: 'app-pendientes',
    templateUrl: 'pendientes.component.html',
})

export class PendientesComponent implements OnInit {

    constructor( private _listaDeseos: ListaDeseosService,
                 private navCtrl: NavController ) {}

    ngOnInit() {}

    irAgregar(){
        console.log('Agregaaaar!');
        this.navCtrl.push( AgregarComponent );
    }
    
} 