import {Component, Input, OnInit} from '@angular/core';
import {ProductImage} from "@models/product-image";
import {MatDialog} from "@angular/material";
import {RemoveImageDialogComponent} from "@app/admin/manage-products/save-product/current-images/remove-image-dialog/remove-image-dialog.component";

@Component({
  selector: 'current-images-remove-image-fab',
  templateUrl: './remove-image-fab.component.html',
  styleUrls: ['./remove-image-fab.component.css']
})
export class RemoveImageFabComponent implements OnInit {
  @Input() productImage: ProductImage;

  constructor(public dialog: MatDialog) {}

  ngOnInit() {
  }

  onDelete() {
    this.openDeleteDialog(this.doDelete, this.doNotDelete);
  }

  openDeleteDialog(onTrue, onFalse): void {
    let dialogRef = this.dialog.open(RemoveImageDialogComponent, {
      width: '250px',
      data: { productImage: this.productImage }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result.confirmed === true) {
        onTrue();
      }else {
        onFalse();
      }
    });
  }

  doDelete() {
    console.log('Do delete the image.');
  }

  doNotDelete() {
    console.log('Do not delete the image.');
  }
}
