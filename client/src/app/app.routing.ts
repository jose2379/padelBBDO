/**
 * Created by josemariaminambresredondo on 23/3/17.
 */
import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from "@angular/router";

// import user
import {UserEditComponent} from './components/user-edit/user-edit.component';
import {ArtistListComponent} from './components/artist-list/artist-list.component';
import {HomeComponent} from './components/home/home.component';
import {ArtistAddComponent} from './components/artist-add/artist-add.component';
import {ArtistEditComponent} from './components/artist-edit/artist-edit.component';
import {ArtistDetailComponent} from './components/artist-detail/artist-detail.component';


const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'artistas/:page', component: ArtistListComponent},
  {path: 'crear-artista', component: ArtistAddComponent},
  {path: 'artista/:id', component: ArtistDetailComponent},
  {path: 'editar-artista/:id', component: ArtistEditComponent},
  {path: 'mis-datos', component: UserEditComponent},
  {path: '**', component: HomeComponent}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
