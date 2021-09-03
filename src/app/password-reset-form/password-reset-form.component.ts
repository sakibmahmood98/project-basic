import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { PasswordValidators } from './password.validators';

@Component({
  selector: 'password-reset-form',
  templateUrl: './password-reset-form.component.html',
  styleUrls: ['./password-reset-form.component.css']
})
export class PasswordResetFormComponent {


  form;
  constructor(fb: FormBuilder)
  {
    this.form = fb.group({
      oldPassword: ['', Validators.required, PasswordValidators.checkPasswordExists],
      newPassword: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    }, {
      validator: PasswordValidators.passwordShouldMatch
    });
  }

  
  
  resetPassword()
  {
    console.log("Submitting Form...");
    console.log(this.form);
  }

  get oldPassword()
  {
    return this.form.get('oldPassword');
  }

  get newPassword()
  {
    return this.form.get('newPassword');
  }

  get confirmPassword()
  {
    return this.form.get('confirmPassword');
  }

}
