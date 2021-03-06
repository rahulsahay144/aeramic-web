import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactusComponent } from './contactus/contactus.component';
import { EstimatorComponent } from './estimator/estimator.component';
import { FormalprocessComponent } from './formalprocess/formalprocess.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ProjectsComponent } from './projects/projects.component';

const routes: Routes = [
  {path: '', component: HomepageComponent, pathMatch: 'full'},
  {path: 'projects', component: ProjectsComponent, data: { animation: 'JoinUs'}},
  {path: 'estimator', component: EstimatorComponent, data: { animation: 'JoinUs'}},
  {path: 'contactus', component: ContactusComponent, data: { animation: 'JoinUs'}},
  {path: 'howitworks', component: FormalprocessComponent, data: { animation: 'JoinUs'}},
  {path: '**', redirectTo: '/'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: false, scrollPositionRestoration: 'top'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

