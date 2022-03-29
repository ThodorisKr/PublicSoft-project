import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Supplier } from '../supplier';
import { SupplierService } from '../supplier.service';

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.css']
})
export class SupplierComponent implements OnInit {

  suppliers!: Supplier[];

  constructor(private supplierService: SupplierService,
    private router: Router) { }

  ngOnInit(): void {
    this.listSuppliers();
  }

  listSuppliers() {
    this.supplierService.getSuppliers().subscribe(
      data => {
        this.suppliers = data;
      }
    )
  }

  updateSupplier(id: number) {
    this.router.navigate(['update-supplier', id]);
  }

  deleteSupplier(id: number) {
    this.supplierService.deleteSupplier(id).subscribe(
      data => {
        this.listSuppliers();

      }
    )
  }

  findSupplierByCompanyOrVat(input:string){
    this.supplierService.getSupplierByCompanyOrVat(input).subscribe(
      data => {
        this.suppliers = data;
      }
    )
  }


}