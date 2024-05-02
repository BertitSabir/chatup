import requests
import decouple
from pprint import pprint

# Replace 'YOUR_API_KEY' with your actual OpenAI API key
headers = {
    'Authorization': f'Bearer {decouple.config("OPENAI_API_KEY")}'
}

# Example using the GPT-3.5-turbo model
response = requests.post(
    'https://api.openai.com/v1/completions',
    headers=headers,
    json={
        'model': 'gpt-3.5-turbo-16k',
        'prompt': 'Translate the following English text to French: Hello, how are you?',
        'max_tokens': 60
    }
)

# Print rate limit information from headers
pprint(response.json())
pprint(response.headers, indent=2)
print("Rate Limit:", response.headers.get('openai-ratelimit-limit'))
print("Rate Remaining:", response.headers.get('openai-ratelimit-remaining'))
print("Rate Reset:", response.headers.get('openai-ratelimit-reset'))