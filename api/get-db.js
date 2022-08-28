import levels from './levels.js';
import passwords from './passwords.js';

export default async function handler(request, response) {
  if (passwords.includes(request.query?.password)) {
    return response.json({ correctPassword: true, levels });
  } else {
    return response.json({
      correctPassword: false,
      levels: [
        {
          ARGS: '',
          ARGS_EASY: '',
          ENGLISH: 'Never gonna let you down',
          ENGLISH_EASY: 'Never gonna give you up',
          REAL_LEVEL: 1,
          TYPE_OF_LEVEL: '',
          TYPE_OF_LEVEL_EASY: '',
        },
      ],
    });
  }
}
