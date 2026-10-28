import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth-service';
import { LoginRequest } from '../../models/LoginRequest';

@Component({
  selector: 'app-login-component',
  standalone: false,
  styleUrl: './login-component.css',
  templateUrl: './login-component.html',
})
export class LoginComponent implements OnInit{

   public mensaje!: string;
  @ViewChild("cajausuario") cajausuario!: ElementRef;
  @ViewChild("cajapassword") cajapassword!: ElementRef;

  constructor(
    private _service: AuthService,
    private _cdr: ChangeDetectorRef,
    private  _router : Router
  ){}

  async iniciarSesion(): Promise<void>{

      const userName = this.cajausuario.nativeElement.value;
      const password = this.cajapassword.nativeElement.value;
    const credentials = new LoginRequest(
      this.userName,
      this.password
    )
  }

  ngOnInit(): void {


    
  }
}

