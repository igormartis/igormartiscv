import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UiModule } from './ui/ui.module';
import { BodyComponent } from './body/body.component';
import { NgsRevealModule } from 'ngx-scrollreveal';
import { ElementComponent } from './components/element/element.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { RoundProgressModule } from 'angular-svg-round-progressbar';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { LanguagesComponent } from './components/languages/languages.component';
import { SeparatorComponent } from './components/separator/separator.component';
import { SpecsComponent } from './components/specs/specs.component';
import { ContactsComponent } from './components/contacts/contacts.component';




@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    ElementComponent,
    PortfolioComponent,
    LanguagesComponent,
    SeparatorComponent,
    SpecsComponent,
    ContactsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    UiModule,
    NgsRevealModule,
    NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: '#78C000',
      innerStrokeColor: '#C7E596',
      animationDuration: 300,
    }),
    RoundProgressModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
