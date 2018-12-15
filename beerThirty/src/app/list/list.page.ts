import { Component, OnInit } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  // private selectedItem: any;
  // private icons = [
  //   'flask',
  //   'logo-bitcoin',
  //   'beer',
  //   'football',
  //   'basketball',
  //   'paper-plane',
  //   'american-football',
  //   'boat',
  //   'bluetooth',
  //   'build'
  // ];
  // public items: Array<{ title: string; note: string; icon: string }> = [];
  // constructor() {
  //   for (let i = 1; i < 11; i++) {
  //     this.items.push({
  //       title: 'Item ' + i,
  //       note: 'This is item #' + i,
  //       icon: this.icons[Math.floor(Math.random() * this.icons.length)]
  //     });
  //   }
  // }


  //URL created by combining api, call, and key
  private url = 'http://api.brewerydb.com/v2/styles/?key=d8ad31229f6bd38035d1acfec5c5943e';

  // public items: Array<{id: string; name: string}> = [];
  // constructor() {
  //   for (let i = 1; i < 14; i++) {
  //     this.items.push({
  //       id: get()
  //     })
  //   }
  // }


  items = [
    {
      'id': '1',
      'categoryId': '1',
      'name': "Classic English-Style Pale Ale",
    }
  ]

  constructor(private http: HTTP) { }

  ngOnInit() {
    this.http.get(this.url, {}, {})
      .then(response => {
        console.log('response', response);
        const data = JSON.parse(response.data);
        console.log('data: ', data);
        this.items = data.feed.results;
      })
      .catch(error => {
        console.log('error', error);
      });
  }
}