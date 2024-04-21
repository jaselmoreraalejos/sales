import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@Component({
  selector: 'loading-bar',
  standalone: true,
  imports: [CommonModule, MatProgressBarModule],
  template: `
    <mat-progress-bar *ngIf="visible" color="warn" mode="indeterminate">
    </mat-progress-bar>
  `,
  styles: [],
})
export class LoadingBarComponent {
  @Input() visible: Boolean = true;
}
