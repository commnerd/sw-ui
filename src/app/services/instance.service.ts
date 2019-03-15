import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'

import { Observable } from 'rxjs'

import { Instance } from '../models/Instance'

@Injectable({
  providedIn: 'root'
})
export class InstanceService {

  constructor(private _http: HttpClient) { }

  get(): Observable<Instance> {
       return this._http.get('http://localhost:8000/api/v1/instances') as Observable<Instance>
  }

  create(image: string): Observable<Instance> {
      return this._http.post('http://localhost:8000/api/v1/instances/create', {
          image: image
      }) as Observable<Instance>
  }
}
