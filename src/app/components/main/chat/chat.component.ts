import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DataChatsService } from '../../shared/data-chats.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  @Input() chat;
  chats: any [] | undefined;
  form: FormGroup;
  message = '';
  answerMessage;
  constructor(private dataList: DataChatsService) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      message: new FormControl("", [Validators.required, Validators.minLength(1)])
    })
    this.chats = this.dataList.getData();
  }

  onSubmit(form){
    // user message
    let newMessage = form.value.message.trim();
    this.message = '';
    this.chat.latestMessage = newMessage;
    this.chat.messages.unshift({

      value: newMessage,
      time: new Date(),
      me: true,
    });
    this.form.reset();
    // answer message
    this.dataList.getAnswerData().subscribe(res =>{
      this.answerMessage = res;
      this.chat.latestMessage = this.answerMessage;
     this.chat.messages.unshift({
      value: this.answerMessage,
      time: new Date(),
      me: false,
    });
    sessionStorage.setItem('chat',JSON.stringify(this.chats))
    });
  }

}

