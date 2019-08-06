import { BrowserModule } from '@angular/platform-browser';
import { NgModule,LOCALE_ID } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { IntlModule } from '@progress/kendo-angular-intl';
import { GridModule, ExcelModule } from '@progress/kendo-angular-grid';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ExportXlsxComponent } from './export-xlsx/export-xlsx.component';
import { ExportingSpecificDataComponent } from './exporting-specific-data/exporting-specific-data.component';
import { ButtonsModule } from '@progress/kendo-angular-buttons';



@NgModule({
  declarations: [
    AppComponent,
    ExportXlsxComponent,
    ExportingSpecificDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GridModule,
    ExcelModule,
    ButtonsModule,
    BrowserAnimationsModule,
    IntlModule
  ],
  providers: [
    {
      provide: LOCALE_ID, useValue: 'es_CO'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
