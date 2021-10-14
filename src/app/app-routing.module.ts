import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { AllNotesComponent } from './notes/all-notes/all-notes.component';
import { CreateNoteComponent } from './notes/create-note/create-note.component';
import { SignInComponent } from './notes/sign-in/sign-in.component';

const routes: Routes = [
  { path: '', redirectTo: '/notes', pathMatch: 'full' },

  { path: 'notes', component: AllNotesComponent, canActivate: [AuthGuard] },
  {
    path: 'notes/create-note',
    component: CreateNoteComponent,
    canActivate: [AuthGuard],
  },
  { path: 'sign-in', component: SignInComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
