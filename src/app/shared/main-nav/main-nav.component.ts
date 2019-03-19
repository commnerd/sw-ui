import { Component, OnInit } from '@angular/core'

import { PortService } from '../../services/port.service'

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.sass']
})
export class MainNavComponent implements OnInit {
  currentPort: number

  constructor(private _portService: PortService) { }

  ngOnInit() {
      this._portService.subscribe(
          newPort => this.currentPort = newPort
      )
  }

}
