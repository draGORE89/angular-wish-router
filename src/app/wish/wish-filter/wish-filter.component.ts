import { Component, Output, Input, EventEmitter, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { WishItem } from 'src/shared/models/wishItem';


const filters = [
  (item: WishItem) => item,
  (item: WishItem) => !item.isComplete,
  (item: WishItem) => item.isComplete
]

@Component({
  selector: 'wish-filter',
  templateUrl: './wish-filter.component.html',
  styleUrls: ['./wish-filter.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WishFilterComponent implements OnInit {
  // filter is now 2-way bound. To tell angular that Input and Output are related, we add 'Change' in the output name
  @Input() filter: any;
  @Output() filterChange = new EventEmitter<any>();
  listFilter: string = '0';


  ngOnInit(): void {
    this.updateFilter(this.listFilter)
  };

  updateFilter(value: any) {
    this.filter = filters[value]
    this.filterChange.emit(this.filter);
  };
}

