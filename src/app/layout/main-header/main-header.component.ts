import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.css']
})
export class MainHeaderComponent implements OnInit {
  router: any;

  constructor(router:Router) {
    
   }

  ngOnInit(): void {
  }
  goFooter(){
    this.router.navigate(['footer']);
  }

}