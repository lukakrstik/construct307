import {Component, OnDestroy, OnInit} from '@angular/core';
import {NavbarComponent} from "../navbar/navbar.component";
import {Router, RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";
import {CommonModule} from "@angular/common";
import {FooterComponent} from "../footer/footer.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, CommonModule, RouterOutlet, RouterLink, RouterLinkActive, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit, OnDestroy{
  public cement : number = 21840123
  public ppl : number = 1500
  private index: number = 2
  public titleArr : string[] = ["Our Vision", "Sustainability", "Efficiency", "Hot or Cold"]
  public textArr : string[] = ["Building homes with precision and passion, crafting the foundation for your future.",
                               "Creating eco-friendly homes that nurture both your lifestyle and the planet.",
                               "Maximizing quality and value through innovation and streamlined construction.",
                               "Designing homes that provide comfort and efficiency in every climate."]
  public title : string = "Our Vision"
  public text : string = "Building homes with precision and passion, crafting the foundation for your future."
  private interval: any;
  ngOnInit() {
    window.addEventListener('DOMContentLoaded', () => {
      //@ts-ignore
      document.getElementById("1").style.opacity = "50%"
      this.interval = setInterval(() => {
        //@ts-ignore
        if(this.index == 1) document.getElementById("4").style.opacity = "0%"
        //@ts-ignore
        if(this.index != 1) document.getElementById(String(this.index-1)).style.opacity = "0%"
        //@ts-ignore
        document.getElementById(String(this.index)).style.opacity = "50%";
        this.title = this.titleArr[this.index-1]
        this.text = this.textArr[this.index-1]
        if(this.index < 4) this.index++;
        else this.index = 1;
      },5000)
    })
  }
  ngOnDestroy(){
    clearInterval(this.interval)
  }
}
