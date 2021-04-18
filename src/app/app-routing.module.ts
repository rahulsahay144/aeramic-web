import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstimatorComponent } from './estimator/estimator.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ProjectsComponent } from './projects/projects.component';

const routes: Routes = [
  {path: '', component: HomepageComponent, pathMatch: 'full'},
  {path: 'projects', component: ProjectsComponent, data: { animation: 'JoinUs'}},
  {path: 'estimator', component: EstimatorComponent, data: { animation: 'JoinUs'}},
  {path: '**', redirectTo: '/'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: false, scrollPositionRestoration: 'top'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

