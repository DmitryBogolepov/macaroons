import {Component} from '@angular/core';
import {ItemType} from "./components/types/advantage.type";
import {MacaroonType} from "./components/types/macaroon.type";

@Component({
    selector: 'app-component',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
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

    public scrollTo(target: HTMLElement): void {
        target.scrollIntoView({behavior: 'smooth'});
    }

    public macaroons: MacaroonType[] = [
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
    }

    public showPresent:boolean = true;
}




