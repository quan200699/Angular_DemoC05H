import {Component, OnInit} from '@angular/core';
import {CategoryService} from '../../service/category/category.service';
import {Category} from '../../interface/category';
import {NotificationService} from '../../service/notification/notification.service';

@Component({
  selector: 'app-category-create',
  templateUrl: './category-create.component.html',
  styleUrls: ['./category-create.component.css']
})
export class CategoryCreateComponent implements OnInit {
  category: Category = {
    name: ''
  };

  constructor(private categoryService: CategoryService,
              private notificationService: NotificationService) {
  }

  ngOnInit() {
  }

  create() {
    this.categoryService.create(this.category).subscribe(() => {
      this.notificationService.showSuccessMessage('Thành công');
    }, () => {
      this.notificationService.showErrorMessage();
    });
  }
}
