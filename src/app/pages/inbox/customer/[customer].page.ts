import { Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ChatIconComponent } from '../../../../components/icons/ChatIcon';
import { AddIconComponent } from '../../../../components/icons/AddIcon';
import { CallIconComponent } from '../../../../components/icons/CallIcon';
import * as moment from 'moment';

type ContactType = {
  name: string;
  contact: string;
  imageUrl: string;
  unReadMessage: boolean;
};

@Component({
  standalone: true,
  imports: [
    CommonModule,
    ChatIconComponent,
    NgOptimizedImage,
    AddIconComponent,
    CallIconComponent,
  ],
  template: `
    <div class="flex min-w-full h-screen absolute top-0 bg-white text-gray-700">
      <div class="basis-1/6 border min-h-full">
        <!-- Contacts Container -->
        <div class="max-h-full divide-y-2 overflow-auto">
          <div
            class="flex justify-between align-middle p-4"
            *ngFor="let contact of contacts"
          >
            <img
              class="rounded-full"
              [ngSrc]="contact.imageUrl"
              width="20"
              height="20"
            />
            <div class="ml-2 grow text-left truncate">
              {{ contact.name }}
            </div>
            <div *ngIf="contact.unReadMessage">
              <span>
                <chat-icon></chat-icon>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="max-h-screen border grow flex flex-col divide-y-2">
        <!-- Tabs -->
        <div class="flex flex-row bg-gray-200 pt-2">
          <div
            class="basis-1/3 text-gray-400 cursor-pointer transition-all "
            *ngFor="let tab of tabs; let i = index"
            (click)="selectTab(i)"
            [ngClass]="{
              'border-b-2 border-gray-700 font-bold': selectedIndex === i,
              'text-gray-400': selectedIndex !== i
            }"
          >
            <span class="capitalize">{{ tab }}</span>
          </div>
        </div>

        <!-- Message Contaier -->
        <div class="grow px-2 divide-y-2 max-h-full overflow-auto">
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
        </div>

        <!-- Footer -->
        <div class="flex p-4 justify-end space-x-2 text-white">
          <div
            class="border rounded-full px-4 bg-sky-700 flex items-center space-x-2"
          >
            <add-icon></add-icon>

            <span> compose </span>
          </div>
          <div
            class="border rounded-full px-4 bg-slate-700 flex items-center space-x-2"
          >
            <call-icon></call-icon>
            <span> call </span>
          </div>
        </div>
      </div>
    </div>
  `,
})
export default class CustomerPage {
  contacts: ContactType[] = [
    {
      name: 'prince Mwase',
      contact: '+265884652513',
      imageUrl: this.getRandomImageUrl(),
      unReadMessage: false,
    },
    {
      name: 'prince Mwase',
      contact: '+265884652513',
      imageUrl: this.getRandomImageUrl(),
      unReadMessage: false,
    },
    {
      name: 'prince Mwase',
      contact: '+265884652513',
      imageUrl: this.getRandomImageUrl(),
      unReadMessage: true,
    },
    {
      name: 'prince Mwase',
      contact: '+265884652513',
      imageUrl: this.getRandomImageUrl(),
      unReadMessage: false,
    },
    {
      name: 'prince Mwase',
      contact: '+265884652513',
      imageUrl: this.getRandomImageUrl(),
      unReadMessage: false,
    },
  ];

