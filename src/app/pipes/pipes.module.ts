import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeadZeroPipe } from './lead-zero.pipe';



@NgModule({
  declarations: [LeadZeroPipe],
  imports: [
    CommonModule
  ],
  exports: [
    LeadZeroPipe
  ],
})
export class PipesModule { }
