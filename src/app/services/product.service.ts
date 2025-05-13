import { Injectable } from '@angular/core';
import {MacaroonType} from "../components/types/macaroon.type";

@Injectable()
export class ProductService {

  constructor() { }

  getProducts():MacaroonType[] {
    return [
      {
        image: "pic3.png",
        title: 'Макарун с малиной',
        amount: '1 шт.',
        price:1.70
      },
      {
        image: "pic4.png",
        title: 'Макарун с манго',
        amount: '1 шт.',
        price:1.70
      },
      {
        image: "pic6.png",
        title: 'Пирог с ванилью',
        amount: '1 шт.',
        price:1.70
      },
      {
        image: "pic7.png",
        title: 'Пирог с фисташками',
        amount: '1 шт.',
        price:1.70
      }
    ]
  }
}

