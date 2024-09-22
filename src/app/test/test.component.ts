import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent {

}

export class Employee{
  name: string;

  constructor(name:string){
    this.name = name;
  }

  work(){
    //
  }
}

export class Matthew extends Employee{
  display(){
    console.log(this.name);
  }
}
