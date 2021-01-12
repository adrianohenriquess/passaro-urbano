import { Observable } from 'rxjs';
import { HOST } from './app.api';
import { HttpClient } from '@angular/common/http';
import { Pedido } from './shared/pedido.model';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable()
export class OrdemCompraService {

    constructor(private httpClient: HttpClient) {}

    public efetivarCompra(pedido: Pedido): Observable<any> {
        return this.httpClient.post<Pedido>(`${HOST}/pedidos`, pedido);
    }
}