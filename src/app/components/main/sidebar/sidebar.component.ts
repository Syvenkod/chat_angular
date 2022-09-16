import { AfterViewChecked, Component, EventEmitter, OnInit, Output  } from '@angular/core';
import { AuthService } from '../../shared/auth-services/auth.service';
import { DataChatsService } from '../../shared/data/data-chats.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit, AfterViewChecked {

  @Output() chatClicked: EventEmitter<any> = new EventEmitter();
  searchText: string;
  chats: any [] | undefined;
  public user: any;

  constructor(private dataList: DataChatsService,
              public authService: AuthService) {}


  ngOnInit(): void {
    this.chats = this.dataList.getData();
    this.user = JSON.parse(localStorage.getItem('user'));
  }

  sortChats(){
    this.chats.sort(function(a,b){
    return new Date(b.time).getTime() - new Date(a.time).getTime()
  })
  }

  ngAfterViewChecked(): void {
    sessionStorage.setItem('chat',JSON.stringify(this.chats));
    this.sortChats();
    this.user = JSON.parse(localStorage.getItem('user'));
  }
}
