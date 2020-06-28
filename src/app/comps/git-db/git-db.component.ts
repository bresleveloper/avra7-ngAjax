import { Component, OnInit } from '@angular/core';
import { GitDbService } from 'src/app/services/git-db.service';

@Component({
  selector: 'app-git-db',
  templateUrl: './git-db.component.html',
  styleUrls: ['./git-db.component.css']
})
export class GitDbComponent implements OnInit {

  constructor(public shuki:GitDbService) { }

  dbAjaxContent = {}
  keysArr = []

  ngOnInit(): void {
   /* this.shuki.httpGetTxt(this.shuki.urlzIndex.txt)
      .subscribe(ajaxStringResults => {
        this.dbAjaxContent["txt"] = ajaxStringResults
      })


    for (let key in this.shuki.urlzIndex) {
      this.keysArr.push(key)
      this.shuki.httpGetTxt(this.shuki.urlzIndex[key])
        .subscribe(strRes => this.dbAjaxContent[key] = strRes)
    }*/
  }

}
