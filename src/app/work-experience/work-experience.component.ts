import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-work-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './work-experience.component.html',
  styleUrl: './work-experience.component.css'
})
export class WorkExperienceComponent {
  workExperience : Array<any> = [];
  ngOnInit() : void {
    let work1 = {
      fecha: "2023-2024",
      ubicacion: "Córdoba, Ver.",
      puesto: "Técnico en computación",
      empresa: "Italy EB",
      logros : [
        { descripcion : "Automatización de procesos" },
        { descripcion : "Análisis de datos sobre ventas" }
      ]
    };
    let work2 = {
      fecha: "2022-2023",
      ubicacion: "Veracruz, Ver.",
      puesto: "Auxiliar de sistemas",
      empresa: "Impresos Servispeed",
      logros : [
        { descripcion : "Mantenimiento preventivo de equipos" },
        { descripcion : "Soporte técnico eficiente" }
      ]
    };
    this.workExperience.push(work1);
    this.workExperience.push(work2);
    console.log(this.workExperience);
  }
}
