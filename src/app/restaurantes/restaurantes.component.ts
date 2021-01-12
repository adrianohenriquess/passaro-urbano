import { OfertasService } from './../ofertas.service';
import { Oferta } from './../shared/oferta.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-restaurantes',
  templateUrl: './restaurantes.component.html',
  styleUrls: ['./restaurantes.component.css'],
  providers: [ OfertasService ]
})
export class RestaurantesComponent implements OnInit {

  public ofertas: Oferta[] = [];
  //public dataTeste: any = new Date(2017, 8, 30);

  constructor( private ofertasService: OfertasService ) {}

  ngOnInit(): void {
    this.ofertasService.getOfertasPorCategoria('restaurante')
      .subscribe(ofertas => {
        this.ofertas = ofertas;
      });
  }

}
