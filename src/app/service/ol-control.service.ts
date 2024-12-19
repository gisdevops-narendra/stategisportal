import { Injectable } from '@angular/core';
import MousePosition from 'ol/control/MousePosition';
import ScaleLine from 'ol/control/ScaleLine';
import Zoom from 'ol/control/Zoom';
import Attribution from 'ol/control/Attribution';
import FullScreen from 'ol/control/FullScreen';
import Rotate from 'ol/control/Rotate';

@Injectable({
  providedIn: 'root'
})
export class OlControlService {
  constructor() {}

  getControls(config: { 
    mousePosition?: any; 
    scaleLine?: any; 
    zoomControl?: any; 
    attribution?: any;
    fullScreen?: any;
    rotate?: any;
  }) {
    const controls = [];

    // Check for MousePosition control
    if (config.mousePosition?.enabled) {
      controls.push(
        new MousePosition({
          coordinateFormat: (coord) => {
            if (!coord) return ''; 
            const lonLat = coord;
            const lat = lonLat[1].toFixed(5);
            const lon = lonLat[0].toFixed(5);
            const coordinatesElement = document.getElementById('coordinates');
            if (coordinatesElement) {
              coordinatesElement.textContent = `Lat: ${lat}, Lon: ${lon}`;
            }
            return ''; // This prevents displaying the coordinate in the control itself.
          },
          projection: config.mousePosition?.projection || 'EPSG:4326',
          className: config.mousePosition?.className || 'ol-mouse-position',
        })
      );
    }

    // Check for ScaleLine control
    if (config.scaleLine?.enabled) {
      controls.push(
        new ScaleLine({
          className: config.scaleLine?.className || 'ol-scale-line',
        })
      );
    }

    // Check for Zoom control
    if (config.zoomControl?.enabled) {
      controls.push(
        new Zoom({
          className: config.zoomControl?.className || 'ol-zoom',
        })
      );
    }

    // Check for Attribution control
    if (config.attribution?.enabled) {
      controls.push(
        new Attribution({
          className: config.attribution?.className || 'ol-attribution',
        })
      );
    }

    // Check for FullScreen control
    if (config.fullScreen?.enabled) {
      controls.push(
        new FullScreen({
          className: config.fullScreen?.className || 'ol-full-screen',
        })
      );
    }

    // Check for Rotate control
    if (config.rotate?.enabled) {
      controls.push(
        new Rotate({
          className: config.rotate?.className || 'ol-rotate',
        })
      );
    }

    return controls;
  }
}
