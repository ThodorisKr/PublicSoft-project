import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Supplier } from '../supplier';
import { SupplierService } from '../supplier.service';

@Component({
  selector: 'app-update-supplier',
  templateUrl: './update-supplier.component.html',
  styleUrls: ['./update-supplier.component.css']
})
export class UpdateSupplierComponent implements OnInit {

  supplier: Supplier = new Supplier();
  id:number;

  constructor(private supplierService: SupplierService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.supplierService.getSuppliersById(this.id).subscribe(
      data => {
        this.supplier =data;
      }
    )
  }

  onSubmit(){
    this.supplierService.updateSupplier(this.id, this.supplier).subscribe(
      data => {
        this.goToSuppliers();
      }
    )
  }

  goToSuppliers(){
    this.router.navigate(['/suppliers'])
  }

}