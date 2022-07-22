import { Component, OnChanges, Input } from '@angular/core';


@Component({
    selector: 'app-cartao-de-visita',
    templateUrl: './cartao-de-visita.component.html',
    styleUrls: ['./cartao-de-visita.component.css']
})

export class CartaoVisitaComponent implements OnChanges {
    @Input()
    usuario: any =[];
    
    ngOnChanges(): void {

    }
}