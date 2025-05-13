import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MacaroonType} from "../types/macaroon.type";
import {CartService} from "../../services/cart.service";

@Component({
  selector: 'product-item',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() macaroon:MacaroonType;
  @Output() addToCartEvent: EventEmitter<string> = new EventEmitter<string>();
  constructor(public cartService:CartService) {
    this.macaroon = {
      image:'',
      title:'',
      amount:'',
      price:0
    }
  }

  ngOnInit(): void {
  }

  addProductToCart() {
    this.cartService.count++
    this.cartService.sum = this.cartService.sum + this.macaroon.price;
    this.addToCartEvent.emit(this.macaroon.title);
  }

}
