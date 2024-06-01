import {Component, Input, OnInit} from '@angular/core';
import {AuthService} from "../auth.service";
import {Router} from "@angular/router";
import {DbService} from "../db.service";
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { Project } from "../project";
import {Floorplan} from "../floorplan";

@Component({
  selector: 'app-add-project',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './add-project.component.html',
  styleUrl: './add-project.component.css'
})
export class AddProjectComponent implements OnInit{
  constructor(private authService: AuthService, private router: Router, private dbService: DbService) {
  }

  user ?: firebase.default.User | null ;
  p : Project = new Project()
  public message : string = "";
  public floorsString : string = ""
  public svgPathsString : string = ""
  public FloorplanPathsString : string = ""
  public showSVG : boolean = false

  PushFloors(m: string){
    this.p.floors = m.split(",")
    if (this.p.svgPaths.length == this.p.floors.length) this.showSVG = true;
    for(let i = 0; i < this.p.floors.length; i++){
      this.p.floorplan.push(new Floorplan());
    }
  }

  Check(){
    console.log(this.p.floorplan)
  }

  PushPaths(m: string){
    this.p.svgPaths = m.split("|")
    if (this.p.svgPaths.length == this.p.floors.length){
      this.showSVG = true;
    }
  }
  PushPathsFloor(m: string, index: number){
    this.p.floorplan[index].paths = m.split("|")
  }

  Submit(){
    this.dbService.pushProject(this.p).then(()=>{this.message = "Successfully Added Project"}).catch((error) => {this.message = "Error " + error});
  }

  logout(){
    this.authService.logout();
    this.router.navigate(['/home']);
  }

  redirectToLogin(){
    this.router.navigate(['/ap'])
  }
  ngOnInit() {
    this.authService.auth.user.subscribe(u => {
      this.user = u;
      if(!this.user){
        this.router.navigate(['/ap'])
      }
    })
    console.log(this.p.floorplan[2] + "Test")
  }

}
