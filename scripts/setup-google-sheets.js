/**
 * Google Sheets Setup Helper
 * 
 * This script helps you set up Google Sheets integration for the demo booking system.
 * Follow these steps:
 */

console.log(`
🚀 GOOGLE SHEETS SETUP GUIDE
============================

Step 1: Create a Google Sheet
-----------------------------
1. Go to https://sheets.google.com
2. Create a new spreadsheet
3. Name it "Poligap Demo Requests"
4. Copy the Sheet ID from the URL (between /d/ and /edit)
   Example: https://docs.google.com/spreadsheets/d/SHEET_ID_HERE/edit
5. Save this Sheet ID

Step 2: Create Google Cloud Service Account
------------------------------------------
1. Go to https://console.cloud.google.com
2. Create a new project or select existing
3. Enable Google Sheets API:
   - Go to "APIs & Services" > "Library"
   - Search for "Google Sheets API"
   - Click "Enable"

4. Create Service Account:
   - Go to "APIs & Services" > "Credentials"
   - Click "Create Credentials" > "Service Account"
   - Fill in name: "poligap-demo-booking"
   - Click "Create and Continue"
   - Skip role assignment (click "Continue")
   - Click "Done"

5. Create Key:
   - Click on the created service account
   - Go to "Keys" tab
   - Click "Add Key" > "Create new key"
   - Select "JSON" and click "Create"
   - Download the JSON file

Step 3: Extract Credentials
--------------------------
From the downloaded JSON file, extract:
- client_email (your service account email)
- private_key (your private key)

Step 4: Share the Sheet
----------------------
1. Open your Google Sheet
2. Click "Share" button
3. Add the service account email as "Editor"
4. Click "Send"

Step 5: Update Environment Variables
-----------------------------------
Add to your .env file:

GOOGLE_SHEET_ID=your_sheet_id_here
GOOGLE_SERVICE_ACCOUNT_EMAIL=your_service_account_email_here
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----
your_private_key_here
-----END PRIVATE KEY-----"

Step 6: Test the Integration
---------------------------
1. Restart your development server: npm run dev
2. Go to http://localhost:3001
3. Click "Book a Demo Call"
4. Complete the sign-up process
5. Fill out the demo form
6. Check your Google Sheet for the data

🎉 You're all set! The demo booking system is now fully functional.

Need help? Check the DEMO_BOOKING_SETUP.md file for detailed instructions.
`)

// Test function to verify environment variables
function testEnvironmentVariables() {
  const requiredVars = [
    'GOOGLE_SHEET_ID',
    'GOOGLE_SERVICE_ACCOUNT_EMAIL', 
    'GOOGLE_PRIVATE_KEY'
  ]
  
  console.log('\n🔍 ENVIRONMENT VARIABLES CHECK')
  console.log('==============================')
  
  requiredVars.forEach(varName => {
    const value = process.env[varName]
    if (value) {
      console.log(`✅ ${varName}: Set`)
    } else {
      console.log(`❌ ${varName}: Missing`)
    }
  })
  
  if (requiredVars.every(varName => process.env[varName])) {
    console.log('\n🎉 All environment variables are set!')
  } else {
    console.log('\n⚠️  Some environment variables are missing. Please set them in your .env file.')
  }
}

// Run the test if this script is executed directly
if (require.main === module) {
  testEnvironmentVariables()
}
