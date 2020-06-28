import { Component, OnInit } from '@angular/core';
import { GitDbService } from 'src/app/services/git-db.service';
import { Person } from 'src/app/models/person';
import { DbAjaxResponse } from 'src/app/models/db-ajax-response';

@Component({
  selector: 'app-new-db-json',
  templateUrl: './new-db-json.component.html',
  styleUrls: ['./new-db-json.component.css']
})
export class NewDbJsonComponent implements OnInit {

  constructor(public mySvc:GitDbService) { }

  students:Person[] = []
  jiraffs:[] = []
  stars:[] = []

  //fullResponse:DbAjaxResponse = new DbAjaxResponse()
  fullResponse:DbAjaxResponse 

  ngOnInit(): void {

    this.mySvc.httpGetType<DbAjaxResponse>
      ("https://raw.githubusercontent.com/bresleveloper/db/master/ajax/someDB.json")
      .subscribe(_dbAjaxRes => {
        //_dbAjaxRes.startInSky[9].StarName
        //let _dbAjaxRes2 = _dbAjaxRes as DbAjaxResponse
        this.fullResponse = _dbAjaxRes
      });

    
      //this.fullResponse.startInSky[0].StarWeight

    /*this.mySvc.httpGet("https://raw.githubusercontent.com/bresleveloper/db/master/ajax/someDB.json")
      .subscribe(result => {
        //some code

        this.students = result.students
        let x = this.students[0].

      })*/






      /*
    let obs = this.mySvc.httpGet("https://raw.githubusercontent.com/bresleveloper/db/master/ajax/someDB.json")
    obs.subscribe(res => {
      //some code
    })*/
    
  }

}
