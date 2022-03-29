import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Person } from '../person';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-create-person',
  templateUrl: './create-person.component.html',
  styleUrls: ['./create-person.component.css']
})
export class CreatePersonComponent implements OnInit {

  person: Person = new Person();

  constructor(private personService: PersonService,
              private router: Router) { }

  ngOnInit(): void {
  }

  savePerson(){
    this.personService.addPerson(this.person).subscribe(
      data => {
        console.log(data);
        this.goToPersons();
      }
    )
  }

  goToPersons(){
    this.router.navigate(['/persons'])
  }

  onSubmit(){
    console.log(this.person);
    this.savePerson();
  }
}
