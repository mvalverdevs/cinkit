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


  selectCategoryTab(event: MatTabChangeEvent) {
    if (event.tab.id == 'all-categories-tab') {
      this.getImages(undefined);
    } else if (event.tab.id == 'new-category-tab') {
      const ref = this.dialog.open(this.dialogTpl, {
        data: { name: 'Manu' } // datos opcionales para la plantilla
      });
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
          this.seleccionarPorIdCategoria(response.body.id);
        }
      }
    )
  }

 seleccionarPorIdCategoria(id: number) {
    const i = this.categories?.findIndex(c => c.id === id);
    if (i !== -1) {
      // +1 porque el índice 0 es "Todas"
      this.categoryTabs.selectedIndex = i! + 1;
    }
  }


}
