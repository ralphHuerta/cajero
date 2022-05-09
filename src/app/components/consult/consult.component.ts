import { Component, Input, OnInit, Output, EventEmitter, DoCheck } from '@angular/core';

@Component({
  selector: 'app-consult',
  templateUrl: './consult.component.html',
  styleUrls: ['./consult.component.css']
})
export class ConsultComponent implements OnInit, DoCheck {
  @Input() denominaciones: any
  @Output() closeConsult=new EventEmitter
  public total: number=0
  constructor() { }

  ngOnInit(): void {
    this.TotalDinero()
  }
  
  ngDoCheck(): void {
    this.TotalDinero()
  }
  TotalDinero(){
    var sumacantidad=0
    if(this.denominaciones){
       this.denominaciones.forEach(function(element: any) {
         sumacantidad+= element.valor *element.cantidad
      
      }
    );
    this.total= sumacantidad
      
    }
    
  }
  closeBoton(){
    this.closeConsult.emit(false)

  }

}
