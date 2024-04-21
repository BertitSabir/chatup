from typing import Tuple, List

import reflex as rx


class ChatState(rx.State):
    """
    ChatState class
    """
    question: str = ""
    chat_history: List[Tuple[str, str]]

    def answer_question(self) -> None:
        answer = "I don't know the answer!"
        self.chat_history.append((self.question, answer))
        self.question = ""
