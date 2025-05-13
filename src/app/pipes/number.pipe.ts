import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'number'
})
export class NumberPipe implements PipeTransform {

  transform(phone:number): string {
    const str = phone.toString();
    if (str.length !== 12 || !str.startsWith('375')) {
      return str;
    }
    const code:string = str.slice(3, 5);
    const part1:string = str.slice(5, 8);
    const part2:string = str.slice(8, 10);
    const part3:string = str.slice(10, 12);

    return `+375 (${code}) ${part1}-${part2}-${part3}`;
  }

}
