import {Component, OnInit} from '@angular/core';
import { AuthService } from '../auth.service';
import {Router} from "@angular/router"
import {FormsModule} from "@angular/forms";
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {AngularFireModule} from "@angular/fire/compat";
import {environment} from "../../environments/environment";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  constructor(private authService: AuthService, private router: Router) {}

  user ?: firebase.default.User | null ;
  username : string = "";
  password : string = "";
  name: string = "";
  errMsg : string = ""

  login() {
    this.authService.login(this.username + "@example.com", this.password).then((user) => {
      if(user){
        //@ts-ignore
        this.name = user?.user?.email?.replace("@example.com", "").replace("t", "T").replace("m", "m ")
        this.router.navigate(['/apdash']);
      }
    }).catch(err => {
      this.errMsg = err.code.replace("auth/", "");
      console.log(this.errMsg);
    })
  }
  logout(){
    this.authService.logout();
  }

  ngOnInit() {
    this.authService.auth.user.subscribe(u => {
      this.user = u;
      if(this.user) this.router.navigate(["/apdash"]);
    })
  }

}
