import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { createInvalidDomainValidator } from './invalidEmailDomain';

const invalidEmailDomain = createInvalidDomainValidator(['abv.bg', 'yahoo.com'])

// Import Validators to validate form
// To use reactive forms we import a class - FormControl (create form controls and bind them to the individual fields)
// Done by using a directive called [formControl]
// We can also use a form group, for a related form fields, using FormGroup class /easily check the entire form/
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  contactForm = new FormGroup({
    // Form control accepts second argument, where we pass the validators; can be array for multiple
    senderName: new FormControl('', Validators.required), // <-- initial values
    senderEmail: new FormControl('', [Validators.required, Validators.email, invalidEmailDomain]),
    senderMessage: new FormControl('', [Validators.required, Validators.minLength(10)]) // at least 10 characters
  })

  // senderName = new FormControl('') // <-- initial values
  // senderEmail = new FormControl('')
  // senderMessage = new FormControl('')
  
  submitForm() {
    // dirty = is property changed
    // pristine is property not changed
    // we can mark a formfield as pristine or dirty
    // if (this.senderNameControl.dirty) alert('field changed')
    console.log('isValid', this.contactForm.valid)
    console.log(this.contactForm.value)
  }
}
