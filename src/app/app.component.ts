import { Component, Input } from '@angular/core';
import {HttpClient} from '@angular/common/http' 
import { Observable } from 'rxjs';
import { map } from 'rxjs';
import { API_key } from './config';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  weatherData!:any;
  api_key:string = API_key
  city :string = ''
  

   
 
  constructor(private http:HttpClient){


  }
  getWeather(){
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.api_key}`
    this.http.get(URL).pipe(map(res=>{return res}
     )).subscribe(data=>this.weatherData = data)
    
    console.log(URL);
    
    
    
    
  }
}
