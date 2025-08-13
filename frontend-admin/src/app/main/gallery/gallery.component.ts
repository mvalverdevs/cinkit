import { Component, OnInit, TemplateRef, ViewChild, inject } from '@angular/core';
import { ImageCategoryService, ImageLibraryService } from 'src/api/services';
import { Image } from 'src/api/models/image'
import { SHARED_IMPORTS } from 'src/app/shared/imports';
import { ImageCategory } from 'src/api/models';
import { MatDialog } from '@angular/material/dialog';
import { MatTabChangeEvent, MatTabGroup } from '@angular/material/tabs';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
  standalone: true,
  imports: [SHARED_IMPORTS]
})
export class GalleryComponent  implements OnInit {

  @ViewChild('dialogTpl') dialogTpl!: TemplateRef<any>;
  @ViewChild('categoryTabs') categoryTabs!: MatTabGroup;
  private dialog = inject(MatDialog);

  images?: Image[];
  categories?: ImageCategory[];
  newCategoryName = '';
  selectedIndex = 0;
  trackByCatId = (_: number, c: ImageCategory) => c.id;
  editCategories = false


  constructor(
    private _imageService: ImageLibraryService,
    private _imageCategoryService: ImageCategoryService,
    
  ) { }

  ngOnInit() {
    this.getImages(undefined);
    this.getCategories();
  }

  uploadImage(event: any) {
    let newImage = event.target.files[0];

    this._imageService.imageLibraryCreate(
      {
        body: {
          id: 0,
          image: newImage
        }
      }
    ).subscribe(
      {
        next: (image) => {
          this.images?.push(image);
        }
      }
    )
  }

  getImages(category: ImageCategory | undefined) {
    this.images = [];
    this._imageService.imageLibraryList({limit: 100, category_id: category?.id}).subscribe(
          {
            next: (images) => {
              this.images = images.results;
            }
          }
        )
  }

  getCategories() {
    this._imageCategoryService.imageCategoryList().subscribe(
      {
        next: (response) => {
          this.categories = response.results;
        }
      }
    )
  }

  openNewCategoryDialog(){
    const ref = this.dialog.open(this.dialogTpl);
  }

  selectCategoryTab(event: MatTabChangeEvent) {
    if (event.tab.id == 'all-categories-tab') {
      this.getImages(undefined);
    } else if (event.tab.id == 'new-category-tab') {
      
    } else {
      console.log(event.tab.id!)
      let category = this.categories?.find(item => item.id === Number(event.tab.id!));
      console.log(category);
      this.getImages(category);
    }
    
  }

  createCategory() {
    this._imageCategoryService.imageCategoryCreate$Json$Response({
      body: {
        id: 0,
        name: this.newCategoryName
      }
    }).subscribe(
      {
        next: (response) => {
          this.categories?.push(response.body);
          this.dialog.closeAll();
          this.selectCategoryId(response.body.id);
          this.editCategories = false;
        }
      }
    )
  }

  selectIndex(index: number) {
    const max = (this.categories?.length ?? 0) + 1;
    const bounded = Math.max(0, Math.min(index, max));
    this.selectedIndex = bounded;

    if (bounded === 0) {
      // "Todas"
      this.getImages(undefined);
      return;
    }

    // ¿+ Añadir?
    if (this.categories && bounded === this.categories.length + 1) {
      this.openNewCategoryDialog();
      return;
    }

    // Categoría
    const cat = this.categories?.[bounded - 1];
    if (cat) this.getImages(cat);
  }

  selectCategoryId(id: number) {
    const i = this.categories?.findIndex(c => c.id === id) ?? -1;
    if (i !== -1) this.selectIndex(i + 1);
  }

  deleteCategory(category: ImageCategory) {
    this._imageCategoryService.imageCategoryDestroy({
      id: category.id
    }).subscribe(
      {
        next: (response) => {
          let position = this.categories?.indexOf(
            this.categories?.find(item => item.id == category.id)!
          )
          this.categories?.splice(position!, 1)
        }
      }
    )
  }

  updateCategory(category: ImageCategory) {
    this._imageCategoryService.imageCategoryPartialUpdate$Json(
      {
        id: category.id,
        body: category
      }
    ).subscribe(
      {
        next: (response) => {

        }
      }
    )
  }


}
