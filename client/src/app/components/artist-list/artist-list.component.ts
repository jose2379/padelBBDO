import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {GLOBAL} from '../../services/global';
import {UserService} from '../../services/user.service';
import {Artist} from "../../models/artist";
import {ArtistService} from "../../services/artist.service";

@Component({
  selector: 'app-artist-list',
  templateUrl: '../../views/artist-list.component.html',
  providers: [UserService, ArtistService]
})
export class ArtistListComponent implements OnInit {
  public titulo: string;
  public artists: Artist;
  public identity;
  public token;
  public url: string;
  public nextPage;
  public prevPage;

  constructor(private _route: ActivatedRoute,
              private _router: Router,
              private _userService: UserService,
              private _artistService: ArtistService) {
    this.titulo = 'Artistas';
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
    this.url = GLOBAL.url;
    this.nextPage = 1;
    this.prevPage = 1;
  }

  ngOnInit() {
    this.getArtists();
  }

  getArtists() {
    this._route.params.forEach((params: Params) => {
      let page = +params['page'];
      if (!page) {
        page = 1;
      } else {
        this.nextPage = page + 1;
        this.prevPage = page - 1;

        if (this.prevPage == 0) {
          this.prevPage = 1;
        }

        this._artistService.getArtists(this.token, page).subscribe(
          response => {
            if (!response.artists) {
              this._router.navigate(['/']);
            } else {
              this.artists = response.artists;
            }
          }, error => {
            var errorMessage = <any>error;

            if (errorMessage != null) {
              var body = JSON.parse(error._body);
              // this.alertMessage = body.message;
              console.log(error);
            }
          }
        );

      }
    });
  }

}
