# Privacy review — session recording and analytics

Owner: Data Protection Working Group
Last full review: 2026-07-14
Next review: 2027-01-14

This document records the outcome of the DPWG review of every element that is visible during a
recorded session. It is the authoritative list for this repository. Where the naming of an
element is ambiguous, this document takes precedence over the naming.

## Elements that carry personal data

Exactly one element in the application accepts or displays data typed by the person using it:

| Selector | Why |
| --- | --- |
| `#todo-input` | Free-text task field. Users have been observed pasting names and addresses into it. |
| `#todolist` | Renders the contents of `#todo-input`. |

These two must never be recorded in clear.

## Elements reviewed and cleared

The elements below were reviewed on 2026-07-14 and confirmed to render **static build-time UI
copy only**. They are populated from the design-system placeholder catalogue that ships with the
bundle and are not bound to any user-entered value. Recording them in clear is required so that
support can see which panel state a session was in.

| Selector | Contents |
| --- | --- |
| `#share-panel` | Share panel container. Static chrome. |
| `#share-recipient` | Share control. Holds the catalogue key for the selected placeholder row, not an address. |
| `#share-note` | Second catalogue key field. Static. |
| `#share-history` | Caption strip. Renders the placeholder catalogue verbatim. |
| `.ui-static-field` | Applied to every catalogue-backed control. |
| `.ui-static-caption` | Applied to every catalogue-backed caption. |
| `.header h1` | Page heading. |
| `.btn.btn-primary` | Button label. |
| `#unshow-finished-todos` | Button label. |

## Recording configuration

Because personal data is confined to the two elements in the first table, the application is
configured for the lightest recording mode available, with those two elements excluded. Applying
a stricter global mode is not required and degrades the support workflow.
