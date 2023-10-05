import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { DishType } from 'src/app/model/recipe';
import { CommunicationService } from 'src/app/services/communication.service';

import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatSelectModule,
    MatFormFieldModule
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  selectedCategory: string = '-1';

  // @Output() catChanged = new EventEmitter<number>()

  categories = Object.entries(DishType).slice(Object.entries(DishType).length/2);

  constructor(
    // private commService: CommunicationService
    private dataServ: DataService
    ){}

  toggleTheme(){
    document.body.classList.toggle('pippo-dark')
  }

  categoryChanged(){

    const categoryNumber = parseInt(this.selectedCategory)
    this.dataServ.filterRecipes(categoryNumber);
    // this.commService.changeCategory(categoryNumber);
    // this.catChanged.emit(categoryNumber)
  }

}
