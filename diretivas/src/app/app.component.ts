import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title: string ="";
  
  //implementação ngIf

  showMe: boolean;

}







  //implemntação da diretiva *ngFor
  /*//json object
  movies: Movie[] =[

    {title:'Zootopia',director:'Byron Howard, Rich Moore',cast:'Idris Elba, Ginnifer Goodwin, Jason Bateman',releaseDate:'March 4, 2016'},
    {title:'Batman v Superman: Dawn of Justice',director:'Zack Snyder',cast:'Ben Affleck, Henry Cavill, Amy Adams',releaseDate:'March 25, 2016'},
    {title:'Captain American: Civil War',director:'Anthony Russo, Joe Russo',cast:'Scarlett Johansson, Elizabeth Olsen, Chris Evans',releaseDate:'May 6, 2016'},
    {title:'X-Men: Apocalypse',director:'Bryan Singer',cast:'Jennifer Lawrence, Olivia Munn, Oscar Isaac',releaseDate:'May 27, 2016'},
    {title:'Warcraft',director:'Duncan Jones',cast:'Travis Fimmel, Robert Kazinsky, Ben Foster',releaseDate:'June 10, 2016'},
    {title:'Avengers: Age of Ultron',director:'Joss Whedon',cast:'Robert Downey Jr., Chris Evans, Mark Ruffalo',releaseDate:'May 1, 2015'},
  
  ]

  CompositeKey (index,item) {

    return item.title + item.director ;

  }
}*/

/*class Movie {
  title : string;
  director : string;
  cast : string;
  releaseDate : string;
}*/

//implemntação diretiva ngSwitch
  //num: number = 0;

