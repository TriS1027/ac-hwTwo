import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/fromEvent';
import { GithubSearchService } from './common/services/github-search.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public title: string = 'GitHub Search';
  public placeholder: string = 'Search';
  public logo: string = 'assets/images/logo.png';
  public logoWidth: number = 50;

  @ViewChild('search')
  public searchInput: ElementRef;

  public repoItems$: Observable<Repository[]>;

  public constructor(private githubSearch: GithubSearchService) {
  }

  public ngOnInit(): void {
    this.repoItems$ = Observable.fromEvent(this.searchInput.nativeElement, 'input')
      .debounceTime(200)
      .map((event: KeyboardEvent) => (event.target as HTMLInputElement).value)
      .switchMap((searchTerm: string) => {
        return this.githubSearch.getSearch(searchTerm);
      }).map((repo: any) =>  {
        return repo.items;
      });
  }

}
