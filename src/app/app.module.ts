import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { Routes } from '@angular/router';
const Routs: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'contact', component: ContactComponent },
];
@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    BlogComponent,
    ContactComponent,
    HomeComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
