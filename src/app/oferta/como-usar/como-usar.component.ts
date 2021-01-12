import { ComoUsar } from './../../shared/como-usar.model';
import { OfertasService } from './../../ofertas.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Oferta } from 'src/app/shared/oferta.model';

@Component({
  selector: 'app-como-usar',
  templateUrl: './como-usar.component.html',
  styleUrls: ['./como-usar.component.css'],
  providers: [ OfertasService ]
})
export class ComoUsarComponent implements OnInit {

  public idRotaPai!: number;
  public comoUsar!: ComoUsar;

  constructor(private route: ActivatedRoute,
              private ofertasService: OfertasService) { }

  ngOnInit(): void {
    this.route.parent!.params.subscribe((parametros: Params) =>{
      this.ofertasService.getComoUsarOfertaPorId(parametros.id)
            .subscribe(comoUsar => {
              this.comoUsar = comoUsar;
            });
    })
  }

}
