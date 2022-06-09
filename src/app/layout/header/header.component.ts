import { Component, OnInit, HostListener, ViewChild, ElementRef, Renderer2} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class MainHeaderComponent implements OnInit {

  constructor(private elRef: ElementRef,private renderer:Renderer2) {
    
   }

  ngOnInit(): void {
  }

  @ViewChild('header') header: ElementRef | undefined;
  @ViewChild('logo') logo: ElementRef | undefined;
  @ViewChild('home') home: ElementRef | undefined;
  @ViewChild('about') about: ElementRef | undefined;
  @ViewChild('services') services: ElementRef | undefined;
  @ViewChild('contact') contact: ElementRef | undefined;
  //@ViewChild('header') header: ElementRef | undefined;

  @HostListener('document:scroll', ['$event']) onScrollEvent($event: any){

    const asLogo = this.logo?.nativeElement;
    //console.log($event);
    if(window.pageYOffset >= 50){
      
      //this.header.nativeElement.class = "header-scrolled";
      this.renderer.removeClass(this.header?.nativeElement, 'bg-transparent')
      this.renderer.addClass(this.header?.nativeElement, 'header-scrolled')

      this.renderer.setAttribute(this.logo?.nativeElement,'src','assets/images/whitelogo.png')

      this.renderer.addClass(this.home?.nativeElement, 'text-light')

      this.renderer.addClass(this.about?.nativeElement, 'text-light')

      this.renderer.addClass(this.services?.nativeElement, 'text-light')

      this.renderer.addClass(this.contact?.nativeElement, 'text-light')

      this.renderer.addClass(this.contact?.nativeElement, 'text-light')
      //this.renderer.addClass(this.header?.nativeElement, 'header-scrolled')
      console.log(this.header?.nativeElement);
      console.log(window.pageYOffset)
    }
    if(window.pageYOffset <= 50){
      
      //this.header.nativeElement.class = "header-scrolled";
      this.renderer.removeClass(this.header?.nativeElement, 'header-scrolled')
      this.renderer.addClass(this.header?.nativeElement, 'bg-transparent')

      this.renderer.setAttribute(this.logo?.nativeElement,'src','assets/images/blacklogo.png')

      this.renderer.removeClass(this.home?.nativeElement, 'text-light')

      this.renderer.removeClass(this.about?.nativeElement, 'text-light')

      this.renderer.removeClass(this.services?.nativeElement, 'text-light')

      this.renderer.removeClass(this.contact?.nativeElement, 'text-light')
      console.log(this.header?.nativeElement);
      console.log(window.pageYOffset)
    }
    
    console.log("scrolling");
  }
 

}


