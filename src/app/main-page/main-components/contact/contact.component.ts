import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http'; 
import { CommonModule } from '@angular/common';
import { TranslationService } from '../../../translation.service';
import { TranslateModule } from '@ngx-translate/core';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule, TranslateModule, RouterLink, RouterModule], 
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  contactForm: FormGroup;
  messageSent = false;

  constructor(private fb: FormBuilder, private http: HttpClient) {
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

  isValid(controlName: string): boolean {
    const control = this.contactForm.get(controlName);
    return !!control && control.valid && control.touched;
  }

  toggleDisplay() {
    const privacyControl = this.contactForm.get('privacy');
    if (privacyControl) {
      privacyControl.markAsTouched(); 
    }
  }

  onSubmit() {
    if (this.contactForm.valid) {
      const formData = this.contactForm.value;

      this.http.post('https://vanessa-sachs.com/sendMail.php', formData, { responseType: 'text' })
        .subscribe({
          next: (response) => {
            this.contactForm.reset();
            this.messageSent = true;

            setTimeout(() => {
              this.messageSent = false;
            }, 5000);
          },
          error: (error) => {
            console.error('Error while sending request: ', error);
            console.error('Status code: ', error.status);
            console.error('Error message: ', error.message);
          }
        });
    } else {
      this.contactForm.markAllAsTouched();
    }
  }

  langBoolean = inject(TranslationService);
}
