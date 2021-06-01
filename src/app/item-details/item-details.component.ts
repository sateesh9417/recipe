import { Component, OnInit } from '@angular/core';
import { FoodItemService } from '../food-item.service';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent implements OnInit {
  // d: any;

  constructor(public fs:FoodItemService) { }
itemDetails:any=[];
  ngOnInit(): void {
    this.getDetails(this.items)
  }
  items:any=[];
  getDetails(d:any){
    this.fs.getFood().subscribe(res=>{
      this.itemDetails=res
      console.log(res);
    })
    this.fs.getfood(d).subscribe(res=>{
      this.items=res
      console.log(this.items);
    })
  }

}


