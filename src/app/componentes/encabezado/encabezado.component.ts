import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {
  miPortfolio:any;
  router: any;
  constructor(private datosPortfolio:PortfolioService,
                      router:Router) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data =>{
      console.log(data);
      this.miPortfolio=data;
    });
  }

  cerrar(){
    this.router.navigate(['/iniciar-sesion'])
  }

}
