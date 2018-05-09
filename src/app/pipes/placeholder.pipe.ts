import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'placeholder'
})

export class PlaceholderPipe implements PipeTransform {
    transform( value: string, textoDefecto: string): string {
        return ( value )? value: textoDefecto;
    }
}