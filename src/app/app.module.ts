import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { UpdatebarComponent } from './components/updatebar/updatebar.component';
import { HomeComponent } from './pages/home/home.component';
import { MakeComponent } from './pages/make/make.component';
import { KeepComponent } from './pages/keep/keep.component';
import { GrowComponent } from './pages/grow/grow.component';
import { AboutComponent } from './pages/about/about.component';
import { MobileScreenComponent } from './components/mobile-screen/mobile-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    UpdatebarComponent,
    HomeComponent,
    MakeComponent,
    KeepComponent,
    GrowComponent,
    AboutComponent,
    MobileScreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
