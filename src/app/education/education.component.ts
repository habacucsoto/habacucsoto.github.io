import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent {
  education : Array<any> = [];
  ngOnInit() : void {
    let education1 = {
      fecha: "2022-Actualmente",
      ubicacion: "Ixtac, Ver.",
      grado: "Ingenieria de Software",
      escuela: "UV"
    };
    let education2 = {
      fecha: "2024",
      ubicacion: "Córdoba, Ver.",
      grado: "Bootcamp Ciencia de Datos",
      escuela: "CodigoFacilito"
    };
    this.education.push(education1);
    this.education.push(education2);
    console.log(this.education);
  }
}
