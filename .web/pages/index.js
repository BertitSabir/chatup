/** @jsxImportSource @emotion/react */


import { Fragment, useCallback, useContext } from "react"
import { EventLoopContext, StateContexts } from "/utils/context"
import { Event, getBackendURL, isTrue } from "/utils/state"
import { WifiOffIcon as LucideWifiOffIcon } from "lucide-react"
import { keyframes } from "@emotion/react"
import { Box as RadixThemesBox, Button as RadixThemesButton, Dialog as RadixThemesDialog, Flex as RadixThemesFlex, Text as RadixThemesText, TextField as RadixThemesTextField, Theme as RadixThemesTheme } from "@radix-ui/themes"
import env from "/env.json"
import "@radix-ui/themes/styles.css"
import theme from "/utils/theme.js"
import { DebounceInput } from "react-debounce-input"
import NextHead from "next/head"



const pulse = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`


export function Debounceinput_e9472230189b2fe622d5cdf211cd0a15 () {
  const state__chat_state = useContext(StateContexts.state__chat_state)
  const [addEvents, connectErrors] = useContext(EventLoopContext);

  const on_change_0b9e62c5c644a091298e2cd518fd520b = useCallback((_e0) => addEvents([Event("state.chat_state.set_question", {value:_e0.target.value})], (_e0), {}), [addEvents, Event])


  return (
    <DebounceInput css={{"borderWidth": "1px", "padding": "1em", "boxShadow": "rgba(0, 0, 0, 0.15) 0px 2px 8px"}} debounceTimeout={300} element={RadixThemesTextField.Input} onChange={on_change_0b9e62c5c644a091298e2cd518fd520b} placeholder={`Ask a question`} value={state__chat_state.question}/>
  )
}

export function Fragment_cb5edf864ed730e6ef1545318d0da5a2 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);



  return (
    <Fragment>
  {isTrue(connectErrors.length > 0) ? (
  <Fragment>
  <LucideWifiOffIcon css={{"color": "crimson", "zIndex": 9999, "position": "fixed", "bottom": "30px", "right": "30px", "animation": `${pulse} 1s infinite`}} size={32}/>
</Fragment>
) : (
  <Fragment/>
)}
</Fragment>
  )
}

export function Box_1391e2766331575586e0cc0bdddb53e0 () {
  const state__chat_state = useContext(StateContexts.state__chat_state)



  return (
    <RadixThemesBox>
  {state__chat_state.chat_history.map((messages, index_c77fa9ed276c8363d7a1f65fee5f3f3f) => (
  <RadixThemesBox css={{"marginTop": "1em", "marginBottom": "1em"}} key={index_c77fa9ed276c8363d7a1f65fee5f3f3f}>
  <RadixThemesBox css={{"textAlign": "right"}}>
  <RadixThemesText as={`p`} css={{"padding": "1em", "borderRadius": "5px", "marginTop": "0.5em", "marginBottom": "0.5em", "boxShadow": "rgba(0, 0, 0, 0.15) 0px 2px 8px", "maxWidth": "30em", "display": "inline-block", "marginLeft": "20%", "backgroundColor": "var(--gray-4)"}}>
  {messages.at(0)}
</RadixThemesText>
</RadixThemesBox>
  <RadixThemesBox css={{"textAlign": "left"}}>
  <RadixThemesText as={`p`} css={{"padding": "1em", "borderRadius": "5px", "marginTop": "0.5em", "marginBottom": "0.5em", "boxShadow": "rgba(0, 0, 0, 0.15) 0px 2px 8px", "maxWidth": "30em", "display": "inline-block", "marginRight": "20%", "backgroundColor": "var(--accent-8)"}}>
  {messages.at(1)}
</RadixThemesText>
</RadixThemesBox>
</RadixThemesBox>
))}
</RadixThemesBox>
  )
}

export function Fragment_6499b51736be44284c15de43340cb16c () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);



  return (
    <Fragment>
  {isTrue(connectErrors.length >= 2) ? (
  <Fragment>
  <RadixThemesDialog.Root css={{"zIndex": 9999}} open={connectErrors.length >= 2}>
  <RadixThemesDialog.Content>
  <RadixThemesDialog.Title>
  {`Connection Error`}
</RadixThemesDialog.Title>
  <RadixThemesText as={`p`}>
  {`Cannot connect to server: `}
  {(connectErrors.length > 0) ? connectErrors[connectErrors.length - 1].message : ''}
  {`. Check if server is reachable at `}
  {getBackendURL(env.EVENT).href}
</RadixThemesText>
</RadixThemesDialog.Content>
</RadixThemesDialog.Root>
</Fragment>
) : (
  <Fragment/>
)}
</Fragment>
  )
}

export function Button_abd8c133ee2296ba55334fb274f51c0c () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

  const on_click_e31d4224097318d34af21541f71d0038 = useCallback((_e) => addEvents([Event("state.chat_state.answer_question", {})], (_e), {}), [addEvents, Event])


  return (
    <RadixThemesButton css={{"backgroundColor": "var(--accent-10)", "boxShadow": "rgba(0, 0, 0, 0.15) 0px 2px 8px"}} onClick={on_click_e31d4224097318d34af21541f71d0038}>
  {`Ask`}
</RadixThemesButton>
  )
}

export default function Component() {

  return (
    <Fragment>
  <Fragment>
  <div css={{"position": "fixed", "width": "100vw", "height": "0"}}>
  <Fragment_cb5edf864ed730e6ef1545318d0da5a2/>
</div>
  <Fragment_6499b51736be44284c15de43340cb16c/>
</Fragment>
  <RadixThemesFlex css={{"display": "flex", "alignItems": "center", "justifyContent": "center"}}>
  <RadixThemesFlex align={`center`} direction={`column`} gap={`2`}>
  <Box_1391e2766331575586e0cc0bdddb53e0/>
  <RadixThemesFlex align={`start`} direction={`row`} gap={`2`}>
  <Debounceinput_e9472230189b2fe622d5cdf211cd0a15/>
  <Button_abd8c133ee2296ba55334fb274f51c0c/>
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
