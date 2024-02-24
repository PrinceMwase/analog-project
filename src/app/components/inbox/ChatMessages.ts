import { Component, Input } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ConversationList, Conversation } from '../../../interfaces/IConversation';
import { Output, EventEmitter } from '@angular/core';
import * as moment from 'moment';
import { Contact } from '../../../interfaces/ICustomer';

@Component({
  imports: [CommonModule, NgOptimizedImage],
  standalone: true,
  selector: 'app-chat-messages',
  template: `

    <!-- Show the Selected Contacts Conversation -->
    <ng-container *ngIf="selectedContact">
      <div
        class="flex justify-between py-4 cursor-pointer"
        *ngFor="let conversation of filteredCustomerConversations()"
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
        <div class="truncate text-sm font-thin text-gray-400">
          {{ getDate(conversation.created_at) }}
        </div>
      </div>
    </ng-container>

    <!-- Select if a contact is not Selected -->
    <ng-container *ngIf="!selectedContact">
      <div>Please Select a Contact</div>
    </ng-container>
  `,
})
export class ChatMessagesComponent {
  @Output() enterChatEvent = new EventEmitter<string>();

  @Input() selectedContact?: Contact;

  @Input() conversationsList: ConversationList = {
    conversations: [],
  }; // Adjust the type based on your data structure

  ngOnInit(): void {
    console.log('chats');
    console.log(this.selectedContact);
    
  }

  filteredCustomerConversations(): Conversation[] {
    if (this.selectedContact) {
      return this.conversationsList.conversations.filter(
        (value) => value.source.author.id === this.selectedContact!.id
      );
    }
    return [];
  }

  getRandomImageUrl() {
    return 'https://picsum.photos/20';
  }

  getDate(value: number) {
    return moment(new Date(value)).fromNow();
  }

  enterNewChat(value: string) {
    this.enterChatEvent.emit(value);
  }
}
