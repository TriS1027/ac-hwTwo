import { Injectable } from '@angular/core';
import {
  BaseRequestOptions, Headers,
  Http, Request, Response, XHRBackend
} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class HttpService extends Http {

  public constructor(
    _backend: XHRBackend,
    _defaultOptions: BaseRequestOptions
  ) {
    super(_backend, _defaultOptions);
  }

  public get<T>(
    url: string,
    headersObj: { [key: string]: string } = {}
  ): Observable<T> {
    const headers: Headers = new Headers();
    Object.keys(headersObj)
      .forEach((key: string) => headers.append(key, headersObj[key]));
    return this.request(new Request(this._defaultOptions.merge({
      url,
      headers,
      method: 'GET'
    })))
      .map((res: Response) => {
        return res.json();
      })
      .catch((err: Error) => Observable.of([]));
  }

}
