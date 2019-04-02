import { Component } from '@angular/core';
import { DeseosService } from 'src/app/services/deseos.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {


  constructor(public deseosServices: DeseosService,
    private _router: Router,
    private _alertController: AlertController) {

  }

  async agregarLista() {

    // this._router.navigateByUrl('tabs/tab1/agregar');
    const alert = await this._alertController.create({
      header: 'Nueva lista',
      inputs: [{
        name: 'titulo',
        type: 'text',
        placeholder: 'nombre e la lista'
      }],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Cancelar');
          }
        },
        {
          text: 'Crear',
          handler: (data) => {
            console.log(data);
            if (data.titulo.length === 0) {
              return;
            }

            //crear lista
            const listaId = this.deseosServices.crearLista(data.titulo);
            this._router.navigateByUrl(`tabs/tab1/agregar/${listaId}`);
            console.log(listaId);
            


          }
        }
      ]
    });

    alert.present();

  }


}
