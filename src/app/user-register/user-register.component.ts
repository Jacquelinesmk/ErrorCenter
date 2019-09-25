import { MatDialog } from '@angular/material';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  formCadastro;
  valoresForm: Object;
  conversao;

  constructor(private fb: FormBuilder, public dialog: MatDialog, private router: Router) { }

  ngOnInit() {
    localStorage.clear();
    this.formCadastro = this.fb.group({
      nome: [''],
      cpf: [],
      email: [],
      telefone: [],
      endereco: []
    });

    this.formCadastro.valueChanges.pipe(
      debounceTime(1000))
      .subscribe(res => {
        console.log(res);
        this.valoresForm = res;
      });

  }

  cadastro() {
    console.log(this.formCadastro.value);
    this.conversao = JSON.stringify(this.valoresForm);
    console.log(this.conversao);
    localStorage.setItem('cadastro', this.conversao);

    this.verificaCadastro();
  }

  verificaCadastro() {
    setTimeout(() => {
      if (localStorage.getItem('cadastro')) {
        // TODO REDIRECIIONAR PARA PAGINA DE CADASTRO CONCLUIDO
        this.router.navigate(['/succesful-register']);
      } else {
        return false;
      }
    }, 200);
  }

}
