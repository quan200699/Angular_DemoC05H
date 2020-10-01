import {Component, OnInit} from '@angular/core';
import {CategoryService} from '../../service/category/category.service';
import {Category} from '../../interface/category';

declare var $: any;

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
  listCategory: Category[] = [];

  constructor(private categoryService: CategoryService) {
  }

  ngOnInit() {
    this.getAllCategory();
  }

  getAllCategory() {
    this.categoryService.getAll().subscribe(listCategory => {
      this.listCategory = listCategory;
      $(function() {
        $('#table-category').DataTable({
          'paging': true,
          'lengthChange': false,
          'searching': false,
          'ordering': true,
          'info': true,
          'autoWidth': false,
          'pageLength':5
        });
      });
    });
  }
}
