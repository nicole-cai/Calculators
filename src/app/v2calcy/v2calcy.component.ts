import { Component, OnInit, HostListener } from '@angular/core';
import { KeyEventsPlugin } from '../../../node_modules/@angular/platform-browser/src/dom/events/key_events';

@Component({
  selector: 'app-v2calcy', 
  templateUrl: './v2calcy.component.html',
  styleUrls: ['./v2calcy.component.css']
})
export class V2calcyComponent implements OnInit {
  previous: string;
  display = '';
  operator = null;
  operatorClicked = false;
  constructor() { }

  @HostListener('window:keyup',['$event'])
  keyEvent(event: KeyboardEvent){
    console.log(event);

    if(event.keyCode == 52)
    {
      this.append(4);
    } else if (event.keyCode == 13)
    {
      this.equal();
    } else if (event.keyCode == 48)
    {
      this.append(0);
    } else if (event.keyCode == 49)
    {
      this.append(1);
    } else if (event.keyCode == 50)
    {
      this.append(2);
    } else if (event.keyCode == 51)
    {
      this.append(3);
    } else if (event.keyCode == 53)
    {
      this.append(5);
    } else if (event.keyCode == 54)
    {
      this.append(6);
    } else if (event.keyCode == 55)
    {
      this.append(7);
    } else if (event.keyCode == 56)
    {
      this.append(8);
    } else if (event.keyCode == 57)
    {
      this.append(9);
    }
  }

  clear(){
    this.display = '';
  }

  changeSign(){
    if (this.display.charAt(0) === '-'){
      this.display = this.display.slice(1);
    } else 
      this.display = "-" + this.display;
  }

  percentage(){
    this.display = (parseFloat(this.display) / 100).toString();
  }

  setPrevious(){
    this.previous = this.display;
    this.operatorClicked = true;
  }

  divide(){
    this.operator = (a,b)=> a / b;
   this.setPrevious();
  }

  multiply(){
    this.operator = (a,b)=> a * b;
   this.setPrevious();
  }

  add(){
    this.operator = (a,b)=> a + b;
    this.setPrevious();
  }

  subtract(){
    this.operator = (a,b)=> a - b;
   this.setPrevious();
  }

  equal(){
    this.display = this.operator (
      parseFloat(this.display), 
      parseFloat(this.previous)).toString();
    this.previous = null;
  }
  append(number){
    if (this.operatorClicked){
      this.display ='';
      this.operatorClicked = false;
    }
    this.display = this.display + number;
  }

  dot(){
    if (this.display.indexOf('.') === -1){
      this.append('.');
    }
  }

  ngOnInit() {
  }

  onKey(events){
    console.log(events);
  }

}

