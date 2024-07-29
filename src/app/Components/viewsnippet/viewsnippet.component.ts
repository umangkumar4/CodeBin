import { Component } from '@angular/core';
import { DbService } from '../../services/db.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-viewsnippet',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './viewsnippet.component.html',
  styleUrl: './viewsnippet.component.css'
})
export class ViewsnippetComponent {
  singleSnippet : any;
  constructor(private dbService : DbService,private route: ActivatedRoute){}

  ngOnInit(){
    const docId = this.route.snapshot.paramMap.get('id');
    this.dbService.getDocumentById(docId!).then(res=>{
      console.log(res)
      this.singleSnippet= res;
    })
  }

}
