import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  subHeading="CUSTOMER CRUD OPERATIONS"; // data is available in component

  constructor(){
    setTimeout(()=>{
      this.subHeading="ADD UPDATE DELETE GET CUSTOMERS" // model updates
    }, 5000);
  }
  modelTest(ev:KeyboardEvent){
    console.log(this.subHeading);
    console.log(ev instanceof KeyboardEvent);
    
  }
  changeHeading(ev:MouseEvent){
    console.log(ev instanceof PointerEvent);
    
    this.subHeading="CUSTOMERS"
    console.log(ev);
    
  }
}
