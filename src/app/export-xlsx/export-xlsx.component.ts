import { Component, OnInit } from '@angular/core';

import { aggregateBy, State, process } from '@progress/kendo-data-query';
import { sampleProducts } from '../_model/products';
import { GridDataResult } from '@progress/kendo-angular-grid';

@Component({
  selector: 'app-export-xlsx',
  templateUrl: './export-xlsx.component.html',
  styleUrls: ['./export-xlsx.component.scss']
})
export class ExportXlsxComponent implements OnInit {

  items: any[] = [ {field: 'ProductID', title: 'Product ID'}, {field: 'ProductName', title: 'Product Name'}];
  public state: State = {
    skip: 0,
    take: 5,

    // Initial filter descriptor
    filter: {
      logic: 'and',
      filters: [{ field: 'ProductName', operator: 'contains', value: 'Chef' }]
    }
};
  constructor() { }

  ngOnInit() {
  }

  


  public aggregates: any[] = [{ field: 'UnitPrice', aggregate: 'sum' }];

  public products: any[] = sampleProducts;
  public gridData: GridDataResult = process(sampleProducts, this.state);

  public total: any = aggregateBy(this.products, this.aggregates);

}
