import { Component, OnInit, Input } from '@angular/core';
import { Usuario } from '../models/usuario';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-mensaje-respuesta',
  templateUrl: './mensaje-respuesta.component.html',
  styleUrls: ['./mensaje-respuesta.component.css']
})
export class MensajeRespuestaComponent implements OnInit {
  @Input() entrada: number;
  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
    console.log(this.entrada)
  }

}
