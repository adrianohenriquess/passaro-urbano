import { OndeFica } from './shared/onde-fica.model';
import { HOST } from './app.api';
import { Oferta } from './shared/oferta.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { ComoUsar } from './shared/como-usar.model';

@Injectable()
export class OfertasService {

    constructor(private httpClient: HttpClient){}

    public getOfertas(): Observable<Oferta[]> {
        return this.httpClient.get<Oferta[]>(`${HOST}/ofertas`);
    }

    public getOfertasPorCategoria(categoria: string): Observable<Oferta[]> {
        return this.httpClient.get<Oferta[]>(`${HOST}/ofertas?categoria=${categoria}`);
    }

    public getOferta(idOferta: string): Observable<Oferta> {
        return this.httpClient.get<Oferta>(`${HOST}/ofertas/${idOferta}`);
    }

    public getComoUsarOfertaPorId(id: number): Observable<ComoUsar> {
        return this.httpClient.get<ComoUsar>(`${HOST}/como-usar/${id}`);
    }

    public getOndeFicaOfertaPorId(id: number): Observable<OndeFica> {
        return this.httpClient.get<OndeFica>(`${HOST}/onde-fica/${id}`);
    }

    public pesquisaOfertas(termo: string): Observable<Oferta[]> {
        return this.httpClient.get<Oferta[]>(`${HOST}/ofertas?descricao_oferta_like=${termo}`);
    }
}