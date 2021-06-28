import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BlockUI, NgBlockUI } from 'ng-block-ui';

import { Product } from 'src/app/entities/product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  @BlockUI() blockUI!: NgBlockUI;
  private categoryId: string = 'MCO441905'; // Enterizos
  public products: Product[] = [];

  constructor(
    private readonly productService: ProductsService,
    private router: Router,
  ) {
    this.blockUI.start('Cargando productos...');
  }

  ngOnInit(): void {
    this.getAllProducts(this.categoryId);
  }

  search($event: any) {
    this.router.navigateByUrl(`/search/${$event}`);
  }

  private getAllProducts(categoryId: string) {
    this.productService.getAll(categoryId, 4).subscribe((res) => {
      this.products = [...res.results];
      this.blockUI.stop();
    });
  }
}
