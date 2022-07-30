import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { EduExpComponent } from './componentes/edu-exp/edu-exp.component';
import { AptitudesComponent } from './componentes/aptitudes/aptitudes.component';
import { ProyectPieComponent } from './componentes/proyect-pie/proyect-pie.component';
import { PortfolioService } from './servicios/portfolio.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    EduExpComponent,
    AptitudesComponent,
    ProyectPieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
