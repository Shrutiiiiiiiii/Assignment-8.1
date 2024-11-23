import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {

  @Output() public MyEvent = new EventEmitter();

  public Message : string = "";

  sendMessage(){
    this.MyEvent.emit(this.Message);
  }
}
