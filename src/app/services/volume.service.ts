import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'

import { Instance } from '../models/instance'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class VolumeService {
    constructor(private _http: HttpClient) { }

    get(): Observable<Object> {
         return this._http.get('http://localhost:8000/api/v1/volumes')
    }

    create(instance: Instance, mountPoint: string): Observable<Object> {
        return this._http.post('http://localhost:8000/api/v1/volumes/create', {
            instance: instance,
            mountPoint: mountPoint,
        })
    }
}
