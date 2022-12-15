import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/Models/Product';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
@Input() data:Product= {
  id: 0,
  name: '',
  photo: '',
  description: '',
  prix: 0,
  isFavorite: false,
  ispromotion: false
};
@Input() NB!:number;


  constructor() { }

  ngOnInit(): void {
  }

}
