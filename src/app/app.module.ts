import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


import { MatSliderModule} from '@angular/material/slider';
import { MatButtonModule} from '@angular/material/button'
import { MatCardModule} from '@angular/material/card';
import { MatDialogModule} from '@angular/material/dialog';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';


import { AppComponent } from './app.component';
import { ChildComponent } from './tempate-test/child/child.component';
import { TempateTestComponent } from './tempate-test/tempate-test.component';
import { CardComponent } from './card/card.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { DialogComponent } from './dialog/dialog.component';

import { DialogOverviewExampleComponent } from './dialog/dialog-overview-example/dialog-overview-example.component';
import { ReactiveFormComponent } from './forms/reactive-form/reactive-form.component';
import { TemplateFormComponent } from './forms/template-form/template-form.component';
import { IncludeMeirValidatorDirective } from './forms/template-form/include-meir-validator.directive';
import { TableComponent } from './table/table.component';




@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    TempateTestComponent,
    CardComponent,
    ButtonsComponent,
    DialogComponent,
    DialogOverviewExampleComponent,
    ReactiveFormComponent,
    TemplateFormComponent,
    IncludeMeirValidatorDirective,
    TableComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,

    MatSliderModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,   
    MatIconModule,
    MatTableModule

    
  ],
  providers: [],
  entryComponents:[DialogOverviewExampleComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
