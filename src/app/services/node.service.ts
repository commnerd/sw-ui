import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'

import { Observable } from 'rxjs'

import { Node } from '../models/node'


@Injectable({
  providedIn: 'root'
})
export class NodeService {
    constructor(private _http: HttpClient) { }

    get(): Observable<Node> {
         return this._http.get('http://localhost:93/node') as Observable<Node>
    }
}
