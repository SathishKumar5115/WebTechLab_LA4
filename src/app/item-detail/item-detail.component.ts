import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Item } from '../item.model';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {
  item: Item | undefined; // Allow the item to be undefined

  constructor(
    private route: ActivatedRoute,
    private itemService: ItemService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const itemId = +params['id'];
      this.item = this.itemService.getItem(itemId);
      console.log('Fetched item:', this.item); // Log the item for debugging
    });
  }

}
