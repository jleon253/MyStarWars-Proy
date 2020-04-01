import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;
  alertData = {
    showAlert: false,
    type: '',
    title: '',
    message: '',
  };
  errorInput = '';
  wait = false;

  constructor( private router: Router) { }

  ngOnInit() {
  }

  getEmail(email: string) {
    console.log('En padre login: ' + email);
    this.email = email;
  }

  getPassword(pass: string) {
    console.log('En padre login: ' + pass);
    this.password = pass;
  }

  validateData() {
    let showAlert = false;
    let type = '';
    let title = '';
    let message = '';
    if (this.email && this.password) {
      const emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if (emailFormat.test(this.email)) {
        console.log('email correcto');
        this.wait = true;
        this.errorInput = 'false,false';
        showAlert = true;
        type = 'exito';
        title = 'Éxito';
        message = 'Datos correctos';
        this.alertData = {showAlert, type, title, message};
        setTimeout(() => {
          this.wait = false;
          this.router.navigateByUrl('/home');
        }, 2000);
      } else {
        console.log('email incorrecto');
        this.errorInput = 'true,false';
        showAlert = true;
        type = 'error';
        title = 'Error';
        message = 'Formato de email incorrecto, por favor valide.';
        this.alertData = {showAlert, type, title, message};
      }
      console.log('correctos');
    } else {
      console.log('vacios');
      this.errorInput = 'true,true';
      showAlert = true;
      type = 'error';
      title = 'Error';
      message = 'Los campos no deben estar vacios';
      this.alertData = {showAlert, type, title, message};
    }
  }

}
