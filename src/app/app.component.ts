import {Component} from '@angular/core';
import {AdvantageType} from "./components/types/advantage.type";

@Component({
    selector: 'app-component',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    public advantages: AdvantageType[] = [
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

}




