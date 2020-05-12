import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule} from '@angular/material/slider';
import { MatButtonModule} from '@angular/material/button'
import { MatCardModule} from '@angular/material/card';
import { MatDialogModule} from '@angular/material/dialog';
import { MatFormFieldModule} from '@angular/material/form-field';



import { AppComponent } from './app.component';
import { ChildComponent } from './tempate-test/child/child.component';
import { TempateTestComponent } from './tempate-test/tempate-test.component';
import { CardComponent } from './card/card.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { DialogComponent } from './dialog/dialog.component';
import { FormsModule } from '@angular/forms';
import { DialogOverviewExampleComponent } from './dialog/dialog-overview-example/dialog-overview-example.component';




@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    TempateTestComponent,
    CardComponent,
    ButtonsComponent,
    DialogComponent,
    DialogOverviewExampleComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatFormFieldModule,
    FormsModule

    
  ],
  providers: [],
  entryComponents:[DialogOverviewExampleComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
