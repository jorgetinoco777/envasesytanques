import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Routes
import { app_routing } from './app.routes';

//Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/page/home/home.component';
import { ContactsComponent } from './components/page/contacts/contacts.component';
import { AboutComponent } from './components/page/about/about.component';
import { ProductsComponent } from './components/page/products/products.component';
import { ManagementComponent } from './components/page/management/management.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    ContactsComponent,
    AboutComponent,
    ProductsComponent,
    ManagementComponent
  ],
  imports: [
    BrowserModule,
    app_routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
