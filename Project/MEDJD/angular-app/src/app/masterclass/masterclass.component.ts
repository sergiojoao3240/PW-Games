import { Component, OnInit } from '@angular/core';
import { ResponseMasterClasses } from '../Models/masterclass.model';
import { MasterClassService } from './master-class.service';

@Component({
  selector: 'app-masterclass',
  templateUrl: './masterclass.component.html',
  styleUrls: ['./masterclass.component.css']
})
export class MasterclassComponent implements OnInit {

  responseMasterClasses!: ResponseMasterClasses;

  constructor(private masterService:MasterClassService) { }

  ngOnInit(): void {
    this.masterService.getMasters().subscribe(
      res => this.responseMasterClasses = res
    )
  }

}
