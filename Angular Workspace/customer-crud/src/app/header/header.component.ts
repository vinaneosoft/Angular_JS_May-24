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
  modelTest(){
    console.log(this.subHeading);
    
  }
}
