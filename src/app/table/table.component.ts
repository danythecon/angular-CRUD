import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { TheConService } from '../the-con.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  carView : any= {}
  carId = 0
  @Input () deleteCar
  @Input() tableData = [];
  @Output() proba = new EventEmitter();
  @Output() delete = new EventEmitter();
  status = true
  view = false
  // data = {}
  test = 'asta e un test'
  esteGata = false
  constructor(private thecon: TheConService) { }

  ngOnInit(): void {
    
    console.log(this.status)
  }
  ngOnChanges(changes: SimpleChanges){
    this.tableData = changes.tableData.currentValue
    console.log(this.view)
    console.log(changes.tableData, 'asta vine din changes')
  }
 
  
  onDelete(e){
    //this.carId = parseInt(e.target.parentNode.childNodes[0].innerText);
    let numar = parseInt(e.target.parentNode.childNodes[0].innerText);
    this.thecon.deleteCar(numar).subscribe((response : any)=>{
     if(response.success){
       this.thecon.cars().subscribe((response : any) => this.tableData = response)
     }
      console.log(response)})
    console.log(this.tableData) 
  }
  onUpdate(e){
    //this.status = !this.status  
    if(this.status){
      let brand = e.target.parentNode.childNodes[1].innerHTML = '<input />'
      let color = e.target.parentNode.childNodes[2].innerHTML = '<input />'
      let cost : any = e.target.parentNode.childNodes[3].innerHTML = '<input />'
      console.log(this.status, 'asa vine din primul if ')
    }
    
    if(!this.status){
      let id = parseInt(e.target.parentNode.childNodes[0].innerText);
      let brand = e.target.parentNode.childNodes[1].childNodes[0].value;
      let color = e.target.parentNode.childNodes[2].childNodes[0].value;
      let cost = parseInt(e.target.parentNode.childNodes[3].childNodes[0].value);
     let data = {id, brand, color, cost}  
      this.thecon.update(data).subscribe((response : any)=> {
        if(response.success = true){
          this.thecon.cars().subscribe((response : any) => this.tableData = response)
        }
        console.log(response) 
      })  
      console.log(this.status , 'asa vine din al doilea if')  
    }
    this.status = !this.status
    console.log(this.status, 'asa se termina')   
  }
  
  onView(e){
    this.view = !this.view;
    if(this.view === true){
      this.carView = {
        brand:  e.target.parentNode.childNodes[1].childNodes[0].textContent,
        color:  e.target.parentNode.childNodes[2].childNodes[0].textContent,
        cost:  e.target.parentNode.childNodes[3].childNodes[0].textContent
      }
    }
  }

}
