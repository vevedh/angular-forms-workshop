import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule, NG_VALIDATORS } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DYNAMIC_VALIDATORS, Validator, ValidatorFactory } from '@ng-dynamic-forms/core';
import { DynamicFormsNGBootstrapUIModule } from '@ng-dynamic-forms/ui-ng-bootstrap';

import { AppComponent } from './app.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';

import { ValidationMessageComponent } from './validation/validation-message/validation-message.component';
import { CustomForbiddenValidatorDirective, customForbiddenValidator } from './validation/validators/custom-forbidden.validator';
import { ValidationMessageDirective } from './validation/validation-message/validation-message.directive';
import { customAsyncFormGroupValidator } from "./validation/validators/custom-async-form-group.validator";
import { CustomFormControlComponent } from './custom-form-control/custom-form-control.component';
import { ReactiveSearchComponent } from './reactive-search/reactive-search.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateFormComponent,
    ReactiveFormComponent,
    DynamicFormComponent,
    ValidationMessageComponent,
    ValidationMessageDirective,
    CustomForbiddenValidatorDirective,
    CustomFormControlComponent,
    ReactiveSearchComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    DynamicFormsNGBootstrapUIModule,
    AppRoutingModule
  ],
  entryComponents: [ValidationMessageComponent],
  providers: [
    { provide: NG_VALIDATORS, useValue: customForbiddenValidator, multi: true },
    { provide: NG_VALIDATORS, useValue: customAsyncFormGroupValidator, multi: true },
    { provide: DYNAMIC_VALIDATORS, useValue: new Map<string, Validator | ValidatorFactory>([
        ["customForbiddenValidator", customForbiddenValidator],
        ["customAsyncFormGroupValidator", customAsyncFormGroupValidator]
    ])}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
