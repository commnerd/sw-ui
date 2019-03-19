import { BehaviorSubject, Observable } from 'rxjs'
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PortService {
  private _port: BehaviorSubject<number>

  constructor() {
      this._port = new BehaviorSubject(93)
  }

  getPort(): Observable<number> {
      return this._port
  }
}
