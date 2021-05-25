import { ContactType } from './../shared/feedback';
import { Component, OnInit,ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { Feedback } from '../shared/feedback';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit  {
 
  contactType = ContactType;

  constructor(private fb: FormBuilder) { }
  feedbackForm = this.fb.group({
  firstname : new FormControl('', Validators.required),
  lastname : new FormControl('', Validators.required),
  telnum : new FormControl('', Validators.required),
  email : new FormControl('', Validators.required),
  agree : new FormControl(false),
  contacttype : new FormControl('None'),
  message : new FormControl('',Validators.required)
  });
  ngOnInit(): void {
  }
  public checkError = (controlName: string, errorName: string) => {
    return this.feedbackForm.controls[controlName].hasError(errorName);
  }

  onSubmit() {
    console.warn(this.feedbackForm.value);
    console.log(this.feedbackForm);
    this.feedbackForm.reset();
  }
}
