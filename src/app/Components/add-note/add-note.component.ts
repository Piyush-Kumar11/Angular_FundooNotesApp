import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NotesService } from '../../Services/Notes/notes.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-note',
  standalone: false,
  templateUrl: './add-note.component.html',
  styleUrl: './add-note.component.scss'
})
export class AddNoteComponent implements OnInit{
  display:boolean = true;
  notesForm !: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private notes: NotesService, private activeRoute:ActivatedRoute){}
  ngOnInit(): void {
      this.notesForm=this.formBuilder.group({
        title:[''],
        desc:['']
      })
  }

  onSubmit(){
      let reqData = {
        title: this.notesForm.value.title,
        description: this.notesForm.value.desc
      }
        console.log(reqData);
        this.notes.addNotes(reqData).subscribe((response:any)=>{
          console.log(response);
        });
      this.display = true;
    }
}