  conversations: {
    contact: ContactType;
    initialMessage: string;
    date: string;
    open: boolean;
  }[] = [
    {
      contact: {
        name: 'prince Mwase',
        contact: '+265884652513',
        imageUrl: this.getRandomImageUrl(),
        unReadMessage: false,
      },
      initialMessage: 'The Mercedes Offer: can we meet in the morning?',
      date: moment(new Date()).fromNow(),
      open: true,
    },
    {
      contact: {
        name: 'prince Mwase',
        contact: '+265884652513',
        imageUrl: this.getRandomImageUrl(),
        unReadMessage: false,
      },
      initialMessage: 'The Mercedes Offer',
      date: moment(new Date()).fromNow(),
      open: true,
    },
    {
      contact: {
        name: 'prince Mwase',
        contact: '+265884652513',
        imageUrl: this.getRandomImageUrl(),
        unReadMessage: false,
      },
      initialMessage: 'The Mercedes Offer',
      date: moment(new Date()).fromNow(),
      open: true,
    },
    {
      contact: {
        name: 'prince Mwase',
        contact: '+265884652513',
        imageUrl: this.getRandomImageUrl(),
        unReadMessage: false,
      },
      initialMessage: 'The Mercedes Offer',
      date: moment(new Date()).fromNow(),
      open: true,
    },
    {
      contact: {
        name: 'prince Mwase',
        contact: '+265884652513',
        imageUrl: this.getRandomImageUrl(),
        unReadMessage: false,
      },
      initialMessage: 'The Mercedes Offer',
      date: moment(new Date()).fromNow(),
      open: true,
    },
    {
      contact: {
        name: 'prince Mwase',
        contact: '+265884652513',
        imageUrl: this.getRandomImageUrl(),
        unReadMessage: false,
      },
      initialMessage: 'The Mercedes Offer',
      date: moment(new Date()).fromNow(),
      open: true,
    },
    {
      contact: {
        name: 'prince Mwase',
        contact: '+265884652513',
        imageUrl: this.getRandomImageUrl(),
        unReadMessage: false,
      },
      initialMessage: 'The Mercedes Offer',
      date: moment(new Date()).fromNow(),
      open: true,
    },
    {
      contact: {
        name: 'prince Mwase',
        contact: '+265884652513',
        imageUrl: this.getRandomImageUrl(),
        unReadMessage: false,
      },
      initialMessage: 'The Mercedes Offer',
      date: moment(new Date()).fromNow(),
      open: true,
    },
    {
      contact: {
        name: 'prince Mwase',
        contact: '+265884652513',
        imageUrl: this.getRandomImageUrl(),
        unReadMessage: false,
      },
      initialMessage: 'The Mercedes Offer',
      date: moment(new Date()).fromNow(),
      open: true,
    },
    {
      contact: {
        name: 'prince Mwase',
        contact: '+265884652513',
        imageUrl: this.getRandomImageUrl(),
        unReadMessage: false,
      },
      initialMessage: 'The Mercedes Offer',
      date: moment(new Date()).fromNow(),
      open: true,
    },
    {
      contact: {
        name: 'prince Mwase',
        contact: '+265884652513',
        imageUrl: this.getRandomImageUrl(),
        unReadMessage: false,
      },
      initialMessage: 'The Mercedes Offer',
      date: moment(new Date()).fromNow(),
      open: true,
    },
    {
      contact: {
        name: 'prince Mwase',
        contact: '+265884652513',
        imageUrl: this.getRandomImageUrl(),
        unReadMessage: false,
      },
      initialMessage: 'The Mercedes Offer',
      date: moment(new Date()).fromNow(),
      open: true,
    },
    {
      contact: {
        name: 'prince Mwase',
        contact: '+265884652513',
        imageUrl: this.getRandomImageUrl(),
        unReadMessage: false,
      },
      initialMessage: 'The Mercedes Offer',
      date: moment(new Date()).fromNow(),
      open: true,
    },
    {
      contact: {
        name: 'prince Mwase',
        contact: '+265884652513',
        imageUrl: this.getRandomImageUrl(),
        unReadMessage: false,
      },
      initialMessage: 'The Mercedes Offer',
      date: moment(new Date()).fromNow(),
      open: true,
    },
    {
      contact: {
        name: 'prince Mwase',
        contact: '+265884652513',
        imageUrl: this.getRandomImageUrl(),
        unReadMessage: false,
      },
      initialMessage: 'The Mercedes Offer',
      date: moment(new Date()).fromNow(),
      open: true,
    },
    {
      contact: {
        name: 'prince Mwase',
        contact: '+265884652513',
        imageUrl: this.getRandomImageUrl(),
        unReadMessage: false,
      },
      initialMessage: 'The Mercedes Offer',
      date: moment(new Date()).fromNow(),
      open: true,
    },
    {
      contact: {
        name: 'prince Mwase',
        contact: '+265884652513',
        imageUrl: this.getRandomImageUrl(),
        unReadMessage: false,
      },
      initialMessage: 'The Mercedes Offer',
      date: moment(new Date()).fromNow(),
      open: true,
    },
    {
      contact: {
        name: 'prince Mwase',
        contact: '+265884652513',
        imageUrl: this.getRandomImageUrl(),
        unReadMessage: false,
      },
      initialMessage: 'The Mercedes Offer',
      date: moment(new Date()).fromNow(),
      open: true,
    },
  ];

  tabs: string[] = ['chat', 'emails', 'voice mails'];
  selectedIndex: number | null = null;

  selectTab(index: number): void {
    this.selectedIndex = index;
  }
  getRandomImageUrl() {
    return 'https://picsum.photos/20';
  }
}
