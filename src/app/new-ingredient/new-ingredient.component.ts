import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-ingredient',
  templateUrl: './new-ingredient.component.html',
  styleUrls: ['./new-ingredient.component.css']
})
export class NewIngredientComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  Submit(f){
    console.log(f.form.value);
    f.reset();
    
  }

}
