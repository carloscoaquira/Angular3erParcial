import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  peliculasEnCine:any;
  peliculasEstreno:any;
  constructor() { }

  ngOnInit(): void {

    setTimeout(()=>{
      this.peliculasEnCine=[{
        titulo:'Titanic',
        fecha:new Date(),
        Precio:1234.67,
        poster:'https://static.dw.com/image/59775562_303.jpg'
      },
      {
        titulo:'Rambo I',
        fecha:new Date(),
        Precio:1234.68,
        poster:'https://m.media-amazon.com/images/M/MV5BODBmOWU2YWMtZGUzZi00YzRhLWJjNDAtYTUwNWVkNDcyZmU5XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_.jpg'
      },{
        titulo:'Rocky',
        fecha:new Date(),
        Precio:1234.69,
        poster:'https://upload.wikimedia.org/wikipedia/en/5/53/Rocky_balboa.jpeg'
      }
      ]      
    },500)

    setTimeout(()=>{
      this.peliculasEstreno=[{
        titulo:'Titanic 2023',
        fecha:new Date(),
        Precio:1234.67
      },
      {
        titulo:'Rambo I 2023',
        fecha:new Date(),
        Precio:1234.68
      },{
        titulo:'Rocky 2023',
        fecha:new Date(),
        Precio:1234.69
      }
      ]      
    },500)


  }

}
