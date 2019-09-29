import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './post/home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { HeaderComponent } from './header/header.component';
import { AllSubredditComponent } from './subreddit/all-subreddit/all-subreddit.component';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EditorModule } from '@tinymce/tinymce-angular';
import { ViewSubredditComponent } from './subreddit/view-subreddit/view-subreddit.component';
import { CreatePostComponent } from './post/create-post/create-post.component';
import { ViewPostComponent } from './post/view-post/view-post.component';
import { CreateSubredditComponent } from './subreddit/create-subreddit/create-subreddit.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { SidebarViewSubredditComponent } from './shared/sidebar-view-subreddit/sidebar-view-subreddit.component';
import { AboutComponent } from './shared/about/about.component';
import { GuidelinesComponent } from './shared/guidelines/guidelines.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { HttpClientInterceptor } from './http.client.interceptor';
import { PostComponent } from './shared/post/post.component';
import { VotebuttonComponent } from './shared/votebutton/votebutton.component';
import { UserComponent } from './user/user.component';
import { CommentComponent } from './shared/comment/comment.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    AllSubredditComponent,
    ViewSubredditComponent,
    CreatePostComponent,
    ViewPostComponent,
    CreateSubredditComponent,
    SidebarComponent,
    SidebarViewSubredditComponent,
    AboutComponent,
    GuidelinesComponent,
    PostComponent,
    VotebuttonComponent,
    UserComponent,
    CommentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'subreddits', component: AllSubredditComponent },
      { path: 'view-subreddit', component: ViewSubredditComponent },
      { path: 'create-post', component: CreatePostComponent },
      { path: 'create-subreddit', component: CreateSubredditComponent },
      { path: 'view-post/:id', component: ViewPostComponent },
      { path: 'view-subreddit/:id', component: ViewSubredditComponent },
      { path: 'user/:name', component: UserComponent },
      { path: 'login', component: LoginComponent },
      { path: 'signup', component: RegisterComponent }
    ], { onSameUrlNavigation: "reload" }),
    FontAwesomeModule,
    NgbModule,
    EditorModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [CookieService, { provide: HTTP_INTERCEPTORS, useClass: HttpClientInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
