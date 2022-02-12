import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CommonService {
  private data = new BehaviorSubject(0);
  data$ = this.data.asObservable();

  constructor() { }
  changeData(data: number) {
    console.log(data + "data s")
    this.data.next(data)
  }

}
