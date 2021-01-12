import { Observable } from 'rxjs';
import { OfertasService } from './../ofertas.service';
import { Component, OnInit } from '@angular/core';
import { Oferta } from '../shared/oferta.model';

@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css'],
  providers: [ OfertasService ]
})
export class TopoComponent implements OnInit {

  constructor(private ofertasService: OfertasService) { }

  ngOnInit(): void {
  }

  public pesquisa(termoDaBusca: string): void {
    this.ofertasService.pesquisaOfertas(termoDaBusca)
      .subscribe((ofertas => {
        console.log(ofertas);
      }));
  }

}
