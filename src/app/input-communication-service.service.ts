import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InputCommunicationServiceService {

  private buttonClickSubject = new Subject<string>();

  buttonClick$ = this.buttonClickSubject.asObservable();

  emitButtonClick(msg: string): void {
    this.buttonClickSubject.next(msg);
  }

}
