import {Component, Input} from '@angular/core';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent {

  @Input('repoItems')
  public repoItems$: Observable<Repository[]>;

  public repoItems: Repository[];

}
