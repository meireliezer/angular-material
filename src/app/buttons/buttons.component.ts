import { Component, OnInit, ViewChildren, QueryList, ElementRef, Renderer2, AfterViewInit } from '@angular/core';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit, AfterViewInit {

  public buttons = ['Test', 'Jungle', 'Orca', 'Attribution'];


  public title = 'angular-material';


 // Option 1 (as MathButton Component)
 @ViewChildren(MatButton)
 public buttonMatButton: QueryList<MatButton>; 

 // Option 2 (as Button Dom Elemet)
 @ViewChildren(MatButton, {read: ElementRef})
 public buttonElementes: QueryList<ElementRef>; 

  constructor(private rendere: Renderer2) {    
  }
  ngOnInit(): void {
 
  }

 
  ngAfterViewInit(): void {
   
    // Option 1
    let buttonArray = this.buttonMatButton.toArray();
    buttonArray[0].color='accent';
    buttonArray[1].color='warn';
    buttonArray[2]._getHostElement().innerText = "Meir";

    let testButton = this.buttonMatButton.find( (item, index, array) => {
      if(item._getHostElement().innerText === 'Test'){
        return true;
      }
    });
    if(testButton){
      setTimeout(()=>{
        testButton.disabled = true;
      })
      
    }


    // Option 2
    let buttonElemArray = this.buttonElementes.toArray();
    let button1 = buttonElemArray[3];
    button1.nativeElement.innerText = "Karim";
    this.rendere.setStyle(button1.nativeElement, 'color', 'pink');

    this.buttonElementes.map( (item) => {
      if(item.nativeElement.innerText === 'Jungle'){
        this.rendere.setStyle(item.nativeElement, 'background-color', 'yellow');
      }
    })

  }


}
