import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { IGX_NAVBAR_DIRECTIVES, IgxIconButtonDirective, IgxRippleDirective, IgxIconComponent, IGX_BANNER_DIRECTIVES, IgxButtonDirective } from 'igniteui-angular';
import { AccesComponent } from './acces.component';

describe('AccesComponent', () => {
  let component: AccesComponent;
  let fixture: ComponentFixture<AccesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ AccesComponent, NoopAnimationsModule, FormsModule, HttpClientTestingModule, IGX_NAVBAR_DIRECTIVES, IgxIconButtonDirective, IgxRippleDirective, IgxIconComponent, IGX_BANNER_DIRECTIVES, IgxButtonDirective ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
