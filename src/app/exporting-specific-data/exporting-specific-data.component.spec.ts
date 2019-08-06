import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportingSpecificDataComponent } from './exporting-specific-data.component';

describe('ExportingSpecificDataComponent', () => {
  let component: ExportingSpecificDataComponent;
  let fixture: ComponentFixture<ExportingSpecificDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExportingSpecificDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExportingSpecificDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
