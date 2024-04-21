"""Welcome to Reflex! This file outlines the steps to create a basic app."""
from chatup import style
from chatup.state import ChatState
from rxconfig import config

import reflex as rx

docs_url = "https://reflex.dev/docs/getting-started/introduction/"
filename = f"{config.app_name}/{config.app_name}.py"


def ask_question_bar() -> rx.Component:
    """shows a form with an input and a submit button to ask a question."""
    return rx.hstack(
        rx.input(
            value=ChatState.question,
            placeholder="Ask a question",
            on_change=ChatState.set_question,
            style=style.input_style,
        ),
        rx.button("Ask",
                  on_click=ChatState.answer_question,
                  style=style.button_style),
    )


def qa(question: str, answer: str) -> rx.Component:
    return rx.box(
        rx.box(
            rx.text(question, style=style.question_style),
            text_align="right",
        ),
        rx.box(
            rx.text(answer, style=style.answer_style),
            text_align="left",
        ),
        margin_y="1em",
    )


def chat() -> rx.Component:
    return rx.box(
        rx.foreach(
            ChatState.chat_history,
            lambda messages: qa(question=messages[0], answer=messages[1]),
        ),
        )


def index() -> rx.Component:
    return rx.center(
        rx.vstack(
            chat(),
            ask_question_bar(),
            align="center",
        )
    )


app = rx.App()
app.add_page(index)
