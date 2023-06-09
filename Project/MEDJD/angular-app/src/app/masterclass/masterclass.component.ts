import { Component, OnInit, Renderer2, ElementRef } from '@angular/core';
import { RequestMasterClass, RequestMasterClassC, ResponseMasterClass, ResponseMasterClasses } from '../Models/masterclass.model';
import { MasterClassService } from './master-class.service';

@Component({
  selector: 'app-masterclass',
  templateUrl: './masterclass.component.html',
  styleUrls: ['./masterclass.component.css']
})
export class MasterclassComponent implements OnInit {

  responseMasterClasses!: ResponseMasterClasses;

  responseMasterClass!: ResponseMasterClass;

  request: RequestMasterClassC = {
    title: '',
    description: '',
    image_dir: '',
    time: '',
    date: '',
    place: '',
    link: '',
    year: '',
  }


  constructor(private masterService:MasterClassService, private renderer: Renderer2, private el: ElementRef) { }

  ngOnInit(): void {
    this.masterService.getMasters().subscribe(
      res => this.responseMasterClasses = res
    )
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

  save(){
    this.masterService.createMaster(this.request).subscribe(res =>{
      this.responseMasterClass = res
    })
    window.location.reload();
    this.hideOverlay();
  }


  // Voltar para o top
  topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

}
