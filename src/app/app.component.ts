import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  date: any = null;
  fecha: any = null;
  fecha2: any = null;
  host0: any = null;
  host1: any = null;
  host2: any = null;
  datos0: any = null;
  datos1: any = null;
  datos2: any = null;
  name: any = null;
  code: any = null;
  author: any = null;
  status: any = null;
  sum: any = null;
  count: any = null;
  url1: string = '';
  url2: string = '';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.host0 = window.location.hostname;

    this.date = new Date().toLocaleString();
    this.url1 = `http://${window.location.hostname}:30007/`;
    this.http.get<any>(this.url1).subscribe(data1 => {
      this.datos1 = data1;
      this.host1 = this.datos1.hostName;
      this.name = this.datos1.name;
      this.code = this.datos1.code;
      this.sum = this.datos1.sum;
      this.count = this.datos1.count;
      this.fecha = new Date(this.datos1.dateAndtime.replace(/(\d{2})\/(\d{2})\/(\d{4})/, '$2/$1/$3'));;
    });
    this.url2 = `http://${window.location.hostname}:30008/`;
    this.http.get<any>(this.url2).subscribe(data2 => {
      this.datos2 = data2;
      this.author = this.datos2.author;
      this.status = this.datos2.state;
      this.host2 = this.datos2.hostName;
      this.fecha2 = new Date(this.datos2.dateAndtime.replace(/(\d{2})\/(\d{2})\/(\d{4})/, '$2/$1/$3'));;
    });
  }
}
