import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router, private navCtrl: NavController){}
  myVariable: string = 'The force is with me!';
  
  updateMyValue() {
    this.myVariable = 'Now the force is even stronger!';
  }

  navigate(){
    this.router.navigate(['/page2'])
  }

  abrirPagina(nomedaPagina:string){
    this.navCtrl.navigateForward(nomedaPagina);
  }
}
