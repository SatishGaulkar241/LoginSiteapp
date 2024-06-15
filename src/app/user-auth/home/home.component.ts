import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  public signUpArray:any[]=[];
  public signUpObj:any={
    name:'',
    email:'',
    pswd:''
  }
  public loginObj:any={
    name:'',
    pswd:''
  }

  ngOnInit(): void {
    const locatDatas=localStorage.getItem('signUpArray');
    if(locatDatas !=null){
      this.signUpArray=JSON.parse(locatDatas)
    }
  } 

  getSignUpUser(){
    debugger
    this.signUpArray.push(this.signUpObj);
    localStorage.setItem('signUpArray',JSON.stringify(this.signUpArray))
    console.log(this.signUpArray);
    this.signUpObj={
      name:'',
      email:'',
      pswd:''
    }    
  }
  getLoginUser(){
    debugger
    const isexit=this.signUpArray.find(m=>m.name == this.loginObj.name && m.pswd ==this.loginObj.pswd)
    if(isexit !=undefined){
      alert('Login Successfull')
    }else{
      alert('Invalid Credentials')
    }
  }
  constructor() { }
 

}
