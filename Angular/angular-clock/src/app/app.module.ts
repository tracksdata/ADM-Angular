import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { GreetComponent } from './greet/greet.component';
import { StoryComponent } from './story/story.component';

@NgModule({ // @ decarator
  declarations: [  // all custom created components
    AppComponent,
    GreetComponent,
    StoryComponent
     // must be a class
  ],
  imports: [ // all builtin angular components
    BrowserModule 
  ],
  providers: [], // dependency injection
  bootstrap: [AppComponent]
})
export class AppModule { }
