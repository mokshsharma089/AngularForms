import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'reactive-form',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {
  registerForm: FormGroup;
  submitted:boolean=false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(){
    this.registerForm = this.formBuilder.group({
      firstName: ['', {updateOn: 'blur', validators:[Validators.required]}],
      lastName: ['', Validators.required],
      email:['',validateEmail],
      address: this.formBuilder.group({
        street: [],
        zip: [],
        city: []
      })
    });
  }

}

function validateEmail(c: FormControl) {
  let EMAIL_REGEXP = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
  return EMAIL_REGEXP.test(c.value) ? null : {
      emailInvalid: {
          message: "Invalid Format! Message coming from validateEmail function in Reactive Component"
      }
  };
}
