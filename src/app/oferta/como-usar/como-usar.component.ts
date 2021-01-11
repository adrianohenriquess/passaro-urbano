import { ComoUsar } from './../../shared/como-usar.model';
import { OfertasService } from './../../ofertas.service';
import { ActivatedRoute } from '@angular/router';
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
    this.idRotaPai = this.route.parent!.snapshot.params['id'];
    this.ofertasService.getComoUsarOfertaPorId(this.idRotaPai)
          .subscribe(comoUsar => {
            this.comoUsar = comoUsar;
          });
  }

}
