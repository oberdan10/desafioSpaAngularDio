import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'data_br'
})
export class DataPipe implements PipeTransform {
    transform(value: string){
        let data = new Date(value);
        let data_completa = `${String(data.getDate()).padStart(2, '0')}/${String(data.getMonth()+1).padStart(2, '0')}/${data.getFullYear()}`;
        return data_completa;
    }
}