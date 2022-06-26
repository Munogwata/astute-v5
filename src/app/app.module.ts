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
import { MoneyScreenComponent } from './screen-components/money-screen/money-screen.component';
import { KeepScreenComponent } from './screen-components/keep-screen/keep-screen.component';
import { GrowScreenComponent } from './screen-components/grow-screen/grow-screen.component';
import { MakeScreenComponent } from './screen-components/make-screen/make-screen.component';
import { ScreenCardsComponent } from './reusable-components/screen-cards/screen-cards.component';
import { PlanTabsComponent } from './reusable-components/plan-tabs/plan-tabs.component';
import { PlansFullCardComponent } from './reusable-components/plans-full-card/plans-full-card.component';
import { DebtFullPlanComponent } from './reusable-components/debt-full-plan/debt-full-plan.component';




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
    MobileScreenComponent,
    MoneyScreenComponent,
    KeepScreenComponent,
    GrowScreenComponent,
    MakeScreenComponent,
    ScreenCardsComponent,
    PlanTabsComponent,
    PlansFullCardComponent,
    DebtFullPlanComponent,




  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
