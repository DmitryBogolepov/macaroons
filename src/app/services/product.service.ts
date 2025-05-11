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
        description: '1 шт. 1,70 руб.'
      },
      {
        image: "pic4.png",
        title: 'Макарун с манго',
        description: '1 шт. 1,70 руб.'
      },
      {
        image: "pic6.png",
        title: 'Пирог с ванилью',
        description: '1 шт. 1,70 руб.'
      },
      {
        image: "pic7.png",
        title: 'Пирог с фисташками',
        description: '1 шт. 1,70 руб.'
      }
    ]
  }
}

