import {Component, OnInit} from '@angular/core';
import {AuthService} from "../auth.service";
import {Router, RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";
import {CommonModule} from "@angular/common";
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
  constructor(private authService: AuthService, private router: Router, private dbService: DbService) {
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
