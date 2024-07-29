import { Component } from '@angular/core';
import { DbService } from '../../services/db.service';
import { CommonModule, NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-all-snippets',
  standalone: true,
  imports: [CommonModule, RouterLink,NgFor],
  templateUrl: './all-snippets.component.html',
  styleUrl: './all-snippets.component.css'
})
export class AllSnippetsComponent {
 
  data : any =[];

  constructor(private dbService : DbService){}

  

  ngOnInit(){
    this.getAllSnippet()
  }
  
  getAllSnippet(){
    this.data = this.dbService.getAllSnippets().then((value)=>{
      this.data = value;
      console.log(this.data[0].id)
    })
  }

}
