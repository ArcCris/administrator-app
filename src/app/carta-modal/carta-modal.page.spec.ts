import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CartaModalPage } from './carta-modal.page';

describe('CartaModalPage', () => {
  let component: CartaModalPage;
  let fixture: ComponentFixture<CartaModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartaModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CartaModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
