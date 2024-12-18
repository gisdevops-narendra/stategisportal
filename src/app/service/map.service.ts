import { Injectable } from '@angular/core';
import Map from 'ol/Map';

@Injectable({
  providedIn: 'root',
})
export class MapService {
  private map!: Map;

  constructor() {}

  // Set the map instance (to be called by the component)
  setMap(map: Map): void {
    this.map = map;
  }

  // Get the map instance
  getMap(): Map {
    if (!this.map) {
      throw new Error('Map not initialized. Please call setMap() first.');
    }
    return this.map;
  }
}
