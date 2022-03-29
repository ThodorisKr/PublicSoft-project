import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Supplier } from '../supplier';
import { SupplierService } from '../supplier.service';

@Component({
  selector: 'app-create-supplier',
  templateUrl: './create-supplier.component.html',
  styleUrls: ['./create-supplier.component.css']
})
export class CreateSupplierComponent implements OnInit {

  supplier: Supplier = new Supplier();

  constructor(private supplierService: SupplierService,
              private router: Router) { }

  ngOnInit(): void {
  }

  saveSupplier(){
    this.supplierService.addSupplier(this.supplier).subscribe(
      data => {
        console.log(data);
        this.goToSuppliers();
      }
    )
  }

  goToSuppliers(){
    this.router.navigate(['/suppliers'])
  }

  onSubmit(){
    console.log(this.supplier);
    this.saveSupplier();
  }
}