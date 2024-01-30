import { Component, Input } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ContactType } from '../../app/pages/inbox/customer/[customer].page';
import { ConversationList } from '../../interfaces/IConversation';
import { Output, EventEmitter } from '@angular/core';
import * as moment from 'moment';


@Component({
  imports: [CommonModule, NgOptimizedImage],
  standalone: true,
  selector: 'app-chat-messages',
  template: `
    <div
      class="flex justify-between py-4"
      *ngFor="let conversation of conversationsList.conversations"
      (click)="enterNewChat(conversation.id)"
    >
      <div class="flex grow space-x-2">
        <img
          class="rounded-full"
          [ngSrc]="getRandomImageUrl()"
          width="20"
          height="20"
        />
        <div class="truncate" [innerHTML]="conversation.source.body"></div>
      </div>
      <div class="truncate text-sm font-thin text-gray-400" >
        {{ getDate(conversation.created_at) }}
      </div>
    </div>
  `,
})
export class ChatMessagesComponent {
  @Output() enterChatEvent = new EventEmitter<string>();

  @Input() conversationsList: ConversationList = {
    conversations: [],
  }; // Adjust the type based on your data structure

  ngOnInit(): void {
    console.log("chats");
    
  }

  
  getRandomImageUrl() {
    return 'https://picsum.photos/20';
  }

  getDate(value: number) {
    return moment( new Date(value) ).fromNow()
  }

  enterNewChat(value: string) {
    this.enterChatEvent.emit(value);
  }
}
