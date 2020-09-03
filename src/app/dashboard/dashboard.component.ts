import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  
  readonly ROOT_URL = 'https://n0d3.di-marco.net/pms.api/metrics';  // ROOT_URL est de type string
  results: any;
  interval: number  = 1 * 1000; // tous les secondes - a changer
  heure: number;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {

    /**
     * equivaent d'un curl lancé tous les `repeat` temps
     */
    setInterval(() => {
      this.http.get(this.ROOT_URL).subscribe(result => this.results = result);
      this.heure = Date.now(); // pas inportant
      
    }, this.interval )

  }
  
}