import {Component, OnInit} from '@angular/core';
import {ItemType} from "./components/types/advantage.type";
import {MacaroonType} from "./components/types/macaroon.type";
import {ProductService} from "./services/product.service";
import {CartService} from "./services/cart.service";

@Component({
    selector: 'app-component',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],

})
export class AppComponent implements OnInit{
  public macaroons: MacaroonType[] = [];


    public scrollTo(target: HTMLElement): void {
        target.scrollIntoView({behavior: 'smooth'});
    }
    constructor(private productService:ProductService, public cartService:CartService) {
    }

    ngOnInit() {
      this.macaroons = this.productService.getProducts();
    }

  public formValue = {
        productTitle: '',
        name: '',
        phone: ''
    }
    public showErrors:boolean = false;
    public createOrder() {
        this.showErrors = true;
        const hasError:boolean = !this.formValue.productTitle || !this.formValue.name || !this.formValue.phone;
        if (hasError) {
            console.log('Форма заполнена некорректно');
            return;
        } else {
            this.showErrors = false;
        }
    }

    public addToCard(product: MacaroonType, target: HTMLElement): void {
        this.scrollTo(target);
        this.formValue.productTitle = product.title.toUpperCase();
        this.cartService.count++
        this.cartService.sum = this.cartService.sum + product.price;
        alert(product.title+ ' добавлен в корзину!')
    }

    public showPresent:boolean = true;
}




