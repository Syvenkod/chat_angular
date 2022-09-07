import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataChatsService {

  constructor(private http: HttpClient) { }

  chats = [
    {
      userId: 1,
      avatar: '../../../assets/images/women_1.jpg',
      name: 'Alice Freeman',
      time: 'Jun 12, 2017',
      latestMessage: 'You are the best!!',
      messages: [
        { id: 1, value: 'You are the best!!', time: '06/12/2017, 4:00 AM', me: false},
        { id: 2, value: 'I am fine thanks', time: '06/12/2017, 3:00 AM', me: true },
        { id: 3, value: 'How are you?', time: '06/12/2017, 2:00 AM', me: false},
      ],
    },
    {
      userId: 2,
      avatar: '../../../assets/images/women_2.jpg',
      name: 'Josefina',
      time: 'Feb 18, 2017',
      latestMessage: 'We are losing money!Quick!',
      messages: [
        { id: 1, value: 'We are losing money!Quick!', time: '06/12/2017, 4:00 AM', me: false},
        { id: 2, value: 'I am fine thanks', time: '06/12/2017, 3:00 AM', me: true },
        { id: 3, value: 'How are you?', time: '06/12/2017, 2:00 AM', me: false},
      ],
    },
    {
      userId: 3,
      avatar: '../../../assets/images/men_1.jpg',
      name: 'Velazquez',
      time: 'Mar 18, 2017',
      latestMessage: 'Quckly come to the meeting room 1B, we have a big server issue',
      messages: [
        { id: 1, value: 'Quckly come to the meeting room 1B, we have a big server issue', time: '06/12/2017, 4:00 AM', me: false },
        { id: 2, value: 'I am fine thanks', time: '06/12/2017, 3:00 AM', me: true },
        { id: 3, value: 'How are you?', time: '06/12/2017, 2:00 AM', me: false},
      ],
    },
    {
      userId: 4,
      avatar: '../../../assets/images/men_2.jpg',
      name: 'Barrera',
      time: 'Feb 18, 2017',
      latestMessage: 'lol',
      messages: [
        { id: 1, value: 'lol', time: '06/12/2017, 4:00 AM', me: false },
        { id: 2, value: 'I am fine thanks', time: '8:21', me: true },
        { id: 3, value: 'How are you?', time: '8:21', me: false},
      ],
    },
  ]
  getData(){
    if (sessionStorage.length > 0) {
      let data = JSON.parse(sessionStorage.getItem('chat'));
      return data;
    }
    else {
    let data:any = [];
    this.chats.forEach(chat =>{
        data.push(chat);
    })
    return data;}
  }

  getAnswerData(){
    return this.http.get('https://api.chucknorris.io/jokes/random').pipe(
      delay(5000),)
  }
}
