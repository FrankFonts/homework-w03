import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-timezone',
  templateUrl: './timezone.component.html',
  styleUrls: ['./timezone.component.scss'],
})
export class TimezoneComponent implements OnInit {
  @Input() thisTimeZone: string = '';
  @Input() selectedTimeZone: string = '';
  @Input() timeZones: Array<Object> = [];

  timeInTimeZone: string = '';

  @Output() timeZoneChange = new EventEmitter<string>();

  isSelectedTimeZone() {
    return this.thisTimeZone === this.selectedTimeZone;
  }

  selectAsCurrentTimeZone(timeZone: string) {
    this.timeZoneChange.emit(timeZone);
  }

  changeTimeZone(timeZone: string) {
    this.thisTimeZone = timeZone;
    this.timeInTimeZone = this.calculateTimeInTimeZone(this.thisTimeZone);
  }

  constructor() {}

  ngOnInit(): void {
    this.timeInTimeZone = this.calculateTimeInTimeZone(this.thisTimeZone);
  }

  calculateTimeInTimeZone(timeZone: string) {
    return new Date().toLocaleString('en-US', {
      timeZone: timeZone,
    });
  }

  refreshTime() {
    this.timeInTimeZone = this.calculateTimeInTimeZone(this.thisTimeZone);
  }
}
