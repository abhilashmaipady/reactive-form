import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reusable-forms',
  templateUrl: './reusable-forms.component.html',
  styleUrls: ['./reusable-forms.component.scss']
})
export class ReusableFormsComponent {
  buffer = '';

  signupForm: FormGroup;
  testValue = {
    'firstName': 'test',
    'lastName': 'test last',
    'email': 'abc@gmail.com'
  };

  constructor(private formBuilder: FormBuilder) {
    this.signupForm = this.formBuilder.group({
      password: [],
      profile: [this.testValue]
    });
  }

  submit() {
    // console.log(this.signupForm.value);
    this.buffer.concat(this.signupForm.value, '\n');
  }
}
