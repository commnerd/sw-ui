import { Component, OnInit } from '@angular/core'
import { FormBuilder } from '@angular/forms'

import { PortService } from '../../services/port.service'

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.sass']
})
export class MainNavComponent implements OnInit {
  form = this._fb.group({
    port: ['']
  })

  constructor(
    private _portService: PortService,
    private _fb: FormBuilder
  ) { }

  ngOnInit() {
    this._portService.getPort().subscribe(
      newPort => this.form.get('port').setValue(newPort)
    )
  }

  setPort() {
    this._portService.setPort(this.form.get('port').value)
  }

}
