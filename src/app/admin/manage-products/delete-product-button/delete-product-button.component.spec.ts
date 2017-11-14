import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteProductButtonComponent } from './delete-product-button.component';

describe('DeleteProductButtonComponent', () => {
  let component: DeleteProductButtonComponent;
  let fixture: ComponentFixture<DeleteProductButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteProductButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteProductButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
