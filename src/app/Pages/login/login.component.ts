import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: any = {
    username: null,
    password: null
  }

  constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit(): void {
  }

  onSubmit(): void{
    console.log(this.form)
    this.http.post('http://localhost:8080/login', this.form).subscribe(
      data => console.log(data),
  
      err => console.log(err),
      //this.router.navigate(['/accueil'])
    );
    this.router.navigate(['/accueil'])
  
  }

}
