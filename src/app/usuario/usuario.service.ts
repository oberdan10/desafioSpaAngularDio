import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Usuario } from "./usuario";

@Injectable({
    providedIn: 'root'
})

export class UsuarioService {

    private Usuariourl: string = "http://localhost:3100/api/usuario";
    constructor(private httpClient: HttpClient) { }

    retrieveAll() : Observable<Usuario[]> {
        return this.httpClient.get<Usuario[]>(this.Usuariourl);
    }

    retrieveById(id: Number): Observable<Usuario>{
        return this.httpClient.get<Usuario>(`${this.Usuariourl}/${id}`);
    }

    save(usuario: Usuario): Observable<Usuario> {
        if(usuario.id){
            return this.httpClient.put<Usuario>(`${this.Usuariourl}/${usuario.id}`, usuario);
        } else {
            return this.httpClient.post<Usuario>(`${this.Usuariourl}`, usuario);
        }
    }

    deleteById(id: Number): Observable<any>{
        return this.httpClient.delete<any>(`${this.Usuariourl}/${id}`);
    }
}
