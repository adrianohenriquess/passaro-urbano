import { Observable, Observer, Subscription } from 'rxjs';
import { OfertasService } from './../ofertas.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Oferta } from '../shared/oferta.model';

@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
  providers: [OfertasService]
})
export class OfertaComponent implements OnInit, OnDestroy {

  public idOferta: string = '';
  public oferta!: Oferta;

  constructor(private activatedRoute: ActivatedRoute, 
              private router: Router,
              private ofertasService: OfertasService) { }

  ngOnInit(): void {
    //subscribe para programação reativa para assistir alterações na rota
    this.activatedRoute.params.subscribe((parametro: any) =>{
      this.ofertasService.getOferta(parametro.id).subscribe(oferta => {
        this.oferta = oferta;
      });
    });
  }

  ngOnDestroy(): void {

  }

}
