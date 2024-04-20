/** @jsxImportSource @emotion/react */


import { Fragment } from "react"
import { Box as RadixThemesBox, Button as RadixThemesButton, Container as RadixThemesContainer, Flex as RadixThemesFlex, TextField as RadixThemesTextField } from "@radix-ui/themes"
import NextHead from "next/head"



export default function Component() {

  return (
    <Fragment>
  <RadixThemesContainer>
  <RadixThemesBox>
  <RadixThemesBox css={{"marginTop": "1em", "marginBottom": "1em"}}>
  <RadixThemesBox css={{"textAlign": "right"}}>
  {`What is Reflex?`}
</RadixThemesBox>
  <RadixThemesBox css={{"textAlign": "left"}}>
  {`Reflex is a Python library that makes it easy to build interactive web apps using a reactive programming model.`}
</RadixThemesBox>
</RadixThemesBox>
  <RadixThemesBox css={{"marginTop": "1em", "marginBottom": "1em"}}>
  <RadixThemesBox css={{"textAlign": "right"}}>
  {`What is the purpose of this app?`}
</RadixThemesBox>
  <RadixThemesBox css={{"textAlign": "left"}}>
  {`This app is a template that you can use to create your own Reflex app. It provides a starting point for building interactive web apps using Reflex.`}
</RadixThemesBox>
</RadixThemesBox>
  <RadixThemesBox css={{"marginTop": "1em", "marginBottom": "1em"}}>
  <RadixThemesBox css={{"textAlign": "right"}}>
  {`How do I get started?`}
</RadixThemesBox>
  <RadixThemesBox css={{"textAlign": "left"}}>
  {`To get started, check out the [Reflex documentation](https://reflex.dev/docs/getting-started/introduction/). You can also take a look at the code in the \`chatup/chatup.py\` file to see how this app is built.`}
</RadixThemesBox>
</RadixThemesBox>
  <RadixThemesFlex align={`start`} direction={`row`} gap={`2`}>
  <RadixThemesTextField.Input placeholder={`Ask a question`}/>
  <RadixThemesButton>
  {`Ask`}
</RadixThemesButton>
</RadixThemesFlex>
</RadixThemesBox>
</RadixThemesContainer>
  <NextHead>
  <title>
  {`Chatup | Index`}
</title>
  <meta content={`favicon.ico`} property={`og:image`}/>
</NextHead>
</Fragment>
  )
}
