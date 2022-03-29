import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Person } from '../person';
import { PersonService } from '../person.service';


@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  persons!: Person[];
  email: string;
  

  constructor( private personService: PersonService,
                private router:Router) { }

  ngOnInit(): void {
    this.listPersons();
  }

  listPersons() {
    this.personService.getPersons().subscribe(
      data => {
        this.persons = data;
      }
    )
  }

  updatePerson(id: number){
    this.router.navigate(['update-person' ,id]);
  }

  deletePerson(id:number){
    this.personService.deletePerson(id).subscribe(
      data => {
        this.listPersons();

      }
    )
  }

  findUserByEmailOrName(input:string){
    this.personService.getPersonByEmailOrName(input).subscribe(
      data => {
        this.persons = data;
      }
    )
  }

}

