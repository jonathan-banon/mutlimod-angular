import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { CreateComponent } from './create/create.component';
import { DetailsComponent } from './details/details.component';



@NgModule({
  declarations: [
    ListComponent,
    CreateComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ArticleModule { }
