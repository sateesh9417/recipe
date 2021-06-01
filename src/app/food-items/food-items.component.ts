import { Component, OnInit } from '@angular/core';
import { FoodItemService } from '../food-item.service';

@Component({
  selector: 'app-food-items',
  templateUrl: './food-items.component.html',
  styleUrls: ['./food-items.component.css']
})
export class FoodItemsComponent implements OnInit {

  constructor(public fs:FoodItemService) { }

  foodItems:any=[];
  ngOnInit(): void {
   this.getItems()
  }
getItems(){
  this.fs.getFood().subscribe(res=>{
    this.foodItems=res
    // console.log(this.foodItems);
  })
}

}
