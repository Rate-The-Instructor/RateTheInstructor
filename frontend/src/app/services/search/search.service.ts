import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  constructor() {}

  searchString = new BehaviorSubject<string>('');

  changeSearchValue(str: string) {
    console.log('Changed subject value');
    this.searchString.next(str);
  }

  get searchStringValue() {
    return this.searchString.asObservable();
  }
}
