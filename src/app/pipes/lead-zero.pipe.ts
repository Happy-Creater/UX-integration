import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'leadZero'
})
export class LeadZeroPipe implements PipeTransform {

  transform(value: number, size: number): string {
    let num = value.toString();
    while (num.length < size){
      num = '0' + num;
    }
    return num;
  }

}
