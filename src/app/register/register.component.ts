import { Component, OnInit, VERSION} from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Details } from '../log-in/detail';


@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
    registerForm: FormGroup;
    submitted = false;
    loading = false;
    data: any;

    constructor(private formBuilder: FormBuilder, public router: Router, public route: ActivatedRoute) { }
    ngOnInit() : void{
        
        
        this.registerForm = this.formBuilder.group({
            email: ['', [Validators.required, Validators.email]],
            Name: ['', Validators.required],
            password: ['', [Validators.required, Validators.pattern('^(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{3,}$')]],
            MobileNo:['', [Validators.required,Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')]],
            reCaptcha: ['',[Validators.required]]
        });
        }

    get f() { return this.registerForm.controls; }
    onSubmit() {
        this.submitted = true;
        let data: any = this.registerForm.value;
        alert('Signup COMPLETED!! View Description?');
            if (this.registerForm.invalid) {
                return;
            }  
    else
     {
        this.router.navigate(['./login'],
        {
            queryParams: { data:(JSON.stringify(data)) }
        })
          
        this.registerForm.reset();  }
    }
}
