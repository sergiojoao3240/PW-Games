import { Component, OnInit } from '@angular/core';
import { RequestMasterClass } from 'src/app/Models/masterclass.model';
import { MasterClassService } from '../master-class.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.css']
})
export class ClassComponent implements OnInit {

  id!: string | null;
  request!: RequestMasterClass;

  constructor(private masterService: MasterClassService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('_id');
    
    this.masterService.getAMaster(this.id!).subscribe(res => {
      this.request = {
        _id: `${res._id}`,
        title: `${res.title}`,
        description: `${res.description}`,
        image_dir: `${res.image_dir}`,
        time: `${res.time}`,
        date: `${res.date}`,
        place: `${res.place}`,
        link: `${res.link}`,
        year: `${res.year}`,
        __v: res.__v
      }
    })
}

}
