import {Component, OnInit} from '@angular/core';
import {CategoryService} from '../../service/category/category.service';
import {Category} from '../../interface/category';

@Component({
  selector: 'app-category-create',
  templateUrl: './category-create.component.html',
  styleUrls: ['./category-create.component.css']
})
export class CategoryCreateComponent implements OnInit {
  category: Category = {
    name: ''
  };

  constructor(private categoryService: CategoryService) {
  }

  ngOnInit() {
  }

  create() {
    this.categoryService.create(this.category).subscribe(() => {
      alert('Thành công');
    }, () => {
      alert('Lỗi');
    });
  }
}
