import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Usuario } from "./usuario";
import { UsuarioService } from "./usuario.service";


@Component({
    templateUrl: './Usuario-info.component.html'
})

export class UsuarioInfoComponent implements OnInit {

    usuario?: Usuario;

    constructor(private activatedRoute: ActivatedRoute, private UsuarioService: UsuarioService){ }

    ngOnInit(): void {
        this.UsuarioService.retrieveById(Number(this.activatedRoute.snapshot.paramMap.get('id'))).subscribe({
            next: usuarios => {
                this.usuario = usuarios;
            },
            error: err => {console.log(err)}
        })
    }

    save(): void {
        this.UsuarioService.save(this.usuario!).subscribe({
            next: usuarios => { console.log("Salvo com sucesso!") },
            error: err => {console.log(err)}
        });
    }

}