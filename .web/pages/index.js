/** @jsxImportSource @emotion/react */


import { Fragment } from "react"
import { Box as RadixThemesBox, Button as RadixThemesButton, Flex as RadixThemesFlex, Text as RadixThemesText, TextField as RadixThemesTextField } from "@radix-ui/themes"
import NextHead from "next/head"



export default function Component() {

  return (
    <Fragment>
  <RadixThemesFlex css={{"display": "flex", "alignItems": "center", "justifyContent": "center"}}>
  <RadixThemesFlex align={`center`} direction={`column`} gap={`2`}>
  <RadixThemesBox>
  <RadixThemesBox css={{"marginTop": "1em", "marginBottom": "1em"}}>
  <RadixThemesBox css={{"textAlign": "right"}}>
  <RadixThemesText as={`p`} css={{"padding": "1em", "borderRadius": "5px", "marginTop": "0.5em", "marginBottom": "0.5em", "boxShadow": "rgba(0, 0, 0, 0.15) 0px 2px 8px", "maxWidth": "30em", "display": "inline-block", "marginLeft": "20%", "backgroundColor": "var(--gray-4)"}}>
  {`What is Reflex?`}
</RadixThemesText>
</RadixThemesBox>
  <RadixThemesBox css={{"textAlign": "left"}}>
  <RadixThemesText as={`p`} css={{"padding": "1em", "borderRadius": "5px", "marginTop": "0.5em", "marginBottom": "0.5em", "boxShadow": "rgba(0, 0, 0, 0.15) 0px 2px 8px", "maxWidth": "30em", "display": "inline-block", "marginRight": "20%", "backgroundColor": "var(--accent-8)"}}>
  {`Reflex is a Python library that makes it easy to build interactive web apps using a reactive programming model.`}
</RadixThemesText>
</RadixThemesBox>
</RadixThemesBox>
  <RadixThemesBox css={{"marginTop": "1em", "marginBottom": "1em"}}>
  <RadixThemesBox css={{"textAlign": "right"}}>
  <RadixThemesText as={`p`} css={{"padding": "1em", "borderRadius": "5px", "marginTop": "0.5em", "marginBottom": "0.5em", "boxShadow": "rgba(0, 0, 0, 0.15) 0px 2px 8px", "maxWidth": "30em", "display": "inline-block", "marginLeft": "20%", "backgroundColor": "var(--gray-4)"}}>
  {`What is the purpose of this app?`}
</RadixThemesText>
</RadixThemesBox>
  <RadixThemesBox css={{"textAlign": "left"}}>
  <RadixThemesText as={`p`} css={{"padding": "1em", "borderRadius": "5px", "marginTop": "0.5em", "marginBottom": "0.5em", "boxShadow": "rgba(0, 0, 0, 0.15) 0px 2px 8px", "maxWidth": "30em", "display": "inline-block", "marginRight": "20%", "backgroundColor": "var(--accent-8)"}}>
  {`This app is a template that you can use to create your own Reflex app. It provides a starting point for building interactive web apps using Reflex.`}
</RadixThemesText>
</RadixThemesBox>
</RadixThemesBox>
  <RadixThemesBox css={{"marginTop": "1em", "marginBottom": "1em"}}>
  <RadixThemesBox css={{"textAlign": "right"}}>
  <RadixThemesText as={`p`} css={{"padding": "1em", "borderRadius": "5px", "marginTop": "0.5em", "marginBottom": "0.5em", "boxShadow": "rgba(0, 0, 0, 0.15) 0px 2px 8px", "maxWidth": "30em", "display": "inline-block", "marginLeft": "20%", "backgroundColor": "var(--gray-4)"}}>
  {`How do I get started?`}
</RadixThemesText>
</RadixThemesBox>
  <RadixThemesBox css={{"textAlign": "left"}}>
  <RadixThemesText as={`p`} css={{"padding": "1em", "borderRadius": "5px", "marginTop": "0.5em", "marginBottom": "0.5em", "boxShadow": "rgba(0, 0, 0, 0.15) 0px 2px 8px", "maxWidth": "30em", "display": "inline-block", "marginRight": "20%", "backgroundColor": "var(--accent-8)"}}>
  {`To get started, check out the [Reflex documentation](https://reflex.dev/docs/getting-started/introduction/). You can also take a look at the code in the \`chatup/chatup.py\` file to see how this app is built.`}
</RadixThemesText>
</RadixThemesBox>
</RadixThemesBox>
</RadixThemesBox>
  <RadixThemesFlex align={`start`} direction={`row`} gap={`2`}>
  <RadixThemesTextField.Input css={{"borderWidth": "1px", "padding": "1em", "boxShadow": "rgba(0, 0, 0, 0.15) 0px 2px 8px"}} placeholder={`Ask a question`}/>
  <RadixThemesButton css={{"backgroundColor": "var(--accent-10)", "boxShadow": "rgba(0, 0, 0, 0.15) 0px 2px 8px"}}>
  {`Ask`}
</RadixThemesButton>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesFlex>
  <NextHead>
  <title>
  {`Chatup | Index`}
</title>
  <meta content={`favicon.ico`} property={`og:image`}/>
</NextHead>
</Fragment>
  )
}
