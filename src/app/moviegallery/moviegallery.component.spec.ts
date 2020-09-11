import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviegalleryComponent } from './moviegallery.component';

describe('MoviegalleryComponent', () => {
  let component: MoviegalleryComponent;
  let fixture: ComponentFixture<MoviegalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoviegalleryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviegalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
