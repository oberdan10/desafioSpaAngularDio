import { NgModule } from "@angular/core";
import { PipeModule } from "../../pipe/pipe.module";
import { CartaoVisitaComponent } from "./cartao-de-visita.component";

@NgModule({
    declarations: [CartaoVisitaComponent],
    exports: [CartaoVisitaComponent],
    imports: [PipeModule]
})
export class CartaoVisitaModule {

}