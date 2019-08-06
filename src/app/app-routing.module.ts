import { ExportingSpecificDataComponent } from './exporting-specific-data/exporting-specific-data.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExportXlsxComponent } from './export-xlsx/export-xlsx.component';

const routes: Routes = [
  {
    path: '',
    component: ExportXlsxComponent
  },
  {
    path: '1',
    component: ExportXlsxComponent
  },
  {
    path: '2',
    component: ExportingSpecificDataComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
