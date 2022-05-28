import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from  '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-test-form',
  templateUrl: './test-form.component.html',
  styleUrls: ['./test-form.component.css']
})
export class TestFormComponent implements OnInit {

  contactForm = new FormGroup ({ fullName: new FormControl(), email: new FormControl(),message: new FormControl(),});

  constructor(private formBuilder: FormBuilder) {
    
   }

  ngOnInit(): void {
  }

  enviar(){
    console.log("form Sent");

  }

  initContactForm(){
    this.contactForm = this.formBuilder.group({
      fullName: [''],  
      email: [''],
      message: ['']
    });
  }

}
