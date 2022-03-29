import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Person } from '../person';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-update-person',
  templateUrl: './update-person.component.html',
  styleUrls: ['./update-person.component.css']
})
export class UpdatePersonComponent implements OnInit {

  person: Person = new Person();
  id:number;

  constructor(private personService: PersonService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.personService.getPersonsById(this.id).subscribe(
      data => {
        this.person =data;
      }
    )
  }

  onSubmit(){
    this.personService.updatePerson(this.id, this.person).subscribe(
      data => {
        this.goToPersons();
      }
    )
  }

  goToPersons(){
    this.router.navigate(['/persons'])
  }

}
