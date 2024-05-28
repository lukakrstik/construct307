import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap} from "@angular/router";
import {switchMap} from "rxjs";
import {DbService} from "../db.service";
import {NavbarComponent} from "../navbar/navbar.component";
import {FooterComponent} from "../footer/footer.component";

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [NavbarComponent, FooterComponent],
  templateUrl: './project-detail.component.html',
  styleUrl: './project-detail.component.css'
})
export class ProjectDetailComponent implements OnInit {
  private id: string;
  constructor(private activatedRoute: ActivatedRoute, private dbService: DbService) {
  }
  public project: any;
  ngOnInit() {
    this.activatedRoute.params.subscribe(() => {this.id = this.activatedRoute.snapshot.params["id"];})
    this.dbService.getProject(this.id).then((data) => {this.project = data})
  }
}
