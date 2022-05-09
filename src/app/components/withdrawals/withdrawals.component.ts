import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-withdrawals',
  templateUrl: './withdrawals.component.html',
  styleUrls: ['./withdrawals.component.css']
})
export class WithdrawalsComponent implements OnInit {
  @Input() denominaciones: any
  public cantidadRetirar: number= 0
  public title: String=''
  public primtfValores: any
  public noTranssacion: any
  public total: number= 0
  @Output() FinalDenominaciones= new EventEmitter
  @Output()  closeModal= new EventEmitter
  constructor() { }

  ngOnInit(): void {
    this.noTranssacion= this.denominaciones
    this.TotalDinero();
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
  retirarDinero(){
    var auxNumber=this.cantidadRetirar.toString()
    //var noTranssacion= this.denominaciones
    var cantidad=this.cantidadRetirar
    var sumaRetirar=0;
    var billetesValor= new Array()
    var totalCajero= this.total
      console.log(this.total)
      if(totalCajero< this.cantidadRetirar){
        this.title= "No cuentas con suficiente efectivo"
        this.primtfValores= null
      }else{
      if(!auxNumber.includes('.') && (this.total >= this.cantidadRetirar && this.cantidadRetirar%50 == 0 )){
      
        if(this.noTranssacion){
            var i=0
            this.noTranssacion.forEach(function(element: any) {
             
              if(element.cantidad> 0){
                if( (sumaRetirar+element.valor) <= cantidad){
                  while(((sumaRetirar+element.valor)<= cantidad) && (element.cantidad> 0)){
                    sumaRetirar+=element.valor
                    billetesValor[i]= element.valor
                    i++   
                    element.cantidad-=1
                    totalCajero-=element.valor
                  }
                  
                }
                  
              }
            }
          );
        }
            if(sumaRetirar== this.cantidadRetirar){
              this.title= "Transacción exitosa"
              //this.denominaciones= noTranssacion
              this.primtfValores= billetesValor
              this.total=totalCajero
              console.log(this.total)

            // this.FinalDenominaciones.emit(this.denominaciones)
            }else{
              this.title ="No se puede hacer esa transacción, por favor ingrese otra cantidad"
              // noTranssacion=this.denominaciones
              this.primtfValores= null
              
            }
        
      }else{
        this.title ="No se puede hacer esa transacción, por favor ingrese otra cantidad"
              
      }
    }

  }

  closeBoton(event: any){
    this.closeModal.emit(false)
  }

}
