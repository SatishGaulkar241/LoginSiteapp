import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  public signUpArray:any[]=[]
  public signUpObj:any={
    userName:'',
    email:'',
    password:'',
  }
  public loginObj:any={
    userName:'',
    password:'',
  }
  ngOnInit(): void {
    const locatData=localStorage.getItem('signUpArray')
    if(locatData !=null){
      this.signUpArray=JSON.parse(locatData)
    }
  }
  getSignUp(){
    this.signUpArray.push(this.signUpObj)
    localStorage.setItem('signUpArray',JSON.stringify(this.signUpArray))
    console.log(this.signUpArray);
    this.signUpObj={
      userName:'',
      email:'',
      password:'',
    }
    
  }
  getLogin(){
    // debugger
    const isUserExit=this.signUpArray.find(m=>m.userName == this.loginObj.userName && m.password == this.loginObj.password)
    if(isUserExit !=undefined){
      alert('Login Success')
    }else{
      alert('User Not Found!..')
    }
  }

  constructor() { }

 
 

}
