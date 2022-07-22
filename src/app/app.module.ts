import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
//Modulo HTTP
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { UsuarioInfoComponent } from './usuario/usuario-info.component';
import { UsuarioListaComponent } from './usuario/usuario-lista.component';
import { Error404Component } from './core/component/error-404/error-404.component';
import { PipeModule } from './shared/pipe/pipe.module';
import { CoreModule } from './core/component/core.module';
import { CartaoVisitaModule } from './shared/component/cartao-de-visita/cartao-de-visita.module';
import { UsuarioCadastroComponent } from './usuario/usuario-cadastrar.component';

@NgModule({
  declarations: [
    AppComponent,
    UsuarioListaComponent,
    Error404Component,
    UsuarioInfoComponent,
    UsuarioCadastroComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    CartaoVisitaModule,
    PipeModule,
    CoreModule,
    
    //ROTAS DE ACESSO
    RouterModule.forRoot([
      { 
        path: '' ,redirectTo: 'usuario', pathMatch: 'full'
      },
      { 
        path: 'usuario', component: UsuarioListaComponent
      },
      { 
        path: 'usuario/cadastrar', component: UsuarioCadastroComponent
      },
      { 
        path: 'usuario/info/:id', component: UsuarioInfoComponent
      },
      { 
        path: '**', component: Error404Component
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
