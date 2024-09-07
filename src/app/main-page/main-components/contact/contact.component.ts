import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  contactForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
      privacy: [false, Validators.requiredTrue],
    });
  }

  isInvalid(controlName: string): boolean {
    const control = this.contactForm.get(controlName);
    return !!control && control.invalid && control.touched;
  }

  toggleDisplay() {
    const unchecked = document.querySelector('.unchecked-checkbox') as HTMLElement;
    const checked = document.querySelector('.checked-checkbox') as HTMLElement;
    const isChecked = this.contactForm.get('privacy')?.value;

    
    if (isChecked) {
      unchecked.style.display = 'none';
      checked.style.display = 'block';
    } else {
      unchecked.style.display = 'block';
      checked.style.display = 'none';
    }
  }

  isCheckedVisible(): boolean {
    const checked = document.querySelector('.checked-checkbox') as HTMLElement;
    return checked?.style.display === 'block';
  }

  onSubmit() {
    if (this.contactForm.valid) {
      console.log('Form submitted:', this.contactForm.value);
    } else {
      this.contactForm.markAllAsTouched();
    }
  }
}