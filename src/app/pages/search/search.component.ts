import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlockUI, NgBlockUI } from 'ng-block-ui';

import { Product } from 'src/app/entities/product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  @BlockUI() blockUI!: NgBlockUI;
  public breadcrumb!: string;
  public foundProducts: Product[] = [];
  public params!: any;

  constructor(
    private readonly productService: ProductsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.params = this.route.snapshot.paramMap.get('query');

    if (this.params) {
      this.search(this.params);
    }
  }

  public search($event: any) {
    this.blockUI.start('Buscando coincidencias...');
    const categoryId: string = 'MCO441905'; // Enterizos
    this.productService.search(categoryId, $event).subscribe((res) => {
      this.foundProducts = [...res.results];
      this.breadcrumb = res.query;

      this.blockUI.stop();
    });
  }
}
