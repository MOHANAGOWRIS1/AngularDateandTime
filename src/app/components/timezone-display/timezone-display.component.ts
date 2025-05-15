import { Component, OnInit, OnDestroy } from '@angular/core';
import { TimezoneService } from '../../services/timezone.service';
import { interval, Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface TimezoneInfo {
  name: string;
  zone: string;
  time: string;
}

@Component({
  selector: 'app-timezone-display',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './timezone-display.component.html',
  styleUrls: ['./timezone-display.component.css']
})
export class TimezoneDisplayComponent implements OnInit, OnDestroy {
  availableTimezones: { name: string, zone: string }[] = [];
  selectedTimezone: string = '';
  currentTime: string = '';
  private timeSubscription: Subscription | undefined;

  constructor(private timezoneService: TimezoneService) { }

  ngOnInit(): void {
    // Get available timezones
    this.availableTimezones = this.timezoneService.getTimezones();
    
    // Set default timezone (first in the list)
    if (this.availableTimezones.length > 0) {
      this.selectedTimezone = this.availableTimezones[0].zone;
      this.updateTime();
    }
    
    // Update time every second
    this.timeSubscription = interval(1000).subscribe(() => {
      this.updateTime();
    });
  }

  ngOnDestroy(): void {
    // Clean up subscription to prevent memory leaks
    if (this.timeSubscription) {
      this.timeSubscription.unsubscribe();
    }
  }

  onTimezoneChange(): void {
    this.updateTime();
  }

  private updateTime(): void {
    if (this.selectedTimezone) {
      this.currentTime = this.timezoneService.getCurrentTimeInZone(this.selectedTimezone);
    }
  }

  getSelectedTimezoneName(): string {
    const found = this.availableTimezones.find(tz => tz.zone === this.selectedTimezone);
    return found ? found.name : '';
  }
}


