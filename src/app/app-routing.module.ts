import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactusComponent } from './contactus/contactus.component';
import { CreateSurveyFormComponent } from './create-survey-form/create-survey-form.component';
import { CreateUpdateSurveyComponent } from './create-update-survey/create-update-survey.component';
import { HomepageComponent } from './homepage/homepage.component';
import { RegistrationformComponent } from './registrationform/registrationform.component';


const routes: Routes = [{path:'create',component:CreateUpdateSurveyComponent},{path:'survey',component:CreateSurveyFormComponent},{path:'homepage',component:HomepageComponent},{path:'registrationform',component:RegistrationformComponent}
,{path:'contactus',component:ContactusComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

 

