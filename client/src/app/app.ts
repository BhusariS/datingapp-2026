import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App  implements OnInit{
  private http= inject(HttpClient);
  protected  title ='Dating App';
  protected members=signal<any>([]);
//protected members:any;

//     ngOnInit(): void {
//     this.http.get('https://localhost:5001/api/members').subscribe({
//     next: response=>console.log(response),
//     error:error=>console.log(error),
//     complete:()=>console.log('complete the http request')
// })
//   }
  async ngOnInit() {
    {
      this.members.set(await this.getMembers())
    }
  }

  async getMembers(){
    try{
      return lastValueFrom(this.http.get('https://localhost:5001/api/members'));
    }
    catch(error){
      console.log(error);
  
    throw error;
    }
  
  }

}


