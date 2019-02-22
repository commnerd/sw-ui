import { Component, OnInit, ViewChild, ElementRef, ViewEncapsulation } from '@angular/core'
import { environment } from '../../environments/environment'
import { Terminal } from 'xterm'
import { attach } from 'xterm/lib/addons/attach/attach'

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-terminal',
  templateUrl: './terminal.component.html',
  styleUrls: ['./terminal.component.scss']
})
export class TerminalComponent implements OnInit {

  @ViewChild('terminal') terminal: ElementRef
  term: Terminal

  constructor() { }

  ngOnInit() {
      this.term = new Terminal()
      // let ws = new WebSocket('wss://localhost:4200/test/websocket')
      // attach(this.term, ws, true, true)
      this.term.open(this.terminal.nativeElement)

  }

}
