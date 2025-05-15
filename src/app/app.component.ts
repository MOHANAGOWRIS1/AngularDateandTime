import { Component } from '@angular/core';
import { TimezoneDisplayComponent } from "./components/timezone-display/timezone-display.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TimezoneDisplayComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Country Time Viewer';
}
