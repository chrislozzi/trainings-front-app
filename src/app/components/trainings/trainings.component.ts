import { Component, OnInit } from '@angular/core';
import { Training } from 'src/app/model/training.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-trainings',
  templateUrl: './trainings.component.html',
  styleUrls: ['./trainings.component.css']
})
export class TrainingsComponent implements OnInit {
  listTrainings : Training[] | undefined;
  constructor() { }

  ngOnInit(): void {
    this.listTrainings = [
      {id:1,name:'Java',description:'Formation JavaSE 8 sur 5 jours',price:1500,quantity:1},
      {id:2,name:'DotNet',description:'Formation DotNet 3 jours',price:1000,quantity:1},
      {id:3,name:'Python',description:'Formation Python/Django 5 jours',price:1500,quantity:1}
          ];
  }

  onAddToCart(training:Training){
    this.cartService.addtrining(training);
  }
}
