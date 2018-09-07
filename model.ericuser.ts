export class ERICUSER {
    private mobileNo:number;
    private firstName:string;
    private lastName:string;
    private dob:Date;
    private email:string;
    private country:string;
    private state:string;
    private gender:string;

    constructor(mobileNo:number,fname:string,lname:string,dob:Date,email:string,country:string,state:string,gender:string)
    {
        this.mobileNo=mobileNo;
        this.firstName=fname;
        this.lastName=lname;
        this.dob=dob;
        this.email=email;
        this.country=country;
        this.state=state;
        this.gender=gender;
    }

    get FirstName():string
    {
        return this.firstName;

    }

    get LastName():string
    {
        return this.lastName;

    }
    get DOB():Date
    {
        return this.dob;

    }
    get Email():string
    {
        return this.email;

    }

    get Country():string
    {
        return this.country;

    }
    get State():string
    {
        return this.state;

    }

    get Gender():string
    {
        return this.gender;

    }

    get MobileNo():number
    {
        return this.mobileNo;

    }

}
