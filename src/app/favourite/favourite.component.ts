import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation} from '@angular/core';


@Component({
  selector: 'favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css'],
  styles: [
    `
    .btn{
      color: white;
    }
    .btn-primary{
      color:red;
    }
    `
  ],
  encapsulation: ViewEncapsulation.None
})
export class FavouriteComponent  {
   @Input('isFavourite') isSelected: boolean = true;
   @Output('change') click = new EventEmitter();

  onClick() {
    this.isSelected = !this.isSelected;
    this.click.emit({newValue: this.isSelected});
  }
}


export interface FavoriteChangedEventArgs {
   newValue: boolean
}