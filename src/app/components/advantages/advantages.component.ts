import { Component, OnInit } from '@angular/core';
import {ItemType} from "../types/advantage.type";

@Component({
  selector: 'advantages-comp',
  templateUrl: './advantages.component.html',
  styleUrls: ['./advantages.component.scss']
})
export class AdvantagesComponent implements OnInit {

  constructor() { }
  public advantages: ItemType[] = [
    {
      title: "Лучшие продукты",
      description: "Мы честно готовим макаруны только из натуральных и качественных продуктов. Мы не используем консерванты, ароматизаторы и красители."
    },
    {
      title: "Много вкусов",
      description: "Наша задача – предоставить вам широкое разнообразие вкусов. Вы удивитесь, но у нас более 70 вкусов пироженок."
    },
    {
      title: "Лучшие продукты",
      description: "Все пирожные готовятся на бисквитном тесте с качественным сливочным маслом 82,5%. В составе нет маргарина и дрожжей!"
    },
    {
      title: "Лучшие продукты",
      description: "Вкус, качество и безопасность наших пирогов подтверждена декларацией о соответствии, которую мы получили 22.06.2016 г."
    },
  ]
  ngOnInit(): void {
  }

}
