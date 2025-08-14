import { Component, EventEmitter, OnInit, Output, TemplateRef, ViewChild, inject } from '@angular/core';
import { ImageCategoryService, ImageLibraryService } from 'src/api/services';
import { Image } from 'src/api/models/image'
import { SHARED_IMPORTS } from 'src/app/shared/imports';
import { ImageCategory } from 'src/api/models';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-image-library',
  templateUrl: './image-library.component.html',
  styleUrls: ['./image-library.component.scss'],
  standalone: true,
  imports: [SHARED_IMPORTS]
})
export class ImageLibraryComponent implements OnInit {

  @ViewChild('dialogTpl') dialogTpl!: TemplateRef<any>;
  private dialog = inject(MatDialog);

  images: Image[] = [];
  selectedImage?: Image;
  @Output() selectedImageChange: EventEmitter<Image> = new EventEmitter<Image>();
  categories?: ImageCategory[];
  selectedCategory?: ImageCategory;

  constructor(
    private _imageService: ImageLibraryService,
    private _imageCategoryService: ImageCategoryService,
    
  ) { }

  ngOnInit() {
    this.getImages();
    this.getCategories();
  }

  uploadImage(event: any) {
    let newImage = event.target.files[0];

    this._imageService.imageLibraryCreate(
      {
        body: {
          id: 0,
          image: newImage,
          category: this.selectedCategory?.id
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

  getImages() {
    this.images = [];
    this._imageService.imageLibraryList({limit: 100, category_id: this.selectedCategory?.id}).subscribe(
          {
            next: (images) => {
              this.images = images.results;
            }
          }
        )
  }

  selectImage(image: Image) {
    if (this.selectedImage == image){
      this.selectedImage = undefined;
    } else {
      this.selectedImage = image;
    }
    this.selectedImageChange.emit(this.selectedImage);
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

  openNewCategoryDialog(category: ImageCategory | undefined){
    if (category == undefined) {
        let newCategory = {
        id: 0,
        name: ''
      }
      this.selectedCategory = newCategory;
    } else {
      this.selectedCategory = category;
    }
    const ref = this.dialog.open(this.dialogTpl);
    
  }

  createCategory() {
    this._imageCategoryService.imageCategoryCreate$Json$Response({
      body: this.selectedCategory!
    }).subscribe(
      {
        next: (response) => {
          this.categories?.push(response.body);
          this.dialog.closeAll();
          this.selectedCategory = response.body;
          this.selectCategory(response.body);
        }
      }
    )
  }

  selectCategory(category: ImageCategory | undefined) {
    this.selectedCategory = category;
    this.selectedImage = undefined;
    this.getImages();
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
          this.categories?.splice(position!, 1);
          this.selectCategory(undefined);
        }
      }
    )
  }

  updateCategory(category: ImageCategory) {
    this._imageCategoryService.imageCategoryPartialUpdate$Json(
      {
        id: category.id,
        body: {
          name: category.name
        }
      }
    ).subscribe(
      {
        next: (response) => {
          this.dialog.closeAll();
        }
      }
    )
  }

}
