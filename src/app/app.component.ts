import { AuthService } from './services/auth.service';
import { Component } from '@angular/core';
import {ScriptService} from "./services/script.service";
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  formReg: FormGroup;
  formLogin: FormGroup;
  title = 'ecommerce';
  userLogged = this.authService.getUsuariologeado();
  constructor(private _script:ScriptService,private authService:AuthService){
    _script.carga(["/script"]);
    this.formReg = new FormGroup({
      email:new FormControl(),
      password: new FormControl()
    })
    this.formLogin = new FormGroup({
      email:new FormControl(),
      password: new FormControl()
    })
  }
  registrar(){
    this.authService.register(this.formReg.value)
    .then(response =>{
      console.log(response);
    })
    .catch(error => console.log(error));
  }
  Ingresar(){
    this.authService.login(this.formLogin.value)
    .then(response =>{
      console.log(response);
    })
    .catch(error => console.log(error));
  }
  ingresarG(){
    this.authService.logingoogle()
    .then(response => {
      console.log("ha ingresado correctamente");
    })
    .catch(error => console.log(error));
  }
  onClick(){
    this.authService.logout()
    .then(()=>{
      console.log("te desconectaste");
      //this.router.navigate(['/register']);
    })
    .catch(error => console.log(error));
  }
}

