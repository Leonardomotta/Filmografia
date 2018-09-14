import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../serviços/movie.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-filmeview',
  templateUrl: './filmeview.component.html',
  styleUrls: ['./filmeview.component.css']
})
export class FilmeviewComponent implements OnInit {

  private id;
  public filme

  constructor(private movie:MovieService , private route:ActivatedRoute) { 
   
    this.route.params.subscribe(params => {
      this.id = params['id']
    });
    this.movie.getMovieByID(this.id).subscribe(resp=>this.filme = resp)
    
    


  }

  ngOnInit() {
  }

}
