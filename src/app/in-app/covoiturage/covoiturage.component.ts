import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IGX_INPUT_GROUP_DIRECTIVES, IGX_NAVBAR_DIRECTIVES, IgxIconButtonDirective, IgxIconComponent, IgxOverlayOutletDirective, IgxRadioComponent, IgxRadioGroupDirective, IgxRippleDirective, IgxToggleActionDirective, IgxToggleDirective } from 'igniteui-angular';

@Component({
  selector: 'app-covoiturage',
  standalone: true,
  imports: [IGX_INPUT_GROUP_DIRECTIVES, IGX_NAVBAR_DIRECTIVES, IgxIconButtonDirective, IgxToggleActionDirective, IgxOverlayOutletDirective, IgxRadioGroupDirective, IgxRippleDirective, IgxToggleDirective, IgxIconComponent, IgxRadioComponent, FormsModule],
  templateUrl: './covoiturage.component.html',
  styleUrls: ['./covoiturage.component.scss']
})
export class CovoiturageComponent {
  public radioGroupVisible: boolean = false;
  public value: string = '1';
  public value1: string = 'TOUS LES TRAJETS';
}
