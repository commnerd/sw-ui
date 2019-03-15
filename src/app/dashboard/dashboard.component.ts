import { Component, OnInit } from '@angular/core'
import { FormBuilder } from '@angular/forms'

import { InstanceService } from '../services/instance.service'
import { VolumeService } from '../services/volume.service'
import { NodeService } from '../services/node.service'


import { Instance } from '../models/instance'
import { Volume } from '../models/volume'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  form = this._fb.group({
      "imageSelect": [''],
      "imageText": [''],
      "mountPoint": [''],
  });

  instance: Instance = null
  volume: Volume = null
  images: Object

  constructor(
      private _fb: FormBuilder,
      private _instanceService: InstanceService,
      private _volumeService: VolumeService,
      private _nodeService: NodeService,
  ) {}

  ngOnInit() {
      this.images = {
          "debian": "Debian",
          "nginx": "Nginx",
      }
      this._instanceService.get().subscribe(
          (instance: Instance) => {
              this.instance = instance
              this.setImageValues(this.instance.image)
          }
      )
  }

  requestImage(image) {
      this.setImageValues(image)

      this._instanceService.create(image).subscribe(
          (instance: Instance) => {
              this.instance = instance
              this.setImageValues(this.instance.image)
          }
      )
  }

  requestMountPointVolume(mountPoint: string) {
      this._volumeService.create(this.instance, mountPoint).subscribe(
          (volume: Volume) => {
              this.volume = volume
              this.setImageValues(this.instance.image)
          }
      )
  }

  setImageValues(image: string) {
      this.form.get("imageSelect").setValue("")
      this.form.get("imageText").setValue(image)

      if(image == undefined || this.images[image] != undefined) {
          this.form.get("imageSelect").setValue(image)
          this.form.get("imageText").setValue("")
      }
  }

  requestMountPointVolumeOnEnter(event: KeyboardEvent) {
      if(event.key === "Enter") {
          this.requestImage(this.form.get("mountPoint").value)
      }
  }

  requestImageOnEnter(event: KeyboardEvent) {
      if(event.key === "Enter") {
          this.requestMountPointVolume(this.form.get("imageText").value)
      }
  }

  hasImage(): boolean {
      if(this.instance == null) {
          return false;
      }
      return true;
  }

}
