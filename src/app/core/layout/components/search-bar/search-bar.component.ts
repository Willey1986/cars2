import {Component, OnInit} from '@angular/core';
import {SearchService} from '../../../search/search.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  constructor(public searchService: SearchService) { }

  ngOnInit() {
  }

  onInput(value: string) {
    this.searchService.searchTerm$.next(value);
  }
}
