import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

// Componente Tarefa sendo criado aqui 

@Component({
  selector: 'app-tarefa',//nome do componente
  imports: [FormsModule, CommonModule],//importações necessárias
  templateUrl: './tarefa.html',//caminho do template html
  styleUrl: './tarefa.css',//caminho do css
})


// trabalhando com o componente tarefe, ele vira uma classe
export class Tarefa {
  novaTarefa: String = '';
  listaTarefas: String[] = [  'Praticar Angular', 'Estudar Angular', 'Finalizar projeto'];

  //função para adicionar tarefa, configurando a função em si 
  adicionarTarefa() {
    if (this.novaTarefa.trim() !== '') {//verifica se a nova tarefa não está vazia
      this.listaTarefas.push(this.novaTarefa.trim());//adiciona a nova tarefa na lista
      this.novaTarefa = '';//limpa o campo de entrada
    } }

    //função para remover tarefa, configurando a função em si
    removerTarefa(index: number) {
      this.listaTarefas.splice(index, 1);//remove a tarefa da lista com base no índice fornecido
      }

  }

