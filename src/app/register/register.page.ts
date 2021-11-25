import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
}from '@angular/forms';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  formularioRegister: FormGroup;
  constructor(public fb: FormBuilder,
    public alertController: AlertController,
    public navctrl: NavController) { 
    this.formularioRegister = this.fb.group({
      'usuario': new FormControl("",Validators.required),
      'contraseña': new FormControl("",Validators.required),
      'confirme la contraseña': new FormControl("",Validators.required)
    })

  }

  ngOnInit() {
  }
  async registrarse() {
    var f = this.formularioRegister.value;
      if(this.formularioRegister.invalid){
        const alert = await this.alertController.create({
          message: 'tienes campos incompletos, llenalos para registrarte.',
          buttons: ['aceptar']
        });
    
        await alert.present();
        return;
      }

      var usuario = {
        usuario: f.usuario,
        contraseña: f.contraseña

      }

      localStorage.setItem('usuario',JSON.stringify(usuario));
      localStorage.setItem('usuario registrado','True');
     this.navctrl.navigateRoot('login');
  }

}
