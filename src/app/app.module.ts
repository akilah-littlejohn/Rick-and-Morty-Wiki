import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ImageSvgComponent } from './image-svg/image-svg.component';
import { ShowcaseCharacterComponent } from './showcase-character/showcase-character.component';
import { SearchbarComponent } from './searchbar/searchbar.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ImageSvgComponent,
    ShowcaseCharacterComponent,
    SearchbarComponent
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
