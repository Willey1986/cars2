import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/containers/layout/layout.component';
import {RouterModule} from '@angular/router';
import { HeaderComponent } from './layout/components/header/header.component';
import { SearchBarComponent } from './layout/components/search-bar/search-bar.component';

@NgModule({
  declarations: [LayoutComponent, HeaderComponent, SearchBarComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [LayoutComponent]
})
export class CoreModule { }
