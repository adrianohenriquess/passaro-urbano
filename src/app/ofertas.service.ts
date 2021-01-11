import { urlApi } from './app.api';
import { Oferta } from './shared/oferta.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

@Injectable()
export class OfertasService {

    constructor(private httpClient: HttpClient){}

    public getOfertas(): Observable<Oferta[]> {
        return this.httpClient.get<Oferta[]>(urlApi);
    }

    public getOfertasPorCategoria(categoria: string): Observable<Oferta[]> {
        return this.httpClient.get<Oferta[]>(`${urlApi}?categoria=${categoria}`);
    }

    public getOferta(idOferta: string): Observable<Oferta> {
        return this.httpClient.get<Oferta>(`${urlApi}/${idOferta}`);
    }
}