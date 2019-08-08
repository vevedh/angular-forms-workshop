import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { customForbiddenValidator } from '../validation/validators/custom-forbidden.validator';
import { customAsyncFormGroupValidator } from '../validation/validators/custom-async-form-group.validator';

@Component({
  selector: 'reactive-form',
  templateUrl: './reactive-form.component.html'
})
export class ReactiveFormComponent implements OnInit {

  formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {

    this.formGroup = this.formBuilder.group(
      {
        degree: null,
        firstName: [null, Validators.required],
        lastName: [null, Validators.compose([Validators.required, customForbiddenValidator("Faker")])],
        email: [null, Validators.required],
        address: this.formBuilder.group({
          zipCode: null,
          city: null,
        }),
        confirm: null
      },
      {
        validator: null,
        asyncValidator: customAsyncFormGroupValidator
      }
    );
  }

  onSubmit() {
    this.formGroup.reset();
  }
}
