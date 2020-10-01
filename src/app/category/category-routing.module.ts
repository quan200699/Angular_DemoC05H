import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {CategoryListComponent} from './category-list/category-list.component';


const routes: Routes = [{
  path: '',
  component: CategoryListComponent
}];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class CategoryRoutingModule {
}
