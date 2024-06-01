import {Floorplan} from "./floorplan";

export class Project {
  name: string;
  desc: string;
  address: string;
  id: string;
  photo: string;
  noApartments: number;

  floors: string[];
  svgPaths: string[];
  gallery: string[];

  floorplan: Floorplan[] = [];

  constructor() {
    this.floorplan = [];
    this.svgPaths = [];
    this.floors = [];
  }
}
