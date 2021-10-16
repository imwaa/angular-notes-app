import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreDocument,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';

import { Note } from './note';
import { map } from 'rxjs/operators';
import { AuthService } from '../core/auth.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root',
})
export class NoteService {
  notesCollection: AngularFirestoreCollection<Note>;
  notesDocument: AngularFirestoreDocument<Note>;
  userData = ''; // Save logged in user data
  hello = 'VuS3y3c8sLT6osE3sQBBwaYVAVq1';

  constructor(
    private afs: AngularFirestore,
    private auth: AuthService,
    private afAuth: AngularFireAuth
  ) {
    // this.afAuth.authState.subscribe((user) => {
    //   if (user) {
    //     this.userData = user.uid;
    //     // we store the name of the collection that we want to work with//
    //   } else {
    //     alert('no data for user');
    //   }
    // });

    this.afAuth.onAuthStateChanged((user) => {
      if (user) {
        this.userData = user.uid;
        this.notesCollection = this.afs.collection('notes', (ref) =>
          ref.where('authorId', '==', this.userData).orderBy('date', 'desc')
        );
      }
    });
  }

  getAllNotes() {
    return this.notesCollection.snapshotChanges().pipe(
      map((actions) => {
        return actions.map((a) => {
          const data = a.payload.doc.data() as Note;
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );
  }

  getNoteData(id: string) {
    this.notesDocument = this.afs.doc<Note>(`notes/${id}`);
    return this.notesDocument.valueChanges();
  }

  /* C R U D - OPERATIONS */

  createNote(data: Note) {
    this.notesCollection.add(data);
  }

  getNote(id: string) {
    return this.afs.doc<Note>(`notes/${id}`);
  }

  updateNote(id: string, formData) {
    this.getNote(id).update(formData);
  }

  deleteNote(id: string) {
    this.getNote(id).delete();
  }
}
