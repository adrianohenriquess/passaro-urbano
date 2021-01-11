import { Oferta } from './shared/oferta.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

@Injectable()
export class OfertasService {

    urlBase = 'http://localhost:3000/ofertas';

    constructor(private httpClient: HttpClient){}

    public getOfertas(): Observable<Oferta[]> {
        return this.httpClient.get<Oferta[]>(this.urlBase);
    }

    public getOfertasPorCategoria(categoria: string): Observable<Oferta[]> {
        return this.httpClient.get<Oferta[]>(`${this.urlBase}?categoria=${categoria}`);
    }

    public getOferta(idOferta: string): Observable<Oferta> {
        return this.httpClient.get<Oferta>(`${this.urlBase}/${idOferta}`);
    }
}