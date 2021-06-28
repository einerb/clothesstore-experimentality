import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Api } from '../shared/api';
import { GlobalService } from './global.service';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private siteId: string = 'MCO';
  private sort: string = 'relevance';

  constructor(private globalService: GlobalService) {}

  public getAll(categoryId: string, limit: number): Observable<any> {
    return this.globalService
      .get(
        Api.Endpoints.PRODUCT.BASE(this.siteId, categoryId, limit, this.sort)
      )
      .pipe(
        map((res) => {
          return res;
        })
      );
  }

  public search(categoryId: string, search: string) {
    return this.globalService
      .post(
        Api.Endpoints.PRODUCT.SEARCH(this.siteId, categoryId, search, this.sort)
      )
      .pipe(
        map((res) => {
          return res;
        })
      );
  }
}
