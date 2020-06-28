import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GitDbService {

  constructor(private http:HttpClient) { }

  httpGet(url:string) : Observable<any>{
    return this.http.get(url)
  }

  httpGetType<T>(url:string) : Observable<T>{
    return this.http.get<T>(url)
  }




    /*public urlzIndex = {
    "txt" : "https://raw.githubusercontent.com/bresleveloper/db/master/ajax/say%20ho.txt",
    "json" : "https://raw.githubusercontent.com/bresleveloper/db/master/ajax/someDB.json",
    "js" : "https://raw.githubusercontent.com/bresleveloper/db/master/ajax/someDB.js",
    "html" : "https://raw.githubusercontent.com/bresleveloper/db/master/ajax/comp-calc.html",
  }*/


    /*httpGetTxt(url:string) : Observable<string>{
    console.log("httpGetTxt");
    return this.http.get<string>(url,{ responseType: 'text'});
  }*/

}
