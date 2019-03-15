import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'

import { Observable } from 'rxjs'

import { Instance } from '../models/instance'
import { Volume } from '../models/volume'


@Injectable({
  providedIn: 'root'
})
export class VolumeService {
    constructor(private _http: HttpClient) { }

    get(): Observable<Volume> {
         return this._http.get('http://localhost:8000/api/v1/volumes') as Observable<Volume>
    }

    create(instance: Instance, mountPoint: string): Observable<Volume> {
        return this._http.post('http://localhost:8000/api/v1/volumes/create', {
            instance: instance,
            mountPoint: mountPoint,
        }) as Observable<Volume>
    }
}
