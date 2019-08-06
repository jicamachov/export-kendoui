import { products } from './../_model/products';
import { Component, OnInit } from '@angular/core';

import { ExcelExportData } from '@progress/kendo-angular-excel-export';
import { process } from '@progress/kendo-data-query';

@Component({
  selector: 'app-exporting-specific-data',
  templateUrl: './exporting-specific-data.component.html',
  styleUrls: ['./exporting-specific-data.component.scss']
})
export class ExportingSpecificDataComponent implements OnInit {

  public products: any[] = products;

    public group: any[] = [{
        field: 'Category.CategoryName'
    }];

    constructor() {
        this.allData = this.allData.bind(this);
    }

    ngOnInit() {}

    public allData(): ExcelExportData {
        const result: ExcelExportData =  {
            data: process(products, { group: this.group, sort: [{ field: 'ProductID', dir: 'asc' }] }).data,
            group: this.group
        };

        return result;
    }

}
