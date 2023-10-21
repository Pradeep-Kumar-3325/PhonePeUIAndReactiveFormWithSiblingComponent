import { Component, EventEmitter,  Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-app-form',
  templateUrl: './app-form.component.html',
  styleUrls: ['./app-form.component.css']
})
export class AppFormComponent {
  @Output() emitter:EventEmitter<any> 
  = new EventEmitter<any>(); 

  profileForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: [''],
    emailId: ['', Validators.email],
    address: this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      zip: ['']
    }),
  });
  
  get emailid() { return this.profileForm.get('emailId');}

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
    this.emitter.emit(this.profileForm.value); 
  }

  constructor(private fb: FormBuilder) { }
}
