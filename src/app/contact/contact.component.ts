import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  submitted = false;
  form = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    body: new FormControl('', Validators.required)
  });
  get f(){

    return this.form.controls;

  }

  /*FormData: FormGroup;*/
  //private builder: FormBuilder
  constructor() { }

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl(''),
      email: new FormControl(''),
      body: new FormControl(''),
    });
  }
  submit(){
    console.log(this.form.value);
  }

}
