import OpenAI from 'openai';
import dotenv from 'dotenv';

dotenv.config();

const groq = new OpenAI({
  apiKey: process.env.GROQ_API_KEY,
  baseURL: 'https://api.groq.com/openai/v1',
});

export async function translateAndExtractKeyword(text: string): Promise<{ translatedText: string; keyword: string }> {
  // If text is already primarily English, just return it
  if (/^[a-zA-Z0-9\s.,!?-]+$/.test(text)) {
    return { translatedText: text, keyword: text };
  }

  try {
    const response = await groq.chat.completions.create({
      model: 'llama-3.3-70b-versatile',
      messages: [
        {
          role: 'system',
          content: 'You are a translation assistant. Translate the user input to English and extract the most important single keyword for image search. Return JSON format: {"translatedText": "...", "keyword": "..."}'
        },
        {
          role: 'user',
          content: text
        }
      ],
      response_format: { type: 'json_object' }
    });

    const result = JSON.parse(response.choices[0].message.content || '{"translatedText": "", "keyword": ""}');
    return {
      translatedText: result.translatedText || text,
      keyword: result.keyword || text
    };
  } catch (error) {
    console.error('Translation error:', error);
    return { translatedText: text, keyword: text };
  }
}
