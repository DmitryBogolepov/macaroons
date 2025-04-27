import { Component} from '@angular/core';

@Component({
  selector: 'footer-component',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  constructor() { }
  public socials = {
    phone:"+375 (29) 368-98-68",
    instagram: "https://www.instagram.com/"
  }
  scrollToElement(id: string) {
    const element:HTMLElement | null = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
