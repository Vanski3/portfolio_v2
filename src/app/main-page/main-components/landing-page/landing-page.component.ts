import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';

import { HeaderComponent } from '../../header/header.component';
import { CommonModule } from '@angular/common';

gsap.registerPlugin(TextPlugin);

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [HeaderComponent, CommonModule],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss',
})
export class LandingPageComponent implements OnInit {
  @ViewChild('headline', { static: true }) headline!: ElementRef;

  // GSAP ANIMATION FÜR H2

  ngOnInit(): void {
    // Startwerte für "Vanessa" und "Sachs"
    let vanessaObj = { value: 0 };
    let sachsObj = { value: 0 };

    // Animation für "Vanessa"
    gsap.to(vanessaObj, {
      duration: 2, // Zeit für das Hochzählen
      value: 7, // Anzahl der Buchstaben in "Vanessa"
      ease: 'power1.inOut',
      onUpdate: () => {
        this.updateVanessa(vanessaObj.value);
      },
    });

    // Animation für "Sachs"
    gsap.to(sachsObj, {
      duration: 2, // Zeit für das Hochzählen
      value: 5, // Anzahl der Buchstaben in "Sachs"
      ease: 'power1.inOut',
      onUpdate: () => {
        this.updateSachs(sachsObj.value);
      },
      onComplete: () => {
        this.ensureFinalText(); // Sicherstellen, dass der finale Text angezeigt wird
      },
    });
  }

  // Methode zur Aktualisierung der Überschrift für "Vanessa"
  updateVanessa(vanessaValue: number): void {
    const vanessaText = this.numberToTextPart(
      Math.floor(vanessaValue),
      'Vanessa'
    );
    const currentText =
      this.headline.nativeElement.innerHTML.split(' ')[1] || ''; // Holt den aktuellen Text von "Sachs"
    this.headline.nativeElement.innerHTML = `${vanessaText} ${currentText}`;
  }

  // Methode zur Aktualisierung der Überschrift für "Sachs"
  updateSachs(sachsValue: number): void {
    const sachsText = this.numberToTextPart(Math.floor(sachsValue), 'Sachs');
    const currentText =
      this.headline.nativeElement.innerHTML.split(' ')[0] || ''; // Holt den aktuellen Text von "Vanessa"
    this.headline.nativeElement.innerHTML = `${currentText} ${sachsText}`;
  }

  // Methode zur Umwandlung eines Teils der Zahl in Text
  numberToTextPart(num: number, text: string): string {
    if (num < text.length) {
      return this.generateRandomBinary(text.length); // Zufällige Binärsequenz anzeigen
    } else {
      return text.substring(0, num); // Sobald num >= text.length ist, zeige den Buchstaben an
    }
  }

  // Generiert eine zufällige Binärsequenz der gleichen Länge wie der Text
  generateRandomBinary(length: number): string {
    let binaryString = '';
    for (let i = 0; i < length; i++) {
      binaryString += Math.random() > 0.5 ? '1' : '0';
    }
    return binaryString;
  }

  // Sicherstellen, dass der finale Text korrekt angezeigt wird
  ensureFinalText(): void {
    if (this.headline) {
      this.headline.nativeElement.innerHTML = 'Vanessa Sachs';
    }
  }
}
