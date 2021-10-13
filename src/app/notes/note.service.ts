import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreDocument,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';

import { Note } from './note';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class NoteService {
  notesCollection: AngularFirestoreCollection<Note>;
  notesDocument: AngularFirestoreDocument<Note>;

  constructor(private afs: AngularFirestore) {
    // we store the name of the collection that we want to work with//
    this.notesCollection = this.afs.collection('notes', (ref) =>
      ref.orderBy('date', 'desc')
    );
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
}
