import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateUpdateSurveyComponent } from './create-update-survey/create-update-survey.component';

const routes: Routes = [{path:'create',component:CreateUpdateSurveyComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
