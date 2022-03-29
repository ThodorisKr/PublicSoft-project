import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule} from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PersonComponent } from './person/person.component';
import { CreatePersonComponent } from './create-person/create-person.component';
import { UpdatePersonComponent } from './update-person/update-person.component';
import { SupplierComponent } from './supplier/supplier.component';
import { CreateSupplierComponent } from './create-supplier/create-supplier.component';
import { UpdateSupplierComponent } from './update-supplier/update-supplier.component';


const routes: Routes = [
  
  {path: "persons", component: PersonComponent},
  {path: "suppliers", component: SupplierComponent},
  {path: "create-person",  component: CreatePersonComponent},
  {path: "create-supplier",  component: CreateSupplierComponent},
  {path: "", redirectTo: "/persons", pathMatch:"full"},
  {path:"update-person/:id", component: UpdatePersonComponent},
  {path:"update-supplier/:id", component: UpdateSupplierComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    PersonComponent,
    CreatePersonComponent,
    UpdatePersonComponent,
    SupplierComponent,
    CreateSupplierComponent,
    UpdateSupplierComponent
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

