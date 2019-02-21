import { Component, OnInit, ViewChild, ElementRef, ViewEncapsulation } from '@angular/core'
import { Terminal } from 'xterm'

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-terminal',
  templateUrl: './terminal.component.html',
  styleUrls: ['./terminal.component.scss']
})
export class TerminalComponent implements OnInit {

  @ViewChild('terminal') terminal: ElementRef
  term: Terminal = new Terminal()

  constructor() { }

  ngOnInit() {
      this.term.open(this.terminal.nativeElement)
      this.term.writeln('Welcome to xterm.js')
  }

}
