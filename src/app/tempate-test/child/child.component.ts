/*
  exmple:
    1. host:  css selector , must define 'disaply:block' or someting like that
    2. templateRef, any function it has, will invoke the function that the tempate was define in

*/


import { Component, OnInit, ViewEncapsulation, Input, TemplateRef, ViewChild, ViewContainerRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ChildComponent implements OnInit, AfterViewInit {


  @Input('_myTemplate')
  public _myTemplate:TemplateRef<any>;

  @ViewChild('childContainer', {read:ViewContainerRef, static:true})
  public _childContainer:ViewContainerRef;

  constructor() { }


  ngOnInit() {

    console.log('_myTemplate',this._myTemplate);

    console.log('_childContainer',this._childContainer);
    this._childContainer.createEmbeddedView(this._myTemplate);
  }

  ngAfterViewInit(): void {
 
  }


  public onOk(){
    console.log('ok from child');
  }

}


