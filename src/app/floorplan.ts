export class Floorplan {
  paths: string[];
  photo: string;
  sold: boolean[];
  size: number[];
  apartments: number[];
  fullStringPaths: string;


  constructor() {
    this.paths = [];
    this.photo = "";
    this.sold = [];
    this.size = [];
    this.apartments = [];
    this.fullStringPaths = "";
  }
}
