import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TrimestrePage } from './trimestre';

@NgModule({
  declarations: [
    TrimestrePage,
  ],
  imports: [
    IonicPageModule.forChild(TrimestrePage),
  ],
})
export class TrimestrePageModule {}
