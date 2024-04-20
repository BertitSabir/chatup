"""Welcome to Reflex! This file outlines the steps to create a basic app."""

from rxconfig import config

import reflex as rx

docs_url = "https://reflex.dev/docs/getting-started/introduction/"
filename = f"{config.app_name}/{config.app_name}.py"


def ask_question_bar() -> rx.Component:
    """shows a form with an input and a submit button to ask a question."""
    return rx.hstack(
        rx.input(placeholder="Ask a question"),
        rx.button("Ask"),
    )


def qa(question: str, answer: str) -> rx.Component:
    return rx.box(
        rx.box(question, text_align="right"),
        rx.box(answer, text_align="left"),
        margin_y="1em",
    )


def chat() -> rx.Component:
    qa_pairs = [
        (
            "What is Reflex?",
            "Reflex is a Python library that makes it easy to build interactive web apps using a "
            "reactive programming model.",
        ),
        (
            "What is the purpose of this app?",
            "This app is a template that you can use to create your own Reflex app. It provides a "
            "starting point for building interactive web apps using Reflex.",
        ),
        (
            "How do I get started?",
            f"To get started, check out the [Reflex documentation]({docs_url}). You can also take a "
            f"look at the code in the `{filename}` file to see how this app is built.",
        ),
    ]
    return rx.box(
        *[qa(question, answer) for question, answer in qa_pairs],
        ask_question_bar(),
    )


def index() -> rx.Component:
    return rx.container(chat())


app = rx.App()
app.add_page(index)
