import { NgModule } from '@angular/core';
import { BlockUIModule } from 'ng-block-ui';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
/* Material */
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

import { EmptyComponent } from './empty/empty.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PipeModule } from '../services/pipes/pipe.module';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    EmptyComponent,
    FooterComponent,
    NavbarComponent,
    SearchComponent,
  ],
  imports: [
    BlockUIModule.forRoot({
      delayStop: 300,
    }),
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    PipeModule.forRoot(),
    ReactiveFormsModule,
  ],
  exports: [
    BlockUIModule,
    EmptyComponent,
    FooterComponent,
    MatButtonModule,
    MatDividerModule,
    MatCardModule,
    MatIconModule,
    NavbarComponent,
    PipeModule,
    SearchComponent,
  ],
})
export class ComponentsModule {}
