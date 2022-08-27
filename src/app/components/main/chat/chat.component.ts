import { AfterContentChecked, Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DataChatsService } from '../../shared/data-chats.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit, AfterContentChecked  {
  @Input() chat;
  chats: any [] | undefined;
  form: FormGroup;
  message: string;
  constructor(private dataList: DataChatsService) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      message: new FormControl("", [Validators.required, Validators.minLength(1)])
    })
  }

  onSubmit(form){
    let newMessage = form.value.message;
    this.message = '';
    this.chat.latestMessage = newMessage;
    this.chat.time = new Date().toLocaleDateString('en-us',{month: 'short', day:'numeric', year:'numeric'});
    this.chat.messages.unshift({
      value: newMessage,
      time: new Date().toLocaleDateString('en-us',{month: 'numeric', day:'numeric', year:'numeric', hour:'numeric', minute:'numeric'}),
      me: true,
    });
    this.sendAnswerMessage();
    this.form.reset();
  }

  sendAnswerMessage(){
      this.dataList.getAnswerData().subscribe(res =>{
      let answerMessage = res['value'];
      this.chat.latestMessage = answerMessage;
      this.chat.time = new Date().toLocaleDateString('en-us',{month: 'short', day:'numeric', year:'numeric'});
      this.chat.messages.unshift({
      value: answerMessage,
      time: new Date().toLocaleDateString('en-us',{month: 'numeric', day:'numeric', year:'numeric', hour:'numeric', minute:'numeric'}),
      me: false,
    });
    });
  }


  ngAfterContentChecked(): void {
    sessionStorage.setItem('chat',JSON.stringify(this.chats));
  }
}

