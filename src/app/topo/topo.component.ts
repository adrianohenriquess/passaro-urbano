import { Observable, Subject } from 'rxjs';
import { OfertasService } from './../ofertas.service';
import { Component, OnInit } from '@angular/core';
import { Oferta } from '../shared/oferta.model';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';

@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css'],
  providers: [ OfertasService ]
})
export class TopoComponent implements OnInit {

  public ofertas!: Observable<Oferta[]>;
  private subjectPesquisa: Subject<string> = new Subject<string>();

  constructor(private ofertasService: OfertasService) { }

  ngOnInit(): void {
    this.ofertas = this.subjectPesquisa
      .pipe(
        debounceTime(1000),
        distinctUntilChanged(),
        switchMap((termo: string) => {
          console.log('chamando a api' + termo);
          if (termo.trim() === '') {
            return Observable.of<Oferta[]>([]);
          }
          return this.ofertasService.pesquisaOfertas(termo);
        })
      ).catch((erro: any) => {
        console.log(erro);
        return Observable.of<Oferta[]>([]);
      })
  }

  public pesquisa(termoDaBusca: string): void {
    console.log('key up ' + termoDaBusca);
    this.subjectPesquisa.next(termoDaBusca);
  }

  public limpaPesquisa(): void {
    this.subjectPesquisa.next('');
  }

}
