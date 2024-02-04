export interface ConversationList {
  type?: 'conversation.list';
  pages?: Pages;
  total_count?: number;
  conversations: Conversation[];
}

interface Pages {
  type: 'pages';
  page: number;
  per_page: number;
  total_pages: number;
}

export interface Conversation {
  type: 'conversation';
  id: string;
  created_at: number;
  updated_at: number;
  waiting_since: null | number;
  snoozed_until: null | number;
  source: Source;
  contacts: Contacts;
  first_contact_reply: null;
  admin_assignee_id: null | number;
  team_assignee_id: null | string;
  open: boolean;
  state: "open" | "closed" | "snoozed";
  read: boolean;
  tags: Tags;
  priority: 'not_priority' | 'priority';
  sla_applied: null;
  statistics: null;
  conversation_rating: null;
  teammates: null;
  title: null | string;
  custom_attributes: {};
  topics: {};
  ticket: null;
  linked_objects: LinkedObjects;
}

interface Source {
  type: string;
  id: string;
  delivered_as: string;
  subject: string;
  body: string;
  author: Author;
  attachments: any[];
  url: null;
  redacted: boolean;
}

interface Author {
  type: 'admin';
  id: string;
  name: string;
  email: string;
}

interface Contacts {
  type: 'contact.list';
  contacts: Contact[];
}

interface Contact {
  type: 'contact';
  id: string;
  external_id: string;
}

interface Tags {
  type: 'tag.list';
  tags: any[];
}

interface LinkedObjects {
  type: 'list';
  data: any[];
  total_count: number;
  has_more: boolean;
}
