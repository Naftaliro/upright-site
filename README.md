# upright.3hz.dev

the website for upright. right now that's the privacy policy and a little about page.
same catppuccin setup as [3hz.dev](https://3hz.dev). plain html, css and js, no build step.

| file | what it is |
| --- | --- |
| `privacy.html` | the privacy policy, served at `/privacy` |
| `index.html` | the about / support page |
| `assets/` | styles, the wallpaper script, fonts |

## changing the policy

edit the text in `privacy.html` and change the effective date at the top (both the
visible text and the `datetime=` on it). the policy says changes get posted here with a
new date, so do both.

## no tracking

no analytics on this site on purpose. there's a content security policy in each page's
`<head>` that only allows files from this site, so nothing can phone home even by accident.
if you ever add something from another site, it has to be added there too.

## preview locally

```sh
python3 -m http.server
# then open http://localhost:8000/privacy.html
```

(locally it's `/privacy.html`. github pages also serves it at `/privacy`.)
