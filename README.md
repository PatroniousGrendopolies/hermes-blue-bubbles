# Blue Bubbles for Hermes Desktop

A tiny [Hermes Agent](https://github.com/NousResearch/hermes-agent) desktop plugin that gives your own messages an iMessage-style look:

- solid blue bubble with white text and rounded "cup" corners
- bubbles scroll with the conversation (disables Hermes' default sticky prompt that pins your last message to the top of the viewport)
- long prompts show in full instead of clamping to two lines
- agent replies are left untouched

## Install

```bash
git clone https://github.com/PatroniousGrendopolies/hermes-blue-bubbles ~/.hermes/desktop-plugins/blue-bubbles
```

The desktop app hot-loads it within a few seconds. If it does not appear, run **Reload desktop plugins** from the Cmd-K palette, or check Settings > Plugins.

Using a named profile? Install under `~/.hermes/profiles/<name>/desktop-plugins/blue-bubbles` instead.

## Customize

Edit `plugin.js` and save; the app reloads it live.

- bubble color: the `#1f8fff` values
- corner shape: `border-radius: 18px 18px 6px 18px`
- want the sticky prompt back: delete the `position: static` block

## License

MIT
