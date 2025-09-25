# Demo Booking Setup Instructions

## Overview
The demo booking system has been implemented with the following flow:
1. User clicks "Book a Demo Call" → Redirected to sign-up/sign-in
2. After authentication → Redirected to `/book` page
3. User fills out comprehensive demo request form
4. Form data is stored in Google Sheets
5. User can skip the form and go directly to dashboard

## Setup Required

### 1. Install Dependencies
Run the following command to install the new dependencies:
```bash
npm install google-spreadsheet google-auth-library
```

### 2. Google Sheets Setup

#### Step 1: Create a Google Sheet
1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Copy the Sheet ID from the URL (the long string between `/d/` and `/edit`)
4. Note down this Sheet ID

#### Step 2: Create a Service Account
1. Go to [Google Cloud Console](https://console.cloud.google.com)
2. Create a new project or select existing one
3. Enable the Google Sheets API
4. Go to "Credentials" → "Create Credentials" → "Service Account"
5. Fill in the service account details
6. Download the JSON key file
7. Extract the following from the JSON:
   - `client_email` (this is your service account email)
   - `private_key` (this is your private key)

#### Step 3: Share the Sheet
1. Open your Google Sheet
2. Click "Share" button
3. Add the service account email (from step 2) as an Editor

### 3. Environment Variables
Add the following to your `.env` file:

```env
# Google Sheets Integration
GOOGLE_SHEET_ID=your_sheet_id_here
GOOGLE_SERVICE_ACCOUNT_EMAIL=your_service_account_email_here
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----
your_private_key_here
-----END PRIVATE KEY-----"
```

**Note:** Make sure to keep the quotes around the private key and preserve the line breaks.

## Form Fields

The demo booking form includes:

### Required Fields:
- Full Name *
- Company *
- Email *

### Optional Fields:
- Phone
- Preferred Date
- Preferred Time
- Focus Area (dropdown)
- Domain (dropdown)
- Use Cases (multi-select checkboxes)
- Number of documents (dropdown with ranges)

## Features Implemented

### 1. Authentication Flow
- Users must sign up/sign in before booking a demo
- Automatic redirect to `/book` page after authentication
- User data (name, email) pre-populated from Clerk

### 2. Form Validation
- Real-time validation for required fields
- Email format validation
- Phone number format validation
- Error messages with animations

### 3. Google Sheets Integration
- Automatic submission to Google Sheets
- Includes timestamp and user ID
- Handles arrays (use cases) by joining with commas

### 4. Skip Functionality
- "Skip, I'll do it later" button in top-right corner
- Only shown after authentication
- Redirects to dashboard

### 5. Success Flow
- Success message after form submission
- Link to dashboard after completion

## File Structure

```
app/
├── book/
│   └── page.tsx              # Demo booking form page
├── api/
│   └── submit-demo-request/
│       └── route.ts          # API endpoint for Google Sheets
└── dashboard/
    └── page.tsx              # Dashboard (already existed)

components/
└── HeroSection.tsx           # Updated to redirect to sign-up
```

## Testing

1. Click "Book a Demo Call" on the homepage
2. Complete sign-up/sign-in process
3. Fill out the demo booking form
4. Check your Google Sheet for the submitted data
5. Test the "Skip" functionality

## Troubleshooting

### Common Issues:
1. **Google Sheets API not enabled**: Enable it in Google Cloud Console
2. **Permission denied**: Make sure the service account email has edit access to the sheet
3. **Private key format**: Ensure the private key includes the header/footer and line breaks
4. **Sheet not found**: Double-check the Sheet ID in the URL

### Error Logs:
Check the browser console and server logs for detailed error messages.
