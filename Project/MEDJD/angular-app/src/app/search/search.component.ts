import { Component, OnInit } from '@angular/core';
import { ResponseGames } from '../Models/games.model';
import { SearchService } from './search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  responseGames!: ResponseGames;

  constructor(private searchService:SearchService) { }

  ngOnInit(): void {
    this.searchService.getGames().subscribe(
      res => this.responseGames = res
    )
  }

  // Voltar para o top
  topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

}
