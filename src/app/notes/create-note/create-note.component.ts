import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/auth.service';
import { NoteService } from '../note.service';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.css'],
})
export class CreateNoteComponent implements OnInit {
  title: string;
  description: string;

  constructor(
    private auth: AuthService,
    private notesService: NoteService,
    storage: AngularFireStorage,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {}

  noteCreation() {
    const data = {
      authorId: this.auth.currentUserId,
      title: this.title,
      description: this.description,
      date: new Date(),
    };

    this.notesService.createNote(data);
    this.clearFields();
    this.toastr.success('Note ajoutée avec succès!');
  }

  clearFields() {
    this.title = '';
    this.description = '';
  }
}
