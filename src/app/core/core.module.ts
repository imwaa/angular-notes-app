import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './auth.service';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, AppRoutingModule],
  providers: [AuthService],
})
export class CoreModule {}
