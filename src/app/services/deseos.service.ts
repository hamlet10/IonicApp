import { Injectable } from '@angular/core';
import { Lista } from '../models/lista.model';

@Injectable({
  providedIn: 'root'
})
export class DeseosService {

  listas:Lista[] = [];

  constructor() { 

    this.cargarStorage();

    // const lista1 = new Lista ('Recolectar piedras del infinito');
    // const lista2 = new Lista ('Heroes a derrotar');

    // this.listas.push(lista1, lista2);
    // // console.log(this.listas);
  }

  crearLista(titulo:string){

    const nuevaLista = new Lista(titulo);
    this.listas.push(nuevaLista);
    this.guardarStorage()
    return nuevaLista.id;

  }

  obtenerLista(id:string | number){
    id = Number(id);
    return this.listas.find( listadata => listadata.id == id);

  }


  guardarStorage(){
    localStorage.setItem('data', JSON.stringify(this.listas));
  }

  cargarStorage(){
    if(localStorage.getItem('data')){
    this.listas = JSON.parse( localStorage.getItem('data'));
    }else{
      this.listas = [];
    }
  }

  borraLista( lista: Lista){
    this.listas = this.listas.filter( l => l.id !== lista.id);
    this.guardarStorage();
  }

  editarLista(lista:Lista, titulo: string){
    lista = this.listas.find( l => l.id === lista.id);
    lista.titulo = titulo
    this.guardarStorage()
    
    
  }

}
