import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GitDbService {

  public urlzIndex = {
    "txt" : "https://raw.githubusercontent.com/bresleveloper/db/master/ajax/say%20ho.txt",
    "json" : "https://raw.githubusercontent.com/bresleveloper/db/master/ajax/someDB.json",
    "js" : "https://raw.githubusercontent.com/bresleveloper/db/master/ajax/someDB.js",
    "html" : "https://raw.githubusercontent.com/bresleveloper/db/master/ajax/comp-calc.html",
  }

  constructor(private http:HttpClient) { }

  httpGetTxt(url:string) : Observable<string>{
    console.log("httpGetTxt");
    return this.http.get<string>(url,{ responseType: 'text'});
  }


  httpGet(url:string) : Observable<string>{
    return this.http.get<string>(url)
  }

}
