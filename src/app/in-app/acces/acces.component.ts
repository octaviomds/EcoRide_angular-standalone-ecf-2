import { Component, OnDestroy, OnInit } from '@angular/core';
import { IGX_BANNER_DIRECTIVES, IGX_NAVBAR_DIRECTIVES, IgxButtonDirective, IgxIconButtonDirective, IgxIconComponent, IgxOverlayOutletDirective, IgxRippleDirective, IgxToggleActionDirective, IgxToggleDirective } from 'igniteui-angular';
import { Subject, takeUntil } from 'rxjs';
import { CategoriesType } from '../../models/northwind/categories-type';
import { NorthwindService } from '../../services/northwind.service';

@Component({
  selector: 'app-acces',
  standalone: true,
  imports: [IGX_NAVBAR_DIRECTIVES, IGX_BANNER_DIRECTIVES, IgxIconButtonDirective, IgxToggleActionDirective, IgxOverlayOutletDirective, IgxRippleDirective, IgxToggleDirective, IgxIconComponent, IgxButtonDirective],
  templateUrl: './acces.component.html',
  styleUrls: ['./acces.component.scss']
})
export class AccesComponent implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();
  public northwindCategories: CategoriesType[] = [];

  constructor(
    private northwindService: NorthwindService,
  ) {}

  ngOnInit() {
    this.northwindService.getCategories().pipe(takeUntil(this.destroy$)).subscribe({
      next: (data) => this.northwindCategories = data,
      error: (_err: any) => this.northwindCategories = []
    });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
