import { Directive } from '@angular/core';
import { Validator, NG_VALIDATORS } from '@angular/forms';

@Directive({
  selector: '[appIncludeMeir][ngModel]',
  providers: [ {
              provide: NG_VALIDATORS,
              multi: true, 
              useExisting: IncludeMeirValidatorDirective
              
            }]
})
export class IncludeMeirValidatorDirective  implements Validator{

  constructor() { }

  validate(control: import("@angular/forms").AbstractControl): import("@angular/forms").ValidationErrors {

    let text = control.value;

    if(!text ){
      return null;
    }
    
    if( (text as string).indexOf('Meir') === -1) {
      return {
        includeMeir: {
          valid: false
        }
      };
    }


    return null;


  }


}
