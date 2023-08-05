import { Component } from '@angular/core';

@Component({
  selector: 'app-meeting',
  templateUrl: './meeting.component.html',
  styleUrls: ['./meeting.component.css']
})
export class MeetingComponent {
  meetingTopic: string;
  numberOfPeople: number;
  startTimeDate: string;
  startTimeTime: string;
  amPm: string;

  constructor() {
    this.meetingTopic = '';
    this.numberOfPeople = 0;
    this.startTimeDate = '';
    this.startTimeTime = '';
    this.amPm = 'AM';
  }

  createMeeting(): void {
    // Here, you can implement the logic to handle the meeting creation form submission.
    // For example, you can send the meeting data to a backend API for processing.
    // Once the meeting is created, you can display a success message or navigate to another page.

    // For demo purposes, let's simply log the meeting details.
    console.log('Meeting Topic:', this.meetingTopic);
    console.log('Number of People:', this.numberOfPeople);
    console.log('Start Date:', this.startTimeDate);
    console.log('Start Time:', this.startTimeTime);
    console.log('AM/PM:', this.amPm);

    // For this example, no redirection is required after creating the meeting.
    // You can add additional logic as per your application's requirements.
  }
}