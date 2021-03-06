import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { FooterComponentComponent } from './footer-component/footer-component.component';
import { MainlayoutComponentComponent } from './mainlayout-component/mainlayout-component.component';
import { NavigationComponentComponent } from './navigation-component/navigation-component.component';
import { ContentComponentComponent } from './content-component/content-component.component';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { CounterComponent } from './counter/counter.component';
import { UserformComponent } from './userform/userform.component';
import { DisplayuserformComponent } from './displayuserform/displayuserform.component';
import { NgDirectivesComponent } from './ng-directives/ng-directives.component';
import { HighlightDirective } from './highlight.directive';
import {ChatService} from "./Models/ChatService";
import {Cookie} from "./Models/Cookie";
import {CookieService} from "./Models/CookieService";
import { EatCookieComponent } from './eat-cookie/eat-cookie.component';
import { CreateCookieComponent } from './create-cookie/create-cookie.component';
import { CookieInfoComponent } from './cookie-info/cookie-info.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent,
    FooterComponentComponent,
    MainlayoutComponentComponent,
    NavigationComponentComponent,
    ContentComponentComponent,
    BlogPostComponent,
    WelcomeComponent,
    CounterComponent,
    UserformComponent,
    DisplayuserformComponent,
    NgDirectivesComponent,
    HighlightDirective,
    EatCookieComponent,
    CreateCookieComponent,
    CookieInfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ChatService, CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
