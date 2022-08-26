import { AfterContentChecked, Component, EventEmitter, OnInit, Output  } from '@angular/core';
import { DataChatsService } from '../../shared/data-chats.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit, AfterContentChecked {

  @Output() chatClicked: EventEmitter<any> = new EventEmitter();
  searchText: string;
  chats: any [] | undefined;


  constructor(private dataList: DataChatsService) {}


  ngOnInit(): void {
    this.chats = this.dataList.getData();
  }
  ngAfterContentChecked(): void {
  }

}
