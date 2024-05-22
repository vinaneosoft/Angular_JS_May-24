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

  imgObject={
    source:"https://th.bing.com/th/id/R.4c929260bd46bc163cf85a380c983264?rik=u6y4c40Voz2i7g&riu=http%3a%2f%2fhdqwalls.com%2fwallpapers%2fbig-sun-sunset-water-body-4k-sm.jpg&ehk=hfukJHh9FIkFtPXzGKsGUdOyf5R%2fG39NcbBNOTvZfkU%3d&risl=&pid=ImgRaw&r=0",
    altMessage:"SUN SET",
    imgHeight:400,
    imgWidth:600
  }
  
  fieldType="password";
  fieldMessage="Enter your password";

  showPass(checked:boolean){
    console.log(checked);
    if(checked)
      this.fieldType="text"
    else
      this.fieldType="password"
  }

  checkBox=false;
  test(){
   console.log(this.checkBox);
   
  }
  voterAge=0;
}
