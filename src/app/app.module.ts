import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatTabsModule} from '@angular/material/tabs';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateUpdateSurveyComponent } from './create-update-survey/create-update-survey.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CreateSurveyFormComponent } from './create-survey-form/create-survey-form.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import { HomepageComponent } from './homepage/homepage.component';
import { RegistrationformComponent } from './registrationform/registrationform.component';
import { ContactusComponent } from './contactus/contactus.component';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    CreateUpdateSurveyComponent,
    CreateSurveyFormComponent,
    HomepageComponent,
  
    RegistrationformComponent,
    ContactusComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MatTabsModule,
    MatFormFieldModule,
    MatCardModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    MatRadioModule,
    
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
