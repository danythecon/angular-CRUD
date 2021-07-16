import { Component, OnInit, Input, SimpleChanges, OnChanges} from '@angular/core';
import { TableComponent } from 'src/app/table/table.component';
import {HttpClient} from '@angular/common/http';
import { NgForm, NumberValueAccessor } from '@angular/forms';
import { TheConService } from 'src/app/the-con.service';
import { FormsModule } from '@angular/forms';
import {interval , Observable} from 'rxjs';

@Component({
  selector: 'app-my-page',
  templateUrl: './my-page.component.html',
  styleUrls: ['./my-page.component.scss']
})
export class MyPageComponent implements OnInit, OnChanges {
  

  //carId = this.proba
  theConData : any = [];
  childData : any = {}
  success = false;
  esteGata = false
  carBrand :string = '';
  carColor : string = '';
  carCost : string = '';
  constructor(private thecon: TheConService) { 
    // console.log('page is loaded')
    // this.getAllCars()
  }
  
  ngOnInit(){ 
    this.getAllCars()
    //console.log(this.carId)
  }
  ngOnChanges(count : SimpleChanges){
    console.log(count, 'this is from life cycle method of changes')
  }

 
  onSubmit(postForm: NgForm){
    this.thecon.createCar(postForm.value).subscribe((response : any) => {
      this.esteGata = response.success
      console.log(response, 'sa creat o noua masina', this.success, 'sa schimbat boolean')
      this.thecon.cars().subscribe((response: any) => this.theConData = response) 
     
    }) 
    setInterval(() => {
      this.esteGata = false
    }, 5000)
  }
  getAllCars(){
    this.thecon.cars().subscribe((response : any)=> {
      this.success = true
         this.theConData = response
        console.log('test get all cars', response)
   })
 }
 delete(e){
  const id = parseInt(e.target.parentNode.childNodes[0].innerText);
  // const brand = e.target.parentNode.childNodes[1].innerText;
  // const color = e.target.parentNode.childNodes[2].innerText;
  // const price = parseInt(e.target.parentNode.childNodes[3].innerText);

  const data = id
  
  // console.log(data, e.target.parentNode.childNodes[1].innerText)
  this.thecon.deleteCar(data).subscribe(response => console.log(response))
  // this.ngOnInit()
   console.log(e)
 }


  thisIsATest(e : any){
    const newBrand = e.target.parentNode.childNodes[1].innerHTML = '<input />' 
    const newColor = e.target.parentNode.childNodes[2].innerHTML = '<input />'
    const newPrice = e.target.parentNode.childNodes[3].innerHTML = '<input />'
    this.esteGata = true
    console.log(this.esteGata)
  }
  testare(e){
    const id = parseInt(e.target.parentNode.childNodes[0].innerText);
    const brand = e.target.parentNode.childNodes[1].childNodes[0].value;
    const color = e.target.parentNode.childNodes[2].childNodes[0].value;
    const price = e.target.parentNode.childNodes[3].childNodes[0].value;

    const data = {
     id, brand, color, price
    }
    this.thecon.update(data).subscribe(response => console.log(response))  
  }
  // proba(valoare){
  //  console.log(valoare, 'asta e in parinte')
  // }
  giveFeedback(){
    if(this.esteGata === true){
      setTimeout(() => {
        this.esteGata = false
      }, 2000)
    }
  }
}
