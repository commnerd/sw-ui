import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'

import { BehaviorSubject, Observable } from 'rxjs'

import { PortService } from './port.service'
import { Node } from '../models/node'

@Injectable({
  providedIn: 'root'
})
export class NodeService {

    private _node: BehaviorSubject<Node> = new BehaviorSubject<Node>({
        id: null,
        address: null,
        api: {
            base_path: null,
            domain: null,
            host_port: null,
        },
        host: null,
        role: null,
        services: [],
        version: null
    })

    constructor(
        private _http: HttpClient,
        private _portService: PortService
    ) {
        _portService.getPort().subscribe(
            newPort => {
                this._http.get(`http://localhost:${newPort}/node`).subscribe(
                    newNode => this._node.next(newNode as Node)
                )
            }
        )
    }

    getNode(): Observable<Node> {
         return this._node
    }
}
