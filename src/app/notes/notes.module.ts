import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoteService } from './note.service';
import { AllNotesComponent } from './all-notes/all-notes.component';
import { AppRoutingModule } from '../app-routing.module';
import { CreateNoteComponent } from './create-note/create-note.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
import { SignInComponent } from './sign-in/sign-in.component';

@NgModule({
  declarations: [AllNotesComponent, CreateNoteComponent, SignInComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    SharedModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],
  providers: [NoteService],
})
export class NotesModule {}
