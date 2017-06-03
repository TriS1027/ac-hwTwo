import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdButtonModule, MdCardModule, MdInputModule, MdToolbarModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  imports: [
    CommonModule,
    MdToolbarModule,
    MdInputModule,
    MdCardModule,
    MdButtonModule,
    BrowserAnimationsModule
  ],
  exports: [MdButtonModule, MdToolbarModule, MdCardModule, MdInputModule, BrowserAnimationsModule],
  declarations: []
})
export class MaterialModule {

}
