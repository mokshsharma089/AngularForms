import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showTempateForm:boolean=false;
  showReactiveForm:boolean=true;
  toggleForm(){
    if(this.showReactiveForm==true){
      this.showReactiveForm=false;
      this.showTempateForm=true;
    }
    else{
        this.showReactiveForm=true;
        this.showTempateForm=false;
    }
  }
}
