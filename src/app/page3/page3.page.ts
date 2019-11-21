import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-page3',
  templateUrl: './page3.page.html',
  styleUrls: ['./page3.page.scss'],
})
export class Page3Page implements OnInit {

  constructor(public actionSheetController: ActionSheetController) { }

  ngOnInit() {
  }
  async abrirActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Albums',
      buttons: [{
        text: 'Delete',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          console.log('Delete pressionado');
        }
      }, {
        text: 'Compartilhar',
        icon: 'share',
        handler: () => {
          console.log('Compartilhar pressionado');
        }
      }, {
        text: 'Play',
        icon: 'arrow-dropright-circle',
        handler: () => {
          console.log('Play pressionado');
        }
      }, {
        text: 'Favorito',
        icon: 'heart',
        handler: () => {
          console.log('Favorito pressionado');
        }
      }, {
        text: 'Cancelar',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancelar pressionado');
        }
      }]
    });
    await actionSheet.present();
  }

}
