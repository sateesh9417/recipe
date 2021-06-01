import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodItemService {

  constructor(public http:HttpClient) { }

  getFood(){
    return this.http.get("http://localhost:3000/food-items")
  }
  getfood(d:any){
    return this.http.get("http://localhost:3000/food-items?id="+d)
  }
  postFood(id:any){
    return this.http.post("http://localhost:3000/food-items",id)
  }
}
