// Define the types of the nested objects
type Contact = {
  type: string;
  id: string;
  name: string;
  email: string;
  phone: string;
  avatar: {
    type: string;
    image_url: string;
  };
  last_seen_at: number;
  last_replied_at: number;
  signed_up_at: number;
  unsubscribed_from_emails: boolean;
  session_count: number;
  social_profiles: {
    type: string;
    social_profiles: {
      type: string;
      name: string;
      url: string;
      id: string;
      username: string;
    }[];
  };
  location_data: {
    type: string;
    city_name: string;
    continent_code: string;
    country_code: string;
    country_name: string;
    latitude: number;
    longitude: number;
    postal_code: string;
    region_name: string;
    timezone: string;
  };
  user_agent_data: {
    type: string;
    os: string;
    browser: string;
    version: string;
  };
  custom_attributes: Record<string, any>;
  tags: {
    type: string;
    tags: {
      id: string;
      name: string;
    }[];
  };
  companies: {
    type: string;
    companies: {
      id: string;
      name: string;
      company_id: string;
      created_at: number;
      updated_at: number;
      monthly_spend: number;
      session_count: number;
      user_count: number;
      size: number;
      website: string;
      industry: string;
      custom_attributes: Record<string, any>;
    }[];
  };
};

type Admin = {
  type: string;
  id: string;
  name: string;
  email: string;
  avatar: {
    type: string;
    image_url: string;
  };
};

type ConversationPart = {
  type: string;
  id: string;
  created_at: number;
  updated_at: number;
  notified_at: number;
  part_type: string;
  body: string;
  author: Contact | Admin;
  attachments: {
    type: string;
    name: string;
    url: string;
    content_type: string;
    file_size: number;
    width: number;
    height: number;
  }[];
  external_id: string;
};

type ConversationRating = {
  type: string;
  created_at: number;
  updated_at: number;
  rating: number;
  remark: string;
  contact: Contact;
  teammate: Admin;
};

type ConversationSource = {
  type: string;
  id: string;
  delivered_as: string;
  subject: string;
  body: string;
  author: Contact | Admin;
  attachments: {
    type: string;
    name: string;
    url: string;
    content_type: string;
    file_size: number;
    width: number;
    height: number;
  }[];
};

type ConversationTeammate = {
  type: string;
  id: string;
  name: string;
  email: string;
  avatar: {
    type: string;
    image_url: string;
  };
  last_participated_at: number;
};

type FirstContactReply = {
  type: string;
  created_at: number;
  first_contact_reply_at: number;
  first_contact_reply_time: number;
};

type AppliedSLA = {
  type: string;
  sla_name: string;
  sla_status: string;
  sla_applied_at: number;
  sla_updated_at: number;
  next_sla_event: {
    type: string;
    event_type: string;
    event_time: number;
    event_status: string;
  };
};

type ConversationStatistics = {
  type: string;
  time_to_assignment: number;
  time_to_admin_reply: number;
  time_to_first_close: number;
  time_to_last_close: number;
  median_time_to_reply: number;
  first_response_time: number;
  first_contact_resolution: boolean;
  replies_to_resolve: number;
  resolution_time: number;
  closed_at: number;
  closed_by: Admin;
  reopens: number;
};

// Declare the interface for the response of the API request
interface ConversationResponse {
  type: string;
  id: string;
  created_at: number;
  updated_at: number;
  conversation_message: ConversationPart;
  user: Contact;
  assignee: Admin;
  open: boolean;
  read: boolean;
  conversation_parts: {
    type: string;
    conversation_parts: ConversationPart[];
  };
  conversation_rating: ConversationRating | null;
  source: ConversationSource;
  teammates: ConversationTeammate[] | null;
  first_contact_reply: FirstContactReply | null;
  sla_applied: AppliedSLA | null;
  statistics: ConversationStatistics | null;
}

type SingleConversation = {
  type: string;
  id: string;
  created_at: number;
  updated_at: number;
  waiting_since: number | null;
  snoozed_until: number | null;
  source: {
    type: string;
    id: string;
    delivered_as: string;
    subject: string;
    body: string;
    author: Admin;
    attachments: {
      type: string;
      name: string;
      url: string;
      content_type: string;
      file_size: number;
      width: number;
      height: number;
    }[];
    url: string | null;
    redacted: boolean;
  };
  contacts: {
    type: string;
    contacts: Contact[];
  };
  first_contact_reply: FirstContactReply | null;
  admin_assignee_id: string | null;
  team_assignee_id: string | null;
  open: boolean;
  state: string;
  read: boolean;
  tags: {
    type: string;
    tags: {
      id: string;
      name: string;
    }[];
  };
  priority: string;
  sla_applied: AppliedSLA | null;
  statistics: ConversationStatistics | null;
  conversation_rating: ConversationRating | null;
  teammates: ConversationTeammate[] | null;
  title: string | null;
  custom_attributes?: Record<string, any>;
  topics?: Record<string, any>;
  ticket?: any | null;
  linked_objects: {
    type: string;
    data: any[];
    total_count: number;
    has_more: boolean;
  };
  conversation_parts: {
    type: string;
    conversation_parts: ConversationPart[];
    total_count: number;
  };
};
