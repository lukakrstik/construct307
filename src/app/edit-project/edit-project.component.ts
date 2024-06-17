import {Component, OnInit} from '@angular/core';
import {AuthService} from "../auth.service";
import {ActivatedRoute, Router, RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";
import {DbService} from "../db.service";
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {Floorplan} from "../floorplan";

@Component({
  selector: 'app-edit-project',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './edit-project.component.html',
  styleUrl: './edit-project.component.css'
})
export class EditProjectComponent implements OnInit{

  constructor(private authService: AuthService, private router: Router, private dbService: DbService, private activatedRoute: ActivatedRoute) {
  }

  user ?: firebase.default.User | null ;
  public p : any
  private id: string;
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
    this.dbService.updateProject(this.p).then(()=>{this.message = "Successfully Edited Project"}).catch((error) => {this.message = "Error " + error});
  }

  redirectToLogin(){
    this.router.navigate(['/ap'])
  }

  ngOnInit(){
    this.authService.auth.user.subscribe(u => {
      this.user = u;
      if(!this.user){
        this.router.navigate(['/ap'])
      }
    })
    this.activatedRoute.params.subscribe(() => {this.id = this.activatedRoute.snapshot.params["id"];})
    this.dbService.getProject(this.id).then((data) => {
      this.p = data;
      this.floorsString = this.p.floors
      this.svgPathsString = this.p.svgPaths;
    })
  }
}
