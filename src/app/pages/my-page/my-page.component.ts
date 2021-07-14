import { Component, OnInit, Input} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { NgForm, NumberValueAccessor } from '@angular/forms';
import { TheConService } from 'src/app/the-con.service';
import { FormsModule } from '@angular/forms';
import {interval} from 'rxjs';
import { ConstantPool } from '@angular/compiler';
@Component({
  selector: 'app-my-page',
  templateUrl: './my-page.component.html',
  styleUrls: ['./my-page.component.scss']
})
export class MyPageComponent implements OnInit {
  
  
  theConData : any = [];
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
    // interval(1000).subscribe(count => {
    //   console.log(count)
    // })
  }
  
 
  onSubmit(postForm: NgForm){
    this.thecon.createCar(postForm.value).subscribe((response : any) => {
      
      if(response.success === true){
        this.success = response.success
      }  
    })  
  }
  getAllCars(){
    this.thecon.cars().subscribe((response : any)=> {
      this.success = response.success
      // if(response.success === true){
         this.theConData = response
      // }
      // else {
      //   console.log('test')
      // }
        this.success = response.success
        console.log('test')
     //  console.log(this.success)
   })
   console.log(this.theConData)
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
}
