import { Component, OnInit } from '@angular/core'
import { FormControl } from '@angular/forms'

import { InstanceService } from '../services/instance.service'
import { Instance } from '../models/instance'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  image = new FormControl('')
  instance: Instance = null;

  constructor(private _instanceService: InstanceService) { }

  ngOnInit() {
      this._instanceService.get().subscribe(
          (instance: Instance) => {
              this.instance = instance
          }
      )
  }

  requestImage() {
      this._instanceService.create().subscribe(
          (instance: Instance) => {
              this.instance = instance
          }
      )
  }

}
