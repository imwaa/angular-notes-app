import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Note } from '../note';
import { NoteService } from '../note.service';

@Component({
  selector: 'app-all-notes',
  templateUrl: './all-notes.component.html',
  styleUrls: ['./all-notes.component.css'],
})
export class AllNotesComponent implements OnInit {
  notes: Observable<Note[]>;
  GotNoteForUpdate: Note = {} as Note;
  IdOfNoteToBeUpdated: string;

  constructor(private notesService: NoteService) {}

  ngOnInit(): void {
    this.notes = this.notesService.getAllNotes() || null;
  }

  noteDeleting(id: string) {
    this.notesService.deleteNote(id);
  }

  getNoteToBeEdited(id: string) {
    this.notesService
      .getNoteData(id)
      .subscribe((data) => (this.GotNoteForUpdate = data));
    this.IdOfNoteToBeUpdated = id;
  }

  noteUpdating() {
    const formData = {
      title: this.GotNoteForUpdate.title,
      description: this.GotNoteForUpdate.description,
    };
    this.notesService.updateNote(this.IdOfNoteToBeUpdated, formData);
    this.IdOfNoteToBeUpdated = '';
    console.log('note edited');
  }
}
