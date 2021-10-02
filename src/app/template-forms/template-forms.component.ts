import { Component, OnInit } from '@angular/core';
import { PasswordTemplateFormValidationDirective } from '../password-template-form-validation.directive';

@Component({
  selector: 'template-form',
  templateUrl: './template-forms.component.html',
  styleUrls: ['./template-forms.component.css']
})
export class TemplateFormsComponent{
  userNameTS:string;
  emailTS:string;
  passwordTS:string;
  submitted:boolean=false;
  onSubmit(){
    this.submitted=true;
  }
}
