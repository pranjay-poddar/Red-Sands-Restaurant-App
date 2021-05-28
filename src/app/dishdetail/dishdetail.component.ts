import { Comment } from './../shared/comment';
import { DISHES } from './../shared/dishes';
import { Component, OnInit ,ViewChild, Inject } from '@angular/core';
import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Dish }from '../shared/dish';
import { DishService } from '../services/dish.service';
import { switchMap } from 'rxjs/operators';
import { FormBuilder,Validators} from '@angular/forms';
@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss']
})

export class DishdetailComponent implements OnInit {
  commentForm:any;
  commentDisplay:any;
  authorDisplay:any;
  ratingDisplay:any;
  dish : any;
  dishIds!: string[];
  prev!: string;
  next!: string;
  
  @ViewChild('fform') commentFormDirective:any;
  constructor(private dishservice: DishService,
    private route: ActivatedRoute,
    private location: Location,private fb: FormBuilder,
    @Inject('BaseURL') public BaseURL:any) {
      this.createForm();
     }

  ngOnInit(): void {
    this.dishservice.getDishIds().subscribe(dishIds => this.dishIds = dishIds);
    this.route.params.pipe(switchMap((params: Params) => this.dishservice.getDish(params['id'])))
    .subscribe(dish => { this.dish = dish; this.setPrevNext(dish.id); });
  
  
  }
  formatLabel(value: number) {
   
    return value;
  }


  createForm(){
    this.commentForm = this.fb.group({
    author : ['', [Validators.required,Validators.minLength(2),Validators.maxLength(25)]],
    comment : ['',[Validators.required,Validators.minLength(2),Validators.maxLength(80)]],
    rating: [5]
    });
    this.commentForm.valueChanges.subscribe((data:any) => this.onValueChanged(data));
  this.onValueChanged(); // (re)set validation messages now
  }
 
  
  formErrors = {
    'author': '',
    'comment': '',
    'rating':''
  };

  validationMessages = {
    'author': {
      'required':      'Name is required.',
      'minlength':     'Name must be at least 2 characters long.',
      'maxlength':     'Name cannot be more than 25 characters long.'
    },
    'comment': {
      'required':      'Comment is required.',
      'minlength':     'Comment must be at least 2 characters long.',
      'maxlength':     'Name cannot be more than 80 characters long.'
    }
  };
  onValueChanged(data ?: any) {
    if (!this.commentForm) { return; }
    const form = this.commentForm;
    for ( const field in this.formErrors) {
      if (this.formErrors.hasOwnProperty(field)) {
        // clear previous error message (if any)
        (this.formErrors as any)[field] = '';
        const control = form.get(field);
        if (control && control.dirty && !control.valid) {
          const messages = (this.validationMessages as any)[field];
          for (const key in control.errors) {
            if (control.errors.hasOwnProperty(key)) {
              (this.formErrors as any)[field] += messages[key] + ' ';
            }
          }
        }
      }
    }
  }
  onSubmit() { 
    this.commentDisplay = this.commentForm.value;
    this.commentDisplay.date = new Date().toISOString();
    console.log(this.commentDisplay);
    this.dish.comments.push(this.commentDisplay);
    this.commentForm.reset({
      Name: '',
      comment: '',
      rating: 5
    });
    this.commentFormDirective.resetForm();
  }

  setPrevNext(dishId: string) {
    const index = this.dishIds.indexOf(dishId);
    this.prev = this.dishIds[(this.dishIds.length + index - 1) % this.dishIds.length];
    this.next = this.dishIds[(this.dishIds.length + index + 1) % this.dishIds.length];
  }
  goBack(): void {
    this.location.back();
  }
  

}
