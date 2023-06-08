import { Component, OnInit } from '@angular/core';
import { RequestGame } from 'src/app/Models/games.model';
import { SearchService } from '../search.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  id!: string | null;
  request!: RequestGame;

  constructor(private searchService: SearchService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('_id');
    this.searchService.getAGame(this.id!).subscribe(res => {
      this.request = {
        _id: `${res._id}`,
        name: `${res.name}`,
        description: `${res.description}`,
        image_dir: `${res.image_dir}`,
        video_dir: `${res.video_dir}`,
        link: `${res.link}`,
        date: `${res.date}`,
        __v: res.__v,
        authors: `${res.authors}`
      }
    })
  }

  // Voltar para o top
  topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }


}
