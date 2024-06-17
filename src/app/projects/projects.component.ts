import {Component, inject, OnInit} from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import {CommonModule, NgFor} from "@angular/common";
import { collection, getDocs } from "firebase/firestore";
import {AngularFirestore, AngularFirestoreModule} from "@angular/fire/compat/firestore";
import {Firestore, getFirestore} from "@angular/fire/firestore";
import {AngularFireModule} from "@angular/fire/compat";
import {firebaseApp$} from "@angular/fire/app";
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {DbService} from "../db.service";
import {FooterComponent} from "../footer/footer.component";
import {RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";


@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, NavbarComponent, NgFor, FooterComponent, RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent implements OnInit{
  constructor(private dbService: DbService) {
  }
  public counter : number = 0;
  public loaded : boolean = false;
  public projects : any;
  public dots : string = "."
  async readData() {
    this.projects = await this.dbService.getData().finally(() => {this.loaded = true;});

  }
  ngOnInit() {
    this.readData()
    setInterval(() => {
      if(this.counter < 307)
      this.counter++
    },25)
    setInterval(() => {
      if(this.dots.length < 3){
        this.dots += "."
      }
      else {
        this.dots = "."
      }
    },400)
  }
}
