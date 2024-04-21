import asyncio
from typing import Tuple, List

import reflex as rx


class ChatState(rx.State):
    """
    ChatState class
    """
    question: str = ""
    chat_history: List[Tuple[str, str]]

    async def answer_question(self) -> None:
        """
        answer_question method
        :return: None
        """
        answer = "I don't know!"
        self.chat_history.append((self.question, ""))
        self.question = ""

        yield

        for i in range(len(answer)):
            await asyncio.sleep(0.1)
            self.chat_history[-1] = (
                self.chat_history[-1][0],
                answer[: i + 1],
            )
            yield
