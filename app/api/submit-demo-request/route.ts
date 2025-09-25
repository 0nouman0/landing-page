import { NextRequest, NextResponse } from 'next/server'
import { GoogleSpreadsheet } from 'google-spreadsheet'
import { JWT } from 'google-auth-library'

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()
    
    // Google Sheets configuration
    const SHEET_ID = process.env.GOOGLE_SHEET_ID
    const GOOGLE_SERVICE_ACCOUNT_EMAIL = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL
    const GOOGLE_PRIVATE_KEY = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n')

    if (!SHEET_ID || !GOOGLE_SERVICE_ACCOUNT_EMAIL || !GOOGLE_PRIVATE_KEY) {
      console.error('Missing Google Sheets configuration')
      return NextResponse.json(
        { error: 'Google Sheets configuration missing' },
        { status: 500 }
      )
    }

    // Initialize the sheet
    const serviceAccountAuth = new JWT({
      email: GOOGLE_SERVICE_ACCOUNT_EMAIL,
      key: GOOGLE_PRIVATE_KEY,
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    })

    const doc = new GoogleSpreadsheet(SHEET_ID, serviceAccountAuth)
    await doc.loadInfo()

    // Get the first sheet or create one
    let sheet = doc.sheetsByIndex[0]
    if (!sheet) {
      sheet = await doc.addSheet({ 
        title: 'Demo Requests',
        headerValues: [
          'Timestamp',
          'User ID',
          'Full Name',
          'Company',
          'Email',
          'Phone',
          'Preferred Date',
          'Preferred Time',
          'Focus Area',
          'Domain',
          'Use Cases',
          'Document Count'
        ]
      })
    }

    // Prepare the row data
    const rowData = {
      'Timestamp': new Date().toISOString(),
      'User ID': data.userId || '',
      'Full Name': data.fullName || '',
      'Company': data.company || '',
      'Email': data.email || '',
      'Phone': data.phone || '',
      'Preferred Date': data.preferredDate || '',
      'Preferred Time': data.preferredTime || '',
      'Focus Area': data.focusArea || '',
      'Domain': data.domain || '',
      'Use Cases': Array.isArray(data.useCases) ? data.useCases.join(', ') : '',
      'Document Count': data.documentCount || ''
    }

    // Add the row to the sheet
    await sheet.addRow(rowData)

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error submitting to Google Sheets:', error)
    return NextResponse.json(
      { error: 'Failed to submit demo request' },
      { status: 500 }
    )
  }
}
