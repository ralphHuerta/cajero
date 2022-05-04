import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 
  public buttomConsults: boolean=false
  public buttomRetirar:boolean= false

  @Input() denominaciones=
        [
          {cantidad: 10, valor:500},
          {cantidad: 15, valor:200},
          {cantidad: 20, valor:100},
          {cantidad: 50, valor:50},
        ]
  
  constructor() { }

  ngOnInit(): void {
  }

  mostrarConsults(dato: boolean){
    this.buttomConsults= true
  }
  mostrarretirar(dato:boolean){
    this.buttomRetirar=dato
  }
  closeConsults(event: any){
    this.buttomRetirar= event
    console.log(this.buttomConsults)
  }
  cambiarTotal(event:any){
    this.denominaciones= event
  }
  cerrarConsult(event:any){
    this.buttomConsults=event

  }

}
