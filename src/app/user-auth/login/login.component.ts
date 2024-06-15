import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
public singupUser:any[]=[];
public singupObj:any={
  username:'',
  email:'',
  pswd:''
};
loginObj:any={
  username:'',
  pswd:'',
}
ngOnInit(): void {
  const localData=localStorage.getItem('singupUser');
  if(localData !=null){
    this.singupUser=JSON.parse(localData)
  }
}

getsignupUser(){
  this.singupUser.push(this.singupObj);
  localStorage.setItem('singupUser',JSON.stringify(this.singupUser))
  console.log(this.singupObj);
   this.singupObj ={
    username:'',
    email:'',
    pswd:''
  };
  
}

getloginUser(){
  // debugger
  const isUserExit= this.singupUser.find(m=>m.username == this.loginObj.username && m.parse == this.loginObj.parse)
  if(isUserExit !=undefined){
    alert('Successfully Login')
}else{
  alert('User Name not Found!..')
}
}

  constructor() { }

 
}
