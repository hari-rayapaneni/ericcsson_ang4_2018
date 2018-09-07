import {Component, OnInit} from "@angular/core";
import {CountryService} from "../service/service.country";
import {State} from "../model/model.state";
import {Form, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ERICUSER} from "../model/model.ericuser";
import {MatSnackBar} from "@angular/material";
import {Router} from "@angular/router";


@Component({
    templateUrl:'./home/register/register.component.html',
    styleUrls:['./home/register/register.component.css']
})
export class RegisterComponent implements OnInit{
    private selectedGender:string="Male";
    private selectedCountryValue:string;
    private selectedStateValue:string;

    genderOptions:string[] = [
        'Male',
        'Female'
    ];
    private countries:any;
    private states:any;
    private firstName:FormControl;
    private lastName:FormControl;
    private email:FormControl;
    private dob:FormControl;
    private country:FormControl;
    private state:FormControl;
    private gender:FormControl;
    private mobileNo:FormControl;
    private regForm:FormGroup;


    constructor(private countryServiceObj:CountryService,private formBuilder:FormBuilder,
                private router:Router,private snackBar:MatSnackBar)
    {
        this. firstName=new FormControl('',
            [Validators.required,
            Validators.pattern('[A-Za-z]{5,25}')
        ]);
        this. lastName=new FormControl('',[Validators.required,
            Validators.pattern('[A-Za-z]{5,25}')
        ]);
        this. email=new FormControl('',
            [Validators.required

        ]);
        this. dob=new FormControl('',
            [Validators.required

        ]);
       // this. country=new FormControl('',[Validators.required,
       //     Validators.pattern('[A-Za-z]{3,50}')
        //]);
        //this. state=new FormControl('',[Validators.required,
        //    Validators.pattern('[A-Za-z]{3,50}')
       // ]);
        //this. gender=new FormControl('',[Validators.required,
       //     Validators.pattern('[A-Za-z]{3,10}')
       // ]);
        this. mobileNo=new FormControl('',
            [Validators.required,
            Validators.pattern('[0-9]{10}')
        ]);

        this.regForm=formBuilder.group({
            firstName:this.firstName,
            lastName:this.lastName,
            email:this.email,
            dob:this.dob,
            mobileNo:this.mobileNo,
           // gender:this.gender
        });

    }
    ngOnInit()
    {
        this.countryServiceObj.getAllCountries().subscribe(response=>{
            this.countries=response;
            console.log(this.countries);
        })
    }


    selectedCountry(data)
    {
        console.log(data.value.alpha3Code);
        this.selectedCountryValue=data.value.name
        //this.states=this.countryServiceObj.getAllStatesByCode(data.value.alpha3Code);

         var stateObj=new State(0,"",data.value.alpha3Code);
        this.countryServiceObj.getAllStatesByCode(stateObj)
            .subscribe(response=>{
                console.log(response);
            this.states=response;
        })
    }

    selectedState(data)
    {
      this.selectedStateValue=data.value.stateName;
    }
    save()
    {
        console.log(this.regForm.value);
        var userObj=new ERICUSER(this.regForm.value.mobileNo,
            this.regForm.value.firstName,
            this.regForm.value.lastName,
            this.regForm.value.dob,
            this.regForm.value.email,
            this.selectedCountryValue,
            this.selectedStateValue,
            this.selectedGender);
        console.log(userObj);
        this.countryServiceObj.addUser(userObj).subscribe(response=>
        {
            console.log(response)
            this.snackBar.openFromComponent(SaveRecordComponent, {
                duration: 2000,
            });
            this.router.navigate(["/Login"]);
        },error => console.log('oops', error))

    }
}


@Component({
    selector: 'snack-bar-component',
    templateUrl: './home/register/register.snack-bar-component.html',
    styles: [`
    .saverecord {
      color: hotpink;
    }
  `],
})
export class SaveRecordComponent {}