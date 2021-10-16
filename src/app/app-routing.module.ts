import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllNotesComponent } from './notes/all-notes/all-notes.component';
import { CreateNoteComponent } from './notes/create-note/create-note.component';
import { SignInComponent } from './notes/sign-in/sign-in.component';

import { AuthGuard } from './auth.guard';
import { SignInGuardGuard } from './sign-in-guard.guard';

const routes: Routes = [
  { path: '', redirectTo: '/notes', pathMatch: 'full' },
  { path: 'notes', canActivate: [AuthGuard], component: AllNotesComponent },
  {
    path: 'notes/create-note',
    canActivate: [AuthGuard],
    component: CreateNoteComponent,
  },
  {
    path: 'sign-in',
    component: SignInComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
