import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import {CommonModule} from "@angular/common";
import {FooterComponent} from "../footer/footer.component";

@Component({
  selector: 'app-aboutus',
  standalone: true,
  imports: [NavbarComponent, CommonModule, FooterComponent],
  templateUrl: './aboutus.component.html',
  styleUrl: './aboutus.component.css'
})
export class AboutusComponent {

}
