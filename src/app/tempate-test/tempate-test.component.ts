import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tempate-test',
  templateUrl: './tempate-test.component.html',
  styleUrls: ['./tempate-test.component.css']
})
export class TempateTestComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  public onOk(){
    console.log('ok from TempateTestComponent');
  }
}
