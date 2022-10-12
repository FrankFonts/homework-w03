import { Component } from '@angular/core';
import { timeZoneList } from './timeZoneList';

interface TimeZone {
  timeZone: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Timezones Homework Week 3';
  numberOfTimeZones = 0;
  maxNumberOfTimeZones = 5;
  maxNumberOfTimeZonesReached = false;
  timeZoneList = timeZoneList;

  addTimeZone() {
    if (!this.maxNumberOfTimeZonesReached) {
      this.timeZoneArray.push({
        timeZone: timeZoneList[0],
      });

      this.numberOfTimeZones++;
      this.maxNumberOfTimeZonesReached =
        this.numberOfTimeZones === this.maxNumberOfTimeZones;
    }
  }

  timeZoneArray: Array<TimeZone> = [];

  selectedTimeZone = '';

  setSelectedTimeZone(timeZone: string) {
    this.selectedTimeZone = timeZone;
    console.log('app currentTimezone is' + this.selectedTimeZone);
  }
}
