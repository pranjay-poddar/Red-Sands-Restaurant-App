import { Dish } from './../shared/dish';
import { Component, OnInit } from '@angular/core';

const DISHES:Dish[] =[
  {   id: '1',
    name: 'pizza',
    image: '/assets/images/uthappizza.png',
    category : 'mains',
    featured : true,
    label : 'hot',
    price : '4.99',
    description : 'an amazing pizza'},
    
    {   id: '2',
    name: 'burger',
    image: '/assets/images/vadonut.png',
    category : 'starter',
    featured : false,
    label : 'cold',
    price : '8.99',
    description : 'an amazing burger'},
    
    {   id: '3',
    name: 'dosa',
    image: '/assets/images/buffet.png',
    category : 'desert',
    featured : false,
    label : 'mild',
    price : '6.7',
    description : 'an amazing doas'}
    ,
    {   id: '4',
    name: 'zucchipakoda',
    image: '/assets/images/zucchipakoda.png',
    category : 'desert',
    featured : false,
    label : 'mild',
    price : '6.7',
    description : 'an amazing zucchipakoda'}
];
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
dishes:Dish[]= DISHES;
selectedDish:Dish = DISHES[0];
  constructor() { }

  ngOnInit(): void {
  }

}
