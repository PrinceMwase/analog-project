import { Component, Input } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { RxStompService } from '../../../src/app/rx-stomp.service';
import { Message } from '@stomp/stompjs';

import { rxStompServiceFactory } from '../../../src/app/rx-stomp-service-factory';
import { Subscription } from 'rxjs';

@Component({
  imports: [CommonModule, NgOptimizedImage, FormsModule],
  standalone: true,
  selector: 'app-reply-messages',
  providers: [
    {
      provide: RxStompService,
      useFactory: rxStompServiceFactory,
    },
  ],
  template: `
    <div class="flex flex-col min-h-full relative">
      <!-- First Message -->
      <div class="sticky top-0 bg-gray-100/90 px-2">
        <div class="flex grow space-x-2">
          <img
            class="rounded-full"
            [ngSrc]="getRandomImageUrl()"
            width="20"
            height="20"
          />
          <div
            class="truncate"
            [innerHTML]="thisConversation.source.body"
          ></div>
        </div>

        <div class="truncate text-sm font-thin text-gray-400">
          {{ getDate(thisConversation.created_at) }}
        </div>
      </div>

      <!-- Chats -->
      <div class="grow">
        <span>replies</span>
        <div
          class="flex px-2 space-y-2"
          *ngFor="
            let conversation of thisConversation.conversation_parts
              .conversation_parts
          "
          [ngClass]="{ 'justify-end': conversation.author.type === 'admin' }"
        >
          <div
            class="flex items-start space-y-2 gap-2.5"
            [ngClass]="{
              'flex-row-reverse': conversation.author.type === 'admin'
            }"
          >
            <img
              class="w-8 h-8 rounded-full"
              [ngSrc]="getRandomImageUrl()"
              width="20"
              height="20"
              alt="Jese image"
            />
            <div
              class="flex flex-col w-full max-w-[320px] leading-1.5 p-4  bg-gray-100 dark:bg-gray-700"
              [ngClass]="{
                'rounded-s-xl rounded-se-xl':
                  conversation.author.type === 'admin',
                'rounded-e-xl rounded-es-xl':
                  conversation.author.type !== 'admin'
              }"
            >
              <div class="flex items-center space-x-2 rtl:space-x-reverse">
                <span
                  class="text-sm font-semibold text-gray-900 dark:text-white"
                  >{{
                    conversation.author.name
                      ? conversation.author.name.split(' ')[0]
                      : conversation.author.email.split('@')[0]
                  }}</span
                >
              </div>
              <p
                class="text-sm font-normal py-2.5 text-gray-900 dark:text-white"
                [innerHTML]="conversation.body"
              ></p>
              <span
                class="text-xs font-normal text-gray-500 dark:text-gray-400"
                >{{ getDate(conversation.created_at) }}</span
              >
            </div>
          </div>
        </div>
      </div>

      <!-- reply and send message -->
      <div class="sticky bottom-0 px-2">
        <form #f="ngForm" (ngSubmit)="onSubmit(f)" novalidate>
          <div class="flex space-x-2">
            <input
              type="text"
              ngModel
              required
              name="messageBody"
              placeholder="reply to message..."
              #messageBody="ngModel"
              class="grow w-full border-b-2 border-black bg-white"
            />

            <button class="font-bold">send</button>
          </div>
        </form>
      </div>
    </div>
  `,
})
export class ReplyMessagesComponent {
  @Input() conversationId: string = ''; // Adjust the type based on your data structure
  thisConversation: SingleConversation = {
    type: '',
    id: '',
    created_at: 0,
    updated_at: 0,
    waiting_since: null,
    snoozed_until: null,
    source: {
      type: '',
      id: '',
      delivered_as: '',
      subject: '',
      body: '',
      author: {
        type: '',
        id: '',
        name: '',
        email: '',
        avatar: {
          type: '',
          image_url: '',
        },
      },
      attachments: [],
      url: null,
      redacted: false,
    },
    contacts: {
      type: '',
      contacts: [],
    },
    first_contact_reply: null,
    admin_assignee_id: null,
    team_assignee_id: null,
    open: false,
    state: '',
    read: false,
    tags: {
      type: '',
      tags: [],
    },
    priority: '',
    sla_applied: null,
    statistics: null,
    conversation_rating: null,
    teammates: null,
    title: null,
    linked_objects: {
      type: '',
      data: [],
      total_count: 0,
      has_more: false,
    },
    conversation_parts: {
      type: '',
      conversation_parts: [],
      total_count: 0,
    },
  };

  // @ts-ignore, to suppress warning related to being undefined
  private topicSubscription: Subscription;

  constructor(
    private httpClient: HttpClient,
    private router: Router,
    private stomp: RxStompService
  ) {}
  ngOnInit(): void {
    // watching for received messages
    this.topicSubscription = this.stomp
      .watch('/topic/reply')
      .subscribe((message: any) => {
        console.log(message);
      });

    // Make an HTTP request to your API endpoint
    const reqSingleConversation = this.httpClient.get<any>(
      `http://localhost:8080/getAdminConversation?id=${this.conversationId}`
    );

    reqSingleConversation.subscribe({
      next: (value: SingleConversation) => {
        this.thisConversation = value;
      },
    });
  }

  // stop the watch
  ngOnDestroy() {
    this.topicSubscription.unsubscribe();
  }

  onSubmit(f: NgForm) {
    if (isNaN(parseInt(this.thisConversation.id)) && f.valid) {
      return false;
    }

    const reqReplyMessage = this.httpClient.post<any>(
      'http://localhost:8080/adminReplyToConversation',
      {
        ...f.value,
        attachmentLink: 'i',
        messageId: this.thisConversation.id,
      }
    );

    reqReplyMessage.subscribe({
      next: (value: ConversationPart) => {
        this.thisConversation.conversation_parts.conversation_parts.push(value);
      },
    });

    return this.router.navigateByUrl('/inbox/customer/1');
  }
  getRandomImageUrl() {
    return 'https://picsum.photos/20';
  }

  getDate(value: number) {
    return new Date(value);
  }
}
