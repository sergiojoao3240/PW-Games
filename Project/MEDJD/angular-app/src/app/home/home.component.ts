import { Component, OnInit } from '@angular/core';
import { ResponseGames } from '../Models/games.model';
import { SearchService } from '../search/search.service';
import { ResponseMasterClasses } from '../Models/masterclass.model';
import { MasterClassService } from '../masterclass/master-class.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  responseGames!: ResponseGames;
  responseMasterClasses!: ResponseMasterClasses;


  constructor(private searchService:SearchService, private masterService:MasterClassService) { }

  ngOnInit(): void {
    this.searchService.getGames().subscribe(
      res => this.responseGames = res.slice(0, 4)
    )

    this.masterService.getMasters().subscribe(
      res => this.responseMasterClasses = res.slice(0, 2)
    )
  }



  // Voltar para o top
  topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

}


