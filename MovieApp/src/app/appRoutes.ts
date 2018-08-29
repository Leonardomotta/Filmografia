import {Routes} from "@angular/router"
import {MoviesOutletComponent} from "./Componentes/movies-outlet/movies-outlet.component"
import { FilmeviewComponent } from "./Componentes/filmeview/filmeview.component"



    export const ROUTES : Routes = [

        {path: "" , component : MoviesOutletComponent},
        {path: "filmes/:id", component: FilmeviewComponent}
        
    ]




