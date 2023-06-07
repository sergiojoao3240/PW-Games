import { Component, OnInit } from '@angular/core';
import { SubjectService } from './subject.service';
import { ResponseSubjects } from '../Models/subject.model';

@Component({
  selector: 'app-curriculum',
  templateUrl: './curriculum.component.html',
  styleUrls: ['./curriculum.component.css']
})
export class CurriculumComponent implements OnInit {

  responseSubjects!: ResponseSubjects;

  constructor(private subjectService:SubjectService) { }

  ngOnInit(): void {
    this.subjectService.getSubjects().subscribe(
      res => this.responseSubjects = res
    )
  }

}
