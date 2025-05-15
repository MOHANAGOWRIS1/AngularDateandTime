import { Injectable } from '@angular/core';
import moment from 'moment-timezone';

@Injectable({
  providedIn: 'root'
})
export class TimezoneService {
  private timezones = [
    { name: 'United States (New York)', zone: 'America/New_York' },
    { name: 'United States (Los Angeles)', zone: 'America/Los_Angeles' },
    { name: 'United Kingdom (London)', zone: 'Europe/London' },
    { name: 'Japan (Tokyo)', zone: 'Asia/Tokyo' },
    { name: 'Australia (Sydney)', zone: 'Australia/Sydney' },
    { name: 'India (New Delhi)', zone: 'Asia/Kolkata' },
    { name: 'Germany (Berlin)', zone: 'Europe/Berlin' },
    { name: 'Brazil (São Paulo)', zone: 'America/Sao_Paulo' },
    { name: 'Russia (Moscow)', zone: 'Europe/Moscow' },
    { name: 'China (Beijing)', zone: 'Asia/Shanghai' },
    { name: 'South Africa (Johannesburg)', zone: 'Africa/Johannesburg' },
    { name: 'Canada (Toronto)', zone: 'America/Toronto' },
    { name: 'Singapore', zone: 'Asia/Singapore' },
    { name: 'United Arab Emirates (Dubai)', zone: 'Asia/Dubai' }
  ];

  constructor() { }

  getTimezones() {
    return this.timezones;
  }

  getCurrentTimeInZone(timezone: string): string {
    return moment().tz(timezone).format('YYYY-MM-DD HH:mm:ss');
  }
}