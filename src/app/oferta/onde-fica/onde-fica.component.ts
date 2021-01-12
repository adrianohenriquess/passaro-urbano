import { OndeFica } from './../../shared/onde-fica.model';
import { OfertasService } from './../../ofertas.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-onde-fica',
  templateUrl: './onde-fica.component.html',
  styleUrls: ['./onde-fica.component.css'],
  providers: [ OfertasService ]
})
export class OndeFicaComponent implements OnInit {

  public idRotaPai: number = 0;  
  public ondeFica!: OndeFica;

  constructor(private route: ActivatedRoute,
              private ofertasService: OfertasService) { }

  ngOnInit(): void {
    this.route.parent!.params.subscribe((parametros: Params) =>{
      this.ofertasService.getOndeFicaOfertaPorId(parametros.id)
            .subscribe(ondeFica => {
              this.ondeFica = ondeFica;
            });
    })
  }

}
