import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { tap, filter  } from 'rxjs/operators';

function includeMeirInTextValidator(control: FormControl){

  let text = control.value;
  if(!text){
    return null;
  }

  let isIncludeMeir =  (text as string).includes('Meir');

  // Valid return null
  if(isIncludeMeir){
    return null;
  }

  // Not valid => return object
  return {
    validateIncludeMeir: {
      valid: false
    }
  };


}


@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']

})
export class ReactiveFormComponent implements OnInit {

  public myForm: FormGroup;
  private title : FormControl;
  private duration: FormControl;
  private description: FormControl;
  
  public notPartOfTheFormGroup: FormControl;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {

    this.title =  new FormControl('my Title', [
                                              Validators.required,
                                              Validators.minLength(5)
                                            ]);
    this.duration =  new FormControl( 10, [
                                            Validators.required,
                                            Validators.pattern('[0-9]+')
                                          ]);
    this.description = new FormControl (' hi there Meir', [
                                           Validators.required,                                           
                                           includeMeirInTextValidator]);
 /*
    this.myForm = new FormGroup({
      title: this.title,
      duration:  this.duration,
      description: this.description 
    });

*/

/*
    this.myForm = this.fb.group ({
      title: ['Hi',  [
        Validators.required,
        Validators.minLength(5)
      ]],
      duration: [10, [
        Validators.required,
        Validators.pattern('[0-9]+')
      ]],
      description: [' hi there description', [
        Validators.required]]
    });
*/

    this.myForm = this.fb.group ({
      title: this.title,
      duration: this.duration,
      description: this.description
    });


    this.myForm.valueChanges.pipe(            
      filter( ()=> this.myForm.valid),      
    )
    .subscribe( data => {
      console.log('Valid Data:', data)
    });

    this.myForm.statusChanges.subscribe( x => console.log('status', x));


    this.notPartOfTheFormGroup = new FormControl( 'not part of the form group', [
      Validators.required
    ]);
  }

  public onPartialUpdate(){
    // Partial update
    this.myForm.patchValue({
      title: 'Meir the king'
    });
  }

  public onFullUpdate(){   
    // Must set all values 
    this.myForm.setValue({
      title: 'Who is the King',
      duration: '100',
      description: 'Meir is the King'
    });
  }

  public onReset(){
    // Will Rest dirty/ touched / valid    class on all controls
    // and can set any value you like
    this.myForm.reset({
      title: 'Meir is the King'
    });
  }
}
