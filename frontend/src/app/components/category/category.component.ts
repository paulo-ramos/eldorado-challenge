import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import Category from '../../models/Category';
import IResponse from '../../models/IResponse';
import { CategoriesService } from '../../services/categories.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.sass']
})
export class CategoryComponent implements OnInit {

  newCategoryDialog: boolean = false;

  newName: string = '';
  categories: Category[] = [];

  constructor(
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private categoriesService: CategoriesService
  ) { }

  ngOnInit(): void {
    this.loadCategories();
  }

  loadCategories(): void {    
    this.categoriesService.getcategories().subscribe((response: IResponse<Category[]>) => {
      //
      console.log('entrei');      
      
      this.categories = response.content;
      //
      console.log(this.categories)

    })
  }

  onNewCategory(): void {
    this.newCategoryDialog = true;
  }

  hideNewCategoryDialog(): void {
    this.newCategoryDialog = false;
  }

  saveCategory(): void {
    this.categoriesService.createCategory(this.newName).subscribe(() => {
      this.loadCategories();

      this.messageService.add({
        severity:'success',
        summary: 'Category message',
        detail: 'New category added with success!'
      });
    });
  }

  deleteCategory(categoryId: number, categoryKey: string): void {
    this.categoriesService.deleteCategory(categoryId, categoryKey).subscribe(() => {
      this.loadCategories();

      this.messageService.add({
        severity:'success',
        summary: 'Category message',
        detail: 'Category deleted with success!'
      });
    });
  }

  onDeleteCategory(companyId: number, categoryKey: string) {
    this.confirmationService.confirm({
      message: 'Do you want to delete this category?',
      header: 'Delete Confirmation',
      icon: 'pi pi-info-circle',
      accept: () => this.deleteCategory(companyId, categoryKey)
    });
  }



}
