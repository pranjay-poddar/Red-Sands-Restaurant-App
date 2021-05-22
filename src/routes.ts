import { HomeComponent } from './app/home/home.component';
import { ContactComponent } from './app/contact/contact.component';
import { AboutComponent } from './app/about/about.component';
import { MenuComponent } from './app/menu/menu.component';
import { DishdetailComponent } from './app/dishdetail/dishdetail.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'dishdetail/:id', component: DishdetailComponent },
  {path: 'home', component: HomeComponent},
  {path: 'menu', component: MenuComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent}

];