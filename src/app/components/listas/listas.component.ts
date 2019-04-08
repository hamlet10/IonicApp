import { Component, OnInit, Input } from '@angular/core';
import { DeseosService } from 'src/app/services/deseos.service';
import { Lista } from 'src/app/models/lista.model';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.scss'],
})
export class ListasComponent implements OnInit {

  @Input() terminada = true;

  constructor( public deseosServices: DeseosService,
                private _router:Router,
                private _alertController: AlertController ) { 
    // console.log(deseosServices.listas);
    
  }

  ListaSeleccionada(lista:Lista){

    if( this.terminada ){
    this._router.navigateByUrl(`tabs/tab2/agregar/${lista.id}`)
    }else{
      this._router.navigateByUrl(`tabs/tab1/agregar/${lista.id}`)
    }
  }

  borraLista(lista: Lista) {
    this.deseosServices.borraLista(lista);
  }

  async editarLista(lista:Lista){

    
    // this.deseosServices.editarLista(lista);
    const alert = await this._alertController.create({
      header: 'Editar lista',
      inputs: [{
        name: 'titulo',
        type: 'text',
        value: lista.titulo
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
          text: 'Actualizar',
          handler: (data) => {
            this.deseosServices.editarLista(lista, data.titulo)
            
          }
        }
      ]
      });
     alert.present();
    console.log('Editar lista up and running');
    
  }
  
  ngOnInit() {}

}
