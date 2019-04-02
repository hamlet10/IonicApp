import { Component, OnInit } from '@angular/core';
import { DeseosService } from 'src/app/services/deseos.service';
import { ActivatedRoute } from '@angular/router';
import { Lista } from 'src/app/models/lista.model';
import { ListaItem } from 'src/app/models/lista-item.model';


@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.page.html',
  styleUrls: ['./agregar.page.scss'],
})
export class AgregarPage implements OnInit {

  lista:Lista;
  nombreItem = '';

  constructor( private _deseosServices:DeseosService,
              private _route:ActivatedRoute) {
  
  const listaId = this._route.snapshot.paramMap.get('listaId');
  // console.log(listaId);
  this.lista = this._deseosServices.obtenerLista(listaId);
  // console.log(this.lista);
  

  }

  ngOnInit() {
  }

  agregarItem(){
    if(this.nombreItem.length === 0){
      return;
    }
    const nuevoItem = new ListaItem(this.nombreItem);
    this.lista.items.push(nuevoItem);
    this.nombreItem='';
    this._deseosServices.guardarStorage();
  }

  cambioCheck(item:ListaItem){
    console.log(item);
    this._deseosServices.guardarStorage();
    
  }

}
