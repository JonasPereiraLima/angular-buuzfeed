import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuizzComponent } from './pages/quizz/quizz.component';
import { HomeComponent } from './pages/home/home.component';
import { QuizzCardComponent } from './components/quizz-card/quizz-card.component';
import { HeaderNavComponent } from './components/header-nav/header-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    QuizzComponent,
    HomeComponent,
    QuizzCardComponent,
    HeaderNavComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
