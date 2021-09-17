import {Directive, OnDestroy} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Subscription} from 'rxjs';


@Directive()
export class BaseFormComponent {

  public form: FormGroup;
  public subscriptions: Subscription[] = [];

  constructor() {
  }

  isRequiredLength(controlName: string): boolean {
    try {
      return (this.form.get(controlName).hasError('maxlength'));
    } catch (error) {
      console.error(error);
      alert(error);
    }
  }

  isRequiredPattern(controlName: string): boolean {
    try {
      return (this.form.get(controlName).hasError('pattern'));
    } catch (error) {
      console.error(error);
      alert(error);
    }
  }

  isTouchedOrDirty(controlName: string): boolean {
    try {
      return (this.form.get(controlName).dirty || this.form.get(controlName).touched);
    } catch (error) {
      console.error(error);
      alert(error);
    }
  }

  isRequiredAndTouchedOrDirty(controlName: string): boolean {
    try {
      return (this.form.get(controlName).hasError('required')
        && this.isTouchedOrDirty(controlName));
    } catch (error) {
      console.error(error);
      alert(error);
    }
  }

  isInvalidAndTouchedOrDirty(controlName: string): boolean {
    if (this.form.get(controlName)) {
      try {
        return (this.form.get(controlName).invalid
          && this.isTouchedOrDirty(controlName));
      } catch (error) {
        console.error(error);
        alert(error);
      }
    }
  }

  isBelowMinAndTouchedOrDirty(controlName: string): boolean {
    try {
      return (this.form.get(controlName).hasError('min')
        && this.isTouchedOrDirty(controlName));
    } catch (error) {
      console.error(error);
      alert(error);
    }
  }

  isAboveMaxAndTouchedOrDirty(controlName: string): boolean {
    try {
      return (this.form.get(controlName).hasError('max')
        && this.isTouchedOrDirty(controlName));
    } catch (error) {
      console.error(error);
      alert(error);
    }
  }

  isAboveMaxLengthAndTouchedOrDirty(controlName: string): boolean {
    try {
      return (this.form.get(controlName).hasError('maxlength')
        && this.isTouchedOrDirty(controlName));
    } catch (error) {
      console.error(error);
      alert(error);
    }
  }

  isInvalidPeriodAndTouchedOrDirty(controlName: string): boolean {
    try {
      return (this.form.get(controlName).hasError('invalidPeriod')
        && this.isTouchedOrDirty(controlName));
    } catch (error) {
      console.error(error);
      alert(error);
    }
  }

  addIsInvalidClass(controlName: string): any {
    if (this.isInvalidAndTouchedOrDirty(controlName)) {
      return {'is-invalid': true};
    } else if (this.isValidClass(controlName)) {
      return {'is-valid': true};
    } else {
      return {'is-invalid': false};
    }
  }

  isValidClass(controlName: string): boolean {
    try {
      return (this.form.get(controlName).valid);
    } catch (error) {
      console.error(error);
      alert(error);
    }
  }
}
