import { Component } from '@angular/core';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
// import { FloatLabelModule } from 'primeng/floatlabel';
import { DbService } from '../../services/db.service';
import { AllSnippetsComponent } from '../all-snippets/all-snippets.component';

@Component({
  selector: 'app-create-bin',
  standalone: true,
  imports: [InputTextareaModule,FormsModule,ReactiveFormsModule,AllSnippetsComponent],
  templateUrl: './create-bin.component.html',
  styleUrl: './create-bin.component.css'
})
export class CreateBinComponent {
constructor(private dbService : DbService ){

}

ngOnInit(){
 
}

  title = new FormControl('',
    [Validators.required]
  )
   code = new FormControl('',
    [Validators.required]
  )

  binData = new FormGroup({
    title :this.title,
    code : this.code
  })

  reset(){
    this.binData.reset();
  }

  submit(data : FormGroup){
    this.dbService.createSnippet(data.value);
    this.reset();
  }

  



}
