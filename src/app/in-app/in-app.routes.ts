import { Routes } from '@angular/router';
import { InAppComponent } from './in-app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AccesComponent } from './acces/acces.component';
import { ContactComponent } from './contact/contact.component';
import { ChauffeurComponent } from './chauffeur/chauffeur.component';
import { CovoiturageComponent } from './covoiturage/covoiturage.component';

export const routes: Routes = [{
  path: '', component: InAppComponent, children: [
    {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full'
    },
    {
      path: 'dashboard',
      component: DashboardComponent,
      data: {
        text: 'Dashboard'
      }
    },
    {
      path: 'acces',
      component: AccesComponent,
      data: {
        text: 'Acces'
      }
    },
    {
      path: 'contact',
      component: ContactComponent,
      data: {
        text: 'contact'
      }
    },
    {
      path: 'chauffeur',
      component: ChauffeurComponent,
      data: {
        text: 'Chauffeur'
      }
    },
    {
      path: 'covoiturage',
      component: CovoiturageComponent,
      data: {
        text: 'Covoiturage'
      }
    }
  ]
}];
