import {Component, OnInit, ElementRef, Inject} from '@angular/core';
import {AuthService} from "../auth.service";
import {Router, RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";
import {CommonModule, DOCUMENT} from "@angular/common";
import {DbService} from "../db.service";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive, FormsModule],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css'
})
export class AdminDashboardComponent implements OnInit{
  constructor(private authService: AuthService, private router: Router, private dbService: DbService, private elementRef: ElementRef<HTMLElement>, @Inject(DOCUMENT) document: Document) {
  }

  user ?: firebase.default.User | null ;
  public projects : any;

  async readData() {
    this.projects = await this.dbService.getData();
  }

  logout(){
    this.authService.logout();
    this.router.navigate(['/home']);
  }

  redirectToLogin(){
    this.router.navigate(['/ap'])
  }

  async Delete(id : string){

    await this.dbService.deleteProject(id).then(() => {this.readData()}).catch((error) => {console.log(error)});
  }
  ShowConfirmDelete(id : string){
    //@ts-ignore
    document.getElementById(id).hidden = false;
  }
  ngOnInit() {
    this.authService.auth.user.subscribe(u => {
      this.user = u;
      if(!this.user){
        this.router.navigate(['/ap'])
      }
    })
    this.readData().then(() => {
      console.log(this.projects[0].name)
    });
  }

}
