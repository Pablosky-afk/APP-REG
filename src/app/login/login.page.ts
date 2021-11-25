import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
}from '@angular/forms';
import { variable } from '@angular/compiler/src/output/output_ast';
import { AlertController, NavController } from '@ionic/angular';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {



  formularioLogin: FormGroup;
  constructor(public fb: FormBuilder,
    public alertController: AlertController,
    public navctrl: NavController ) {

    this.formularioLogin = this.fb.group({
      'usuario': new FormControl("",Validators.required),
      'contraseña': new FormControl("",Validators.required)
    })

   }

  ngOnInit() {
  }

  async ingresar() {
    var f = this.formularioLogin.value;

    var usuario = JSON.parse(localStorage.getItem('usuario'))

    if(usuario.usuario == f.usuario && usuario.contraseña == f.contraseña){
     console.log('usuario ingresado'); 
     localStorage.setItem('usuario ingresado','True');
     this.navctrl.navigateRoot('inicio');
    }else{
      const alert = await this.alertController.create({
        message: 'tienes campos incorectos, llénalos para iniciar secion.',
        buttons: ['aceptar']
        
      });
  
      await alert.present();
      return;
    }

  }

}
