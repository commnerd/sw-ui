import { Component, OnInit } from '@angular/core'

import { NodeService } from '../services/node.service'
import { Node } from '../models/node'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {
  node: Node

  constructor(private _nodeService: NodeService) {}

  ngOnInit() {
     this._nodeService.getNode().subscribe(
         node => {
            this.node = node
         }
     )
  }

}
