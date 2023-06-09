import { Component, OnInit, Renderer2, ElementRef } from '@angular/core';
import { ResponseGames } from '../Models/games.model';
import { SearchService } from './search.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  responseGames!: ResponseGames;
  numResults: number = 0;

  constructor(private searchService:SearchService, private renderer: Renderer2, private el: ElementRef) { }

  ngOnInit(): void {
    this.searchService.getGames().subscribe(
      res => this.responseGames = res
    )

    this.el.nativeElement.querySelector('.soma').innerText = '';

  }



  // Voltar para o top
  topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }


 // Função para exibir o overlay de pesquisa
  showOverlay() {
    const overlayElement = this.el.nativeElement.querySelector('#overlay');
    this.renderer.setStyle(overlayElement, 'display', 'block');
  }

  hideOverlay() {
    const overlayElement = this.el.nativeElement.querySelector('#overlay');
    this.renderer.setStyle(overlayElement, 'display', 'none');
  }

  searchElements() {
    const searchValue = this.el.nativeElement.querySelector('#searchInput').value.toLowerCase();
    const gameElements = this.el.nativeElement.getElementsByClassName('game-fluid');

    let count = 0;

    for (let i = 0; i < gameElements.length; i++) {
      const titleElement = gameElements[i].querySelector('.title');
      const title = titleElement.innerText.toLowerCase();

      if (title.includes(searchValue)) {
        this.renderer.setStyle(gameElements[i], 'display', 'block');
        count++;
      } else {
        this.renderer.setStyle(gameElements[i], 'display', 'none');
      }
    }

     this.el.nativeElement.querySelector('.soma').innerText = count + ' resultado(s)';
  this.numResults = count;

    this.hideOverlay();
  }
}
