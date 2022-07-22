import { Component, OnInit } from "@angular/core";
import { Usuario } from "./usuario";
import { UsuarioService } from "./usuario.service";

@Component({
    templateUrl: './usuario-lista.component.html',
    styleUrls: ['./usuario-lista.component.css']
})
export class UsuarioListaComponent implements OnInit {
    _usuarios: Usuario[] = [];
    usuariosFiltrados: Usuario[] = [];
    _filtrarPor!: string;
    

    //Injeção de Dependência - Usuario Serviço
    constructor(private UsuarioService: UsuarioService) {

    }

    ngOnInit(): void { //Inicialização de Usuario-lista
        this.retrieveAll();
    }

    retrieveAll(): void{
        this.UsuarioService.retrieveAll().subscribe({
            next: Usuarios => {
                this._usuarios = Usuarios;
                this.usuariosFiltrados = this._usuarios;
            },
            error: err => {console.log(err)}
        });
    }

    deleteById(UsuarioId: number): void {
        this.UsuarioService.deleteById(UsuarioId).subscribe({
            next: () => { console.log("Deletado com sucesso!");
            this.retrieveAll();},
            error: err => {console.log(err)}
        });
}

    set filtrar(value: string) {
        this._filtrarPor = value;
        this.usuariosFiltrados = this._usuarios.filter((Usuario: Usuario) => Usuario.name.toLocaleLowerCase().indexOf(this._filtrarPor.toLocaleLowerCase()) > -1)
    }

    get filtrar() {
        return this._filtrarPor;
    }
}