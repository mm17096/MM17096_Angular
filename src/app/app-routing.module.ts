import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ErrorComponent } from "@modules/error/pages/error/error.component";
import { SkeletonComponent } from './layout/skeleton/skeleton.component';
import { API_PEST } from "./constants/routes/routes";

//Matris de objetos para las rutas
const routes: Routes = [
    /* Entre llaves definiremos cada una de las rutas de la aplicacion */
    {
        path: ``, component: SkeletonComponent,
        children: [
            {path: 'home', loadChildren: () => import('@modules/home/home.module').then(m => m.HomeModule)},
            {path: 'directivas', loadChildren: () => import('@modules/directivas/directivas.module').then(m => m.DirectivasModule)},
           /*  {path: 'mascotas', loadChildren: () => import('@modules/mascotas/mascotas.module').then(m => m.MascotasModule)} */
           {path: API_PEST, loadChildren: () => import('@modules/mascotas/mascotas.module').then(m => m.MascotasModule)}
        ]
    },
    {
        path: `error`, component: ErrorComponent
    },
    //cualquier otra ruta no valida, redireccione a '' que es el home
    {path: '**', redirectTo: 'error', pathMatch: 'full'}
];

@NgModule({
    imports: [
        //iniciamos al enrutador cuales son las rutas de la aplicacion
        RouterModule.forRoot(routes)
    ],

    exports: [RouterModule]
})

export class AppRoutingModule {

}