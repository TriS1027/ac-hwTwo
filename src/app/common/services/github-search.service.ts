import {Inject, Injectable} from '@angular/core';
import { DOMAIN_TOKEN } from '../../../config';
import {HttpService} from './http.service';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class GithubSearchService {

  public constructor(
    @Inject(HttpService) private _http: HttpService,
    @Inject(DOMAIN_TOKEN) private _domain: string
  ) { }

  public getSearch(searchTerm: string): Observable<Repository[]> {
    return this._http.get<Repository[]>(
      `${this._domain}/search/repositories?q=${searchTerm}`,
      {
        'Content-Type': 'application/json'
      }
    );

  }
}
