import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'

import { BehaviorSubject, Observable } from 'rxjs'

import { PortService } from './port.service'
import { Node } from '../models/node'

@Injectable({
  providedIn: 'root'
})
export class NodeService {

    private _node: BehaviorSubject<Node>

    constructor(
        private _http: HttpClient,
        private _portService: PortService
    ) {
        _portService.getPort().subscribe(
            newPort => _http.get(`http://localhost:${newPort}/node`).subscribe(
                (newNode as Node) => {
                    this._node.next(newNode)
                }
            )
        )
    }

    get(): Observable<Node> {
         return this._node
    }
}
