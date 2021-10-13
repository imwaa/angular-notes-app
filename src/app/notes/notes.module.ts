import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoteService } from './note.service';
import { AllNotesComponent } from './all-notes/all-notes.component';
import { AppRoutingModule } from '../app-routing.module';
import { CreateNoteComponent } from './create-note/create-note.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [AllNotesComponent, CreateNoteComponent],
  imports: [CommonModule, AppRoutingModule, SharedModule],
  providers: [NoteService],
})
export class NotesModule {}
