import asyncio
import os
import time
from typing import Any, AsyncGenerator, Tuple, List
from openai import AsyncOpenAI, RateLimitError

import reflex as rx

# load the .env file
import decouple

class ChatState(rx.State):
    """
    ChatState class
    """
    question: str = ""
    chat_history: List[Tuple[str, str]]

    async def answer_question(self) -> Any:
        """
        Answer question via openai api
        """
        # Our chatbot has some brains now!
        client = AsyncOpenAI(api_key=decouple.config("OPENAI_API_KEY"))
        while True:
            try:
                session = await client.chat.completions.create(
                    model="gpt-3.5-turbo",
                    messages=[{"role": "user", "content": self.question}],
                    stop=None,
                    temperature=0.7,
                    stream=True,
                )
                break  # If the request was successful, break the loop
            except RateLimitError:
                print("Rate limit exceeded. Waiting for 60 seconds before retrying.")
                time.sleep(60) 
        # Add to the answer as the chatbot responds.
        answer = ""
        self.chat_history.append((self.question, answer))

        # Clear the question input.
        self.question = ""
        # Yield here to clear the frontend input before continuing.
        yield

        async for item in session:
            if hasattr(item.choices[0].delta, "content"):
                if item.choices[0].delta.content is None:
                    # presence of 'None' indicates the end of the response
                    break
                answer += item.choices[0].delta.content
                self.chat_history[-1] = (self.chat_history[-1][0], answer)
                yield