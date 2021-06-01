import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FoodItemService } from '../food-item.service';

@Component({
  selector: 'app-add-recipes',
  templateUrl: './add-recipes.component.html',
  styleUrls: ['./add-recipes.component.css']
})
export class AddRecipesComponent implements OnInit {

  constructor(public fs:FoodItemService) { }
  ngOnInit(): void {
  }
onSubmit(addRecipeForm:NgForm){
  this.fs.postFood(addRecipeForm.value).subscribe(res=>{
    addRecipeForm.reset()
    // if(!res.error){
    //   alert("Food Recipe Added Successfully")
    // }else{
    //   alert("recipe adding process is failed")
    // }
  },err=>{
    alert("server error")
  })
}
}
