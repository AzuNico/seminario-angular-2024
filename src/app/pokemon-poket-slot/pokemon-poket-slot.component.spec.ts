import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonPoketSlotComponent } from './pokemon-poket-slot.component';

describe('PokemonPoketSlotComponent', () => {
  let component: PokemonPoketSlotComponent;
  let fixture: ComponentFixture<PokemonPoketSlotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PokemonPoketSlotComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemonPoketSlotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
