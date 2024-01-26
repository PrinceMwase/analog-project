// A contact object
export interface Contact {
  type: string; // The type of object
  id: string; // The unique identifier for the contact which is given by Intercom
  external_id: string | null; // The unique identifier for the contact which is provided by the Client
  workspace_id: string; // The id of the workspace which the contact belongs to
  role: string; // The role of the contact
  email: string; // The contacts email
  phone: string | null; // The contacts phone
  formatted_phone: string | null; // The contacts phone number normalized to the E164 format
  name: string | null; // The contacts name
  owner_id: number | null; // The id of an admin that has been assigned account ownership of the contact
  has_hard_bounced: boolean; // Whether the contact has had an email sent to them hard bounce
  marked_email_as_spam: boolean; // Whether the contact has marked an email sent to them as spam
  unsubscribed_from_emails: boolean; // Whether the contact is unsubscribed from emails
  created_at: number; // (UNIX timestamp) The time when the contact was created
  updated_at: number; // (UNIX timestamp) The time when the contact was last updated
  signed_up_at: number | null; // (UNIX timestamp) The time specified for when a contact signed up
  last_seen_at: number | null; // (UNIX timestamp) The time when the contact was last seen (either where the Intercom Messenger was installed or when specified manually)
  last_replied_at: number | null; // (UNIX timestamp) The time when the contact last messaged in
  last_contacted_at: number | null; // (UNIX timestamp) The time when the contact was last messaged
  last_email_opened_at: number | null; // (UNIX timestamp) The time when the contact last opened an email
  last_email_clicked_at: number | null; // (UNIX timestamp) The time when the contact last clicked a link in an email
  language_override: string | null; // A preferred language setting for the contact, used by the Intercom Messenger even if their browser settings change
  browser: string | null; // The name of the browser which the contact is using
  browser_version: string | null; // The version of the browser which the contact is using
  browser_language: string | null; // The language set by the browser which the contact is using
  avatar: {
    type: string; // The type of object
    image_url: string | null; // An image URL containing the avatar of a contact
  } | null;
}

// A cursor-based pagination object
interface CursorBasedPages {
  type: string; // The type of object pages
  page: number; // The current page
  next: {
    page: number; // The next page
    starting_after: string; // The cursor for the next page
    per_page: number; // Number of results per page
  } | null;
  total_pages: number; // Total number of pages
}

// The main type
export type CustomerList = {
  type: string; // Always list
  data: Contact[]; // The list of contact objects
  total_count: number; // A count of the total number of objects
  pages: CursorBasedPages | null; // A cursor-based pagination object
};
