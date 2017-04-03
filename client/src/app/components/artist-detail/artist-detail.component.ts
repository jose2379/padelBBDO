import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {GLOBAL} from '../../services/global';
import {UserService} from '../../services/user.service';
import {Artist} from "../../models/artist";
import {ArtistService} from "../../services/artist.service";

@Component({
  selector: 'app-artist-detail',
  templateUrl: '../../views/artist-detail.component.html',
  providers: [UserService, ArtistService]
})
export class ArtistDetailComponent implements OnInit {
  public titulo: string;
  public artist: Artist;
  public identity;
  public token;
  public url: string;
  public alertMessage: string;

  constructor(private _route: ActivatedRoute,
              private _router: Router,
              private _userService: UserService,
              private _artistService: ArtistService) {

    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
    this.url = GLOBAL.url;
  }

  ngOnInit() {
    console.log('artist-edit funcionando');
    // llamar al método del api para sacar el artista en base a su id
    this.getArtist();
  }

  getArtist() {
    this._route.params.forEach((params: Params) => {
      let id = params['id'];
      this._artistService.getArtist(this.token, id)
        .subscribe(
          response => {
            if (!response.artist) {
              this._router.navigate(['/']);
            } else {
              this.artist = response.artist;
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
    })
  }
}
