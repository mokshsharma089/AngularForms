import { Directive } from '@angular/core';
import { Validator, FormControl, NG_VALIDATORS } from '@angular/forms';

@Directive({
  selector: '[validatePasswordDirective]',
  providers: [{ provide: NG_VALIDATORS, useExisting: PasswordTemplateFormValidationDirective, multi: true }]
})
export class PasswordTemplateFormValidationDirective implements Validator{
  validate(control: FormControl): { [key: string]: any } {
    const passwordRegexp = /[a-z]{5,}/;
    if (!passwordRegexp.test(control.value)) {
        return { "passInvalid": "Pass Word entered is not of required standard, message from custom validator" };
    }
    return null;
}

}
