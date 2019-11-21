import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-filmdetailspage',
  templateUrl: './filmdetailspage.page.html',
  styleUrls: ['./filmdetailspage.page.scss'],
})
export class FilmdetailspagePage implements OnInit {

  film: any;
 
  constructor(private activatedRoute: ActivatedRoute, private http: HttpClient) { }
 
  ngOnInit() {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    this.http.get(`https://swapi.co/api/films/${id}`).subscribe(res => {
      this.film = res;
    });
  }

}
