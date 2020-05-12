import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule} from '@angular/material/slider';
import { MatButtonModule} from '@angular/material/button'
import { MatCardModule} from '@angular/material/card';


import { AppComponent } from './app.component';
import { ChildComponent } from './tempate-test/child/child.component';
import { TempateTestComponent } from './tempate-test/tempate-test.component';
import { CardComponent } from './card/card.component';
import { ButtonsComponent } from './buttons/buttons.component';



@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    TempateTestComponent,
    CardComponent,
    ButtonsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatButtonModule,
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
