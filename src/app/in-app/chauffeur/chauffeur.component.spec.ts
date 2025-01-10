import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { IGX_NAVBAR_DIRECTIVES, IgxIconButtonDirective, IgxRippleDirective, IgxIconComponent, IGX_CALENDAR_DIRECTIVES, IGX_INPUT_GROUP_DIRECTIVES } from 'igniteui-angular';
import { ChauffeurComponent } from './chauffeur.component';

describe('ChauffeurComponent', () => {
  let component: ChauffeurComponent;
  let fixture: ComponentFixture<ChauffeurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ChauffeurComponent, NoopAnimationsModule, FormsModule, IGX_NAVBAR_DIRECTIVES, IgxIconButtonDirective, IgxRippleDirective, IgxIconComponent, IGX_CALENDAR_DIRECTIVES, IGX_INPUT_GROUP_DIRECTIVES ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChauffeurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
