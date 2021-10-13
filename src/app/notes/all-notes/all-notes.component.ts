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

  constructor(private notesService: NoteService) {}

  ngOnInit(): void {
    this.notes = this.notesService.getAllNotes();
    console.log(this.notes);
  }
}
