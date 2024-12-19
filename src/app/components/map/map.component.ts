import { Component, OnInit } from '@angular/core';
import { MapService } from 'src/app/service/map.service';
import { ConfigService } from 'src/app/service/config.service';
import { OlControlService } from 'src/app/service/ol-control.service';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  constructor(
    private mapService: MapService,
    private configService: ConfigService,
    private olControlService: OlControlService
  ) {}

  ngOnInit(): void {
    this.configService.getConfig().subscribe((config) => {
      const controls = this.olControlService.getControls(config.controls);
      const map = new Map({
        target: 'map',
        layers: [
          new TileLayer({
            source: new OSM(),
          }),
        ],
        view: new View({
          center: [71.34517605159864, 22.415027852040456],
          zoom: 7.2,
          projection: 'EPSG:4326',
        }),
        controls: controls,
      });

      this.mapService.setMap(map);
      (window as any).map = map;
    });
  }
}
