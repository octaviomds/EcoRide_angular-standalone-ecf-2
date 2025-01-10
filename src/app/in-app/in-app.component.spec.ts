import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';

import { IGX_NAVIGATION_DRAWER_DIRECTIVES, IgxIconComponent, IgxIconButtonDirective, IgxRippleDirective, IgxAvatarComponent } from 'igniteui-angular';
import { InAppComponent } from './in-app.component';

describe('InAppComponent', () => {
  let component: InAppComponent;
  let fixture: ComponentFixture<InAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ InAppComponent, NoopAnimationsModule, FormsModule, RouterTestingModule, IGX_NAVIGATION_DRAWER_DIRECTIVES, IgxIconComponent, IgxIconButtonDirective, IgxRippleDirective, IgxAvatarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
