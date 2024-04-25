import { Injectable } from '@angular/core';
import { Cita } from '../modelo/cita';

@Injectable({
  providedIn: 'root'
})
export class CitaService {

  private _citas:Cita[] = [
    new Cita (1, ' Lo peor que hacen los malos es obligarnos a dudar de los buenos.', 'Jacinto Benavente'),
    new Cita (2, 'Cada día sabemos más y entendemos menos.', 'Albert Einstein'),
    new Cita (3, 'La medida del amor es amar sin medida.', 'San Agustín'),
    new Cita (4, 'El dinero no puede comprar la vida.', 'Bob Marley'),
    new Cita (5, 'Ningún hombre es lo bastante bueno para gobernar a otros sin su consentimiento.', 'Abraham Lincoln'),
    new Cita (6, 'Vivir sola es como estar en una fiesta donde nadie te hace caso.', 'Marilyn Monroe'),
    new Cita (7, 'Pienso, luego existo.', 'René Descartes'),
    new Cita (8, 'Lo que no te mata, te hace más fuerte.', 'Friedrich Nietzsche'),
    new Cita (9, 'La peor experiencia es la mejor maestra.', 'Kovo'),
    new Cita (10, 'Hace falta toda una vida para aprender a vivir.', 'Séneca'),
  ]

  constructor() {
   }

  agregarCita(cita: Cita) {
    cita.id =Date.now()
    this._citas.push(cita);
  }

  getCitas(): Cita[]  {
    console.dir(this._citas)
    return this._citas
  }

  private getIndice(cita:Cita):number {
    return this._citas.findIndex(citita => citita.id === cita.id)
  }

  deleteCita(cita:Cita) {
    const indice = this.getIndice(cita)
    if( indice >= 0) {
      this._citas.splice(indice, 1)
    }    
  }

  editar(cita:Cita) {
    const indice = this.getIndice(cita)
    if( indice >= 0) {
      this._citas[indice] = cita
    }    
  }

  getRandomCita() {
    const randomIndex = Math.floor(Math.random() * this._citas.length);
    return {
      ...this._citas[randomIndex]
    };
  }
  
}
