import { ContactType } from './../shared/feedback';
import { Component, OnInit,ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// import { Feedback } from '../shared/feedback';
import { FormControl } from '@angular/forms';
// @ViewChild('fform') feedbackFormDirective;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit  {
  
  feedbackForm:any;
  feedback:any;
  contactType = ContactType;
  @ViewChild('fform') feedbackFormDirective:any;
  constructor(private fb: FormBuilder) { 
    this.createForm();
  }


  
  formErrors = {
    'firstname': '',
    'lastname': '',
    'telnum': '',
    'email': ''
  };


  validationMessages = {
    'firstname': {
      'required':      'First Name is required.',
      'minlength':     'First Name must be at least 2 characters long.',
      'maxlength':     'FirstName cannot be more than 25 characters long.'
    },
    'lastname': {
      'required':      'Last Name is required.',
      'minlength':     'Last Name must be at least 2 characters long.',
      'maxlength':     'Last Name cannot be more than 25 characters long.'
    },
    'telnum': {
      'required':      'Tel. number is required.',
      'pattern':       'Tel. number must contain only numbers.'
    },'email': {
      'required':      'Email is required.',
      'email':         'Email not in valid format.'
    },
  };
  createForm(){
  this.feedbackForm = this.fb.group({
  firstname : ['', [Validators.required,Validators.minLength(2),Validators.maxLength(25)]],
  lastname : ['', [Validators.required,Validators.minLength(2),Validators.maxLength(25)]],
  telnum : ['', [Validators.required,Validators.pattern(/^[0-9]+$/)]],
  email : ['', [Validators.required,Validators.email]],
  agree : [(false)],
  contacttype : ['None'],
  message : ['',Validators.required]
  });
  this.feedbackForm.valueChanges.subscribe((data:any) => this.onValueChanged(data));

this.onValueChanged(); // (re)set validation messages now
}
  ngOnInit(): void {
  }
  public checkError = (controlName: string, errorName: string) => {
    return this.feedbackForm.controls[controlName].hasError(errorName);
  }

  onSubmit() {
    // console.warn(this.feedbackForm.value);
    // console.log(this.feedbackForm);
    // this.feedbackForm.reset();
    this.feedback = this.feedbackForm.value;
    console.log(this.feedback);
    this.feedbackForm.reset({
      firstname: '',
      lastname: '',
      telnum: '',
      email: '',
      agree: false,
      contacttype: 'None',
      message: ''
    });
    this.feedbackFormDirective.resetForm();
  }
  


  onValueChanged(data ?: any) {
    if (!this.feedbackForm) { return; }
    const form = this.feedbackForm;
    for ( const field in this.formErrors) {
      if (this.formErrors.hasOwnProperty(field)) {
        // clear previous error message (if any)
        (this.formErrors as any)[field] = '';
        const control = form.get(field);
        if (control && control.dirty && !control.valid) {
          const messages = (this.validationMessages as any)[field];
          for (const key in control.errors) {
            if (control.errors.hasOwnProperty(key)) {
              (this.formErrors as any)[field] += messages[key] + ' ';
            }
          }
        }
      }
    }
  }
}
