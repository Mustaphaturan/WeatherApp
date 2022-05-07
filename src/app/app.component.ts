import { Component, OnInit } from '@angular/core';
import { WeatherData } from './models/weathermodel';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private weatherService: WeatherService) {

  }

  cityName: string = 'istanbul';

  weatherData?: WeatherData;

  ngOnInit(): void {
  
  }
onSubmit(){
  this.getWeatherData(this.cityName);
  this.cityName = '';

}
private getWeatherData(cityName: string) {
  this.weatherService.getWeatherData(cityName)
  .subscribe({
    next: (response) => {
      this.weatherData = response;
      console.log(response);
    }
  });
}
}
