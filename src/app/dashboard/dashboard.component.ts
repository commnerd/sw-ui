import { Component, OnInit } from '@angular/core'
import { FormControl } from '@angular/forms'

import { InstanceService } from '../services/instance.service'
import { VolumesService } from '../services/volume.service'

import { Instance } from '../models/instance'
import { Volume } from '../models/volume'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  imageSelect = new FormControl('')
  imageText = new FormControl('')
  mountPoint = new FormControl('')

  instance: Instance = null
  images: Object

  constructor(private _instanceService: InstanceService) {
      this.images = {
          "debian": "Debian",
          "nginx": "Nginx",
      }
  }

  ngOnInit() {
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
      this._volumeService.create().subscribe(
          (instance: Instance) => {
              this.instance = instance
              this.setImageValues(this.instance.image)
          }
      )
  }

  setImageValues(image: string) {
      this.imageSelect.setValue("")
      this.imageText.setValue(image)

      if(image == undefined || this.images[image] != undefined) {
          this.imageSelect.setValue(image)
          this.imageText.setValue("")
      }
  }

  requestMountPointVolumeOnEnter(event: KeyboardEvent) {
      if(event.key === "Enter") {
          this.requestImage(this.mountPoint.value)
      }
  }

  requestImageOnEnter(event: KeyboardEvent) {
      if(event.key === "Enter") {
          this.requestMountPoint(this.imageText.value)
      }
  }

  hasImage(): bool {
      if(this.instance == null) {
          return false;
      }
      return true;
  }

}
