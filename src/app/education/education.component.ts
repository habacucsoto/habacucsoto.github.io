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
      fecha: "2018-2022",
      ubicacion: "Ixtac, Ver.",
      grado: "maestria",
      escuela: "UV",
      logros : [
        { descripcion : "Construcción de un ERP en GCP" },
        { descripcion : "Creación de un cluster en hadoop y spark" }
      ]
    };
    let education2 = {
      fecha: "2014-2018",
      ubicacion: "Orizaba, Ver.",
      grado: "llicenciatura",
      escuela: "UV",
      logros : [
        { descripcion : "Construcción de un invernadero hidroponico" },
        { descripcion : "Creación de un dron autonomo" }
      ]
    };
    this.education.push(education1);
    this.education.push(education2);
    console.log(this.education);
  }
}
