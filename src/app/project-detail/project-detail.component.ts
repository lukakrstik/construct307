import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap} from "@angular/router";
import {switchMap} from "rxjs";
import {DbService} from "../db.service";
import {NavbarComponent} from "../navbar/navbar.component";
import {FooterComponent} from "../footer/footer.component";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, CommonModule],
  templateUrl: './project-detail.component.html',
  styleUrl: './project-detail.component.css'
})
export class ProjectDetailComponent implements OnInit {
  private id: string;
  constructor(private activatedRoute: ActivatedRoute, private dbService: DbService) {
  }
  public project: any;
  public show: boolean = false
  public floorplanIndex: number = 0
  public floorplanImg: string = ""
  public helper: boolean = true;

  Hover(i : number){
    //@ts-ignore
    document.getElementById("apart" + i).classList.add("hoveredApart")
  }
  OutHover(i : number){
    //@ts-ignore
    document.getElementById("apart" + i).classList.remove("hoveredApart")
  }
  Floorplan(index : number){
    this.show = true;
    this.floorplanImg = this.project.floorplan[index].photo
    this.floorplanIndex = index;
    setTimeout(() => {document.getElementById("floorplan-container")?.scrollIntoView({behavior: 'smooth', block: 'center'})}, 20)

  }
  CallFloor(floor: string){
    //@ts-ignore
    document.getElementById("floor").innerHTML = floor
    this.helper = false;
  }
  Revert(){
    //@ts-ignore
    document.getElementById("floor").innerHTML = ""
  }
  ngOnInit() {
    this.activatedRoute.params.subscribe(() => {this.id = this.activatedRoute.snapshot.params["id"];})
    this.dbService.getProject(this.id).then((data) => {this.project = data})
    console.log(this.project.svgPaths);
  }
}
