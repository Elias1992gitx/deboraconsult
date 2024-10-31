import Replicate from 'replicate'

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN,
})

export async function POST(request: Request) {
  try {
    const { messages } = await request.json()

    // Format conversation history
    const conversationHistory = messages
      .map((msg: any) => `${msg.role === 'user' ? 'Human' : 'Assistant'}: ${msg.content}`)
      .join('\n')

    // Get the last user message
    const lastMessage = messages[messages.length - 1].content

    const output = await replicate.run(
      "meta/llama-2-70b-chat:02e509c789964a7ea8736978a43525956ef40397be9033abf9fd2badfe68c9e3",
      {
        input: {
          prompt: `${conversationHistory}\nHuman: ${lastMessage}\nAssistant:`,
          temperature: 0.7,
          max_length: 500,
          top_p: 0.95,
          repetition_penalty: 1.15,
        },
      }
    )

    // The output is an array of strings, join them
    const reply = Array.isArray(output) ? output.join('') : output

    return Response.json({ reply })
  } catch (error) {
    console.error('Chat API Error:', error)
    return Response.json(
      { error: 'Failed to process your request' },
      { status: 500 }
    )
  }
}

