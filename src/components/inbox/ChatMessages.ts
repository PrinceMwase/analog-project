import { Component, Input } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ContactType } from '../../app/pages/inbox/customer/[customer].page';

@Component({
  imports: [CommonModule, NgOptimizedImage],
  standalone: true,
  selector: 'app-chat-messages',
  template: `
    <div
      class="flex justify-between py-4"
      *ngFor="let conversation of conversations"
    >
      <div class="flex grow space-x-2">
        <img
          class="rounded-full"
          [ngSrc]="conversation.contact.imageUrl"
          width="20"
          height="20"
        />
        <div class="truncate">{{ conversation.initialMessage }}</div>
      </div>
      <div class="truncate text-sm font-thin text-gray-400">
        {{ conversation.date }}
      </div>
    </div>
  `,
})
export class ChatMessagesComponent {
  @Input() conversations: {
    contact: ContactType;
    initialMessage: string;
    date: string;
    open: boolean;
  }[] = []; // Adjust the type based on your data structure
}
