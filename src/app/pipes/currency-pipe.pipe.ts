import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyPipe'
})
export class CurrencyPipe implements PipeTransform {

  transform(price:number,): string {
    return price + ' руб.';
  }

}
