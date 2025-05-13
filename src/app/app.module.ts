import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { ProductComponent } from './components/product/product.component';
import { ButtonEffectsDirective } from './directives/button-effects.directive';
import {CurrencyPipe} from './pipes/currency-pipe.pipe';
import {ProductService} from "./services/product.service";
import { AdvantagesComponent } from './components/advantages/advantages.component';
import { NumberPipe } from './pipes/number.pipe';
import { TextLengthPipe } from './pipes/text-length.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    ProductComponent,
    ButtonEffectsDirective,
    CurrencyPipe,
    AdvantagesComponent,
    NumberPipe,
    TextLengthPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent,FooterComponent,HeaderComponent]
})
export class AppModule { }
