import {Component, Input, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ItemComponent {

  @Input('item')
  public repository: Repository;

  @Input()
  public isOdd: number;

}
