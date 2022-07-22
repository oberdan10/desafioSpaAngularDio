import { Component, OnInit } from "@angular/core";
import { Usuario } from "./usuario";
import { UsuarioService } from "./usuario.service";


@Component({
    templateUrl: './usuario-cadastrar.component.html'
})

export class UsuarioCadastroComponent implements OnInit {

    usuario?: Usuario;
    arquivo?: File;
    imagem!: String;
    reader: FileReader = new FileReader();

    constructor(private UsuarioService: UsuarioService) { }

    ngOnInit(): void {
    }

    onChange(event: any): void {
        this.arquivo = <File>event.srcElement.files[0];
        // Define o que ocorre quando concluir:
        this.reader.onload = function (e) { 
            // Define o `src` do elemento para o resultado:
            e.target!.result;
        }
        this.reader.readAsDataURL(this.arquivo!);
    }

    save(): void {

           this.usuario = {
            name: `${String((document.getElementById('name') as HTMLInputElement).value)}`,
            email: `${String((document.getElementById('email') as HTMLInputElement).value)}`,
            alternativeEmail: `${String((document.getElementById('alternativeEmail') as HTMLInputElement).value)}`,
            imageUrl: `${String(`${this.reader.result}`)}`,
            dateCreated: `${String(new Date())}`
        }

        this.UsuarioService.save(this.usuario).subscribe({
            next: usuarios => {console.log("Salvo com sucesso!") },
            error: err => {console.log(err)}
        });
    }

}