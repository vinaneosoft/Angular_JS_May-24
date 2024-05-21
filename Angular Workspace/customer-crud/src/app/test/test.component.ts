import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent {

  pass(field:any){
    console.log(field);
    console.log("Customer Name:", field.value);
    console.log(typeof field.value);
    console.log(field.type);
    
  }
  pass2(field:any){
    console.log(field);
    console.log(field.textContent);
  }
}
