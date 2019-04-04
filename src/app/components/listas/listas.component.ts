import { Component, OnInit } from '@angular/core';
import { DeseosService } from 'src/app/services/deseos.service';

@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.scss'],
})
export class ListasComponent implements OnInit {

  constructor( public deseosServices: DeseosService ) { 
    console.log(deseosServices.listas);
    
  }

  ngOnInit() {}

}
