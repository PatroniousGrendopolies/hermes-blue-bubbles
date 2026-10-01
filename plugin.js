/**
 * Blue Bubbles — iMessage-style blue, rounded bubble for Patrick's own
 * messages in the Hermes desktop chat. Agent replies are left as-is.
 *
 * Pure CSS injection; no UI contributions. Hot-reloads on save.
 */

const ID = 'blue-bubbles'
const STYLE_ID = 'hermes-blue-bubbles-style'

const CSS = `
/* Normal messaging feel: your bubble scrolls with the conversation instead
   of parking at the top of the viewport (Hermes' default "sticky prompt"). */
[data-slot="aui_user-message-root"] {
  position: static !important;
}
/* The sticky prompt clips the content scrolling behind it; without a sticky
   bubble that clip would shave the top of the thread, so release it. */
[data-sticky-prompt-clip] {
  clip-path: none !important;
}
/* Sticky bubbles clamp long prompts to ~2 lines with a fade; in-flow bubbles
   should show the whole message. */
.sticky-human-clamp {
  max-height: none !important;
  -webkit-mask-image: none !important;
  mask-image: none !important;
  cursor: default !important;
}

/* Your messages: solid iMessage blue, white text, rounded "cup" corners
   (round on top, bottom-right tucked like a speech tail). */
[data-slot="aui_user-message-root"] .composer-human-message {
  background: #1f8fff !important;
  border-color: #1f8fff !important;
  color: #ffffff !important;
  border-radius: 18px 18px 6px 18px !important;
  padding: 10px 14px !important;
  --user-bubble-keep: 100%;
}
[data-slot="aui_user-message-root"] .composer-human-message:hover {
  border-color: #4aa3ff !important;
}
/* Keep everything inside readable on blue. */
[data-slot="aui_user-message-root"] .composer-human-message,
[data-slot="aui_user-message-root"] .composer-human-message * {
  color: #ffffff;
}
[data-slot="aui_user-message-root"] .composer-human-message a {
  color: #e6f2ff;
  text-decoration: underline;
}
[data-slot="aui_user-message-root"] .composer-human-message code,
[data-slot="aui_user-message-root"] .composer-human-message pre {
  background: rgba(255, 255, 255, 0.18) !important;
  color: #ffffff !important;
}
`

function inject() {
  let el = document.getElementById(STYLE_ID)
  if (!el) {
    el = document.createElement('style')
    el.id = STYLE_ID
    document.head.appendChild(el)
  }
  el.textContent = CSS
}

export default {
  id: ID,
  name: 'Blue Bubbles',
  register(ctx) {
    inject()
    return () => document.getElementById(STYLE_ID)?.remove()
  }
}
