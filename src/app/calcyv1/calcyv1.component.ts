import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calcyv1',
  templateUrl: './calcyv1.component.html',
  styleUrls: ['./calcyv1.component.css']
})
export class Calcyv1Component implements OnInit {
  
  title = 'Appy';
  output = 0;
  input = 0;
  display = 0;

  changeTitle(){
    this.title = 'Appy is a calculator';
  }

  add(){
    this.output += this.input; 
    this.input = 0;
  }

  subtract(){
    this.output -= this.input;
    this.input = 0;
  }

  multiply(){
    this.output *= this.input;
    this.input = 0;
  }

  divide(){
    this.output /= this.input;
    this.input = 0;
  }

  clear(){
    this.output = 0;
    this.input = 0;
  }

  percentage(){
    this.output = (this.input / 100);
    this.input = 0;
  }

  squareRoot(){
    this.output = Math.sqrt(this.input);
    this.input = 0;
  }

  convertSign(){
    if (this.input == 0){
      this.output = 0;
    } else 
    this.output = this.input*-1;
  }


  constructor() { }

  ngOnInit() {
  }

  
}
