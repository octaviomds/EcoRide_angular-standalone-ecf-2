import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { IGX_NAVBAR_DIRECTIVES, IgxIconButtonDirective, IgxRippleDirective, IgxIconComponent, IgxRadioComponent, IgxRadioGroupDirective, IGX_INPUT_GROUP_DIRECTIVES } from 'igniteui-angular';
import { CovoiturageComponent } from './covoiturage.component';

describe('CovoiturageComponent', () => {
  let component: CovoiturageComponent;
  let fixture: ComponentFixture<CovoiturageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ CovoiturageComponent, NoopAnimationsModule, FormsModule, IGX_NAVBAR_DIRECTIVES, IgxIconButtonDirective, IgxRippleDirective, IgxIconComponent, IgxRadioComponent, IgxRadioGroupDirective, IGX_INPUT_GROUP_DIRECTIVES ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CovoiturageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
