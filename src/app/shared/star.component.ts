import { Component, OnChanges, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'pm-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.scss']
})
export class StarComponent implements OnChanges {
  @Input() rating : number ;
  starWidth = 0;
  @Output() ratingClicked : EventEmitter<string> = 
        new EventEmitter<string>();

  ngOnChanges(): void {
    this.starWidth = this.rating * 100 / 5;
  }

  onClick() : void{
      this.ratingClicked.emit(`The rating ${this.rating} was clicked!`);
  }
}