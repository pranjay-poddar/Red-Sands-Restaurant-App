import { FormControl } from '@angular/forms';

export class Feedback{
    firstname = new FormControl('');
    lastname = new FormControl('');
    telnum = new FormControl(0);
    email= new FormControl('');
    agree = new FormControl();
    contacttype = new FormControl('');
    message= new FormControl('');
 
    }

export const ContactType = ['None','Tel','Email'];