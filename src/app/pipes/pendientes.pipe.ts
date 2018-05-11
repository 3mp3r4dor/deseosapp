import { Lista } from '../classes';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'pendientes',
    pure: false
})
export class PendientesPipe implements PipeTransform {
    transform( listas: Lista[], estado: boolean ): Lista[] {
        let listaFiltrada: Lista[] = [];

        for( let lista of listas){
            if( lista.terminada == estado ){
                listaFiltrada.push( lista );
            }
        }

        return listaFiltrada;

    }
}