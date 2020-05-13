import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  public lesson = {
    title: 'Meir the King',
    description: 'about Meir',
    duration: 20
  }

  constructor() { }

  ngOnInit() {
  }

  public onPrintData(){
    console.log('lesson: ',this.lesson);
  }

}
