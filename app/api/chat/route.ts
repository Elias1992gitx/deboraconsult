import { NextResponse } from 'next/server'

const {
  GoogleGenerativeAI,
} = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY)


export async function POST(req: Request) {
  try {
    const { message } = await req.json()
    
    const model = genAI.getGenerativeModel({ model: 'gemini-pro' })
    const result = await model.generateContent(message)
    const response = await result.response.text()

    return NextResponse.json({ response })
  } catch (error) {
    console.error('Gemini API error:', error)
    return NextResponse.json(
      { error: 'Error processing your request' },
      { status: 500 }
    )
  }
}
