import { Component, OnInit, Input } from '@angular/core';
import { DeseosService } from 'src/app/services/deseos.service';
import { Lista } from 'src/app/models/lista.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.scss'],
})
export class ListasComponent implements OnInit {

  @Input() terminada = true;

  constructor( public deseosServices: DeseosService,
                private _router:Router ) { 
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
  
  ngOnInit() {}

}
