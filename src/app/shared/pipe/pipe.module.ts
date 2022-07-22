import { NgModule } from "@angular/core";
import { DataPipe } from "./data.module";
import { ReplacePipe } from "./replace.pipe";

@NgModule({
    declarations: [
        ReplacePipe,
        DataPipe
    ],
    exports: [
        ReplacePipe,
        DataPipe
    ]
})
export class PipeModule {

}