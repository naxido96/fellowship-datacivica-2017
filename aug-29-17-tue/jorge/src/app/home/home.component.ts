import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  breeds: object;

  constructor(private http: Http) { }

  getBreeds() {
    this.http
      .get('https://dog.ceo/api/breeds/list')
      .subscribe(
        (res: Response) => this.breeds = res.json()
      );
  }

  ngOnInit() {
    this.getBreeds();
  }

}
