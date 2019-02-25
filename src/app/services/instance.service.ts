import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'

import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class InstanceService {

  instance: {}

  constructor(private _http: HttpClient) { }

  get(): Observable<{}> {
       return this._http.get('http://localhost:8000/api/v1/instances')
  }

  create(): Observable<{}> {
      return this._http.post('http://localhost:8000/api/v1/instances/create', {
          user: 5
      })
  }
}
