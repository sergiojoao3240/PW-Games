import { Component, OnInit, Renderer2, ElementRef } from '@angular/core';
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

  constructor(private masterService: MasterClassService, private route: ActivatedRoute, private renderer: Renderer2, private el: ElementRef) { }

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

  showOverlay() {
    const overlayElement = this.el.nativeElement.querySelector('#overlay');
    this.renderer.setStyle(overlayElement, 'display', 'block');
  }

  hideOverlay() {
    const overlayElement = this.el.nativeElement.querySelector('#overlay');
    this.renderer.setStyle(overlayElement, 'display', 'none');
  }

  delete(){
    this.masterService.deleteMaster(this.id!).subscribe(res=>{
      alert("Removido com sucesso!")
    })
  }

  save(){
    this.masterService.updateMaster(this.id!, this.request).subscribe(res =>{
      alert("Classe atualizada com sucesso!");
      this.hideOverlay();
    });
  }
}
