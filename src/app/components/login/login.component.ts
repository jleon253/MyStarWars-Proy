import {Component, OnInit} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {Router} from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {

  myForm: FormGroup;
  disabled = false;

  constructor(private fb: FormBuilder, private router: Router) { 
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.myForm = this.fb.group({
      email: ['',[Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      pass: ['',[Validators.required, Validators.minLength(6)]]
    });
  }

  get emailInvalid() {
    return this.myForm.get('email').invalid && this.myForm.get('email').touched;
  }
  
  get passInvalid() {  
    return this.myForm.get('pass').invalid && this.myForm.get('pass').touched;
  }

  entry() {
    console.log(this.myForm);
    if (this.myForm.invalid)
    {
      Object.values(this.myForm.controls).forEach(control => {
        control.markAsTouched();
      });
      return;
    } else
    {
      this.disabled = true;
      this.router.navigate(['/main']);
    }
  }

}
