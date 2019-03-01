import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'

import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class InstanceService {

  constructor(private _http: HttpClient) { }

  get(): Observable<Object> {
       return this._http.get('http://localhost:8000/api/v1/instances')
  }

  create(image: string): Observable<Object> {
      return this._http.post('http://localhost:8000/api/v1/instances/create', {
          image: image
      })
  }
}
