import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListHttpAccountComponent } from './list-http-account.component';

describe('ListHttpAccountComponent', () => {
  let component: ListHttpAccountComponent;
  let fixture: ComponentFixture<ListHttpAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListHttpAccountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListHttpAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
