import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateSurveyFormComponent } from './create-survey-form/create-survey-form.component';
import { CreateUpdateSurveyComponent } from './create-update-survey/create-update-survey.component';

const routes: Routes = [{path:'create',component:CreateUpdateSurveyComponent},{path:'survey',component:CreateSurveyFormComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
