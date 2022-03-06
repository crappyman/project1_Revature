import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListHttpRequestComponent } from './list-http-request.component';

describe('ListHttpRequestComponent', () => {
  let component: ListHttpRequestComponent;
  let fixture: ComponentFixture<ListHttpRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListHttpRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListHttpRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
