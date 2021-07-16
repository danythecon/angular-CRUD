import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TheConService {

  constructor(private http: HttpClient) { }
 
  cars(){
    return this.http.get('/api/getAllCars')
  }
  createCar(data: any){
    return this.http.post('/api/createCar', data)
  }
  update(data: any){
    return this.http.put('/api/updateCar', data)
  }
  deleteCar(data: any){
    return this.http.delete(`/api/deleteCar?carId=${data}` )
  }
}
