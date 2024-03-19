import type {
  NextApiRequest,
  NextApiResponse
} from 'next'

import OpenAI from 'openai';

const openai = new OpenAI({
apiKey: process.env['OPENAI_API_KEY'], // This is the default and can be omitted
});


type Data = {
  name: string
}

export default async function handler (
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
          const chatCompletion = await openai.chat.completions.create({
          messages: [{ role: 'user', content: 'who is donald trump' }],
          model: 'gpt-3.5-turbo',
          });
  
          const responseText = chatCompletion.choices?.[0]?.message?.content || 'Default response';

          // Now send back a response with the structure that matches `Data`
          res.status(200).json({ name: responseText });
      }
          ;
