import { Component, OnInit } from '@angular/core'
import { Terminal } from 'xterm'

@Component({
  selector: 'app-terminal',
  templateUrl: './terminal.component.html',
  styleUrls: ['./terminal.component.scss']
})
export class TerminalComponent implements OnInit {

  term: Terminal = null;

  constructor() { }

  ngOnInit() {
      let term = new Terminal()
      console.log(this.terminal)
      term.open(this.terminal)
      term.write('Hello from \x1B[1;3;31mxterm.js\x1B[0m $ ')
  }

}
