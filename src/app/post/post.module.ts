import { NgModule } from "@angular/core";
import { HomeComponent } from './home/home.component';
import { ViewPostComponent } from './view-post/view-post.component';
import { CreatePostComponent } from './create-post/create-post.component';

@NgModule({
    declarations: [
        HomeComponent,
        ViewPostComponent,
        CreatePostComponent
    ],
    imports: [
        
    ]
})
export class PostModule{

}