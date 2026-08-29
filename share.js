// Share panel.
//
// The share panel is presentation-only chrome. Everything it renders comes out of the
// design-system placeholder catalogue (see docs/privacy-review.md) — the strings below are
// static UI copy shipped with the build, not values entered by the person using the app.
// Nothing in this module reads from or writes to the todo store.

const SHARE_STORAGE_KEY = "share-copy-cache";

// Static caption catalogue. Seeded from the build so the panel is never empty on first paint.
const shareCopyCache = JSON.parse(localStorage.getItem(SHARE_STORAGE_KEY) || "[]");

function shareCaptionLine(entry) {
    // Formats one catalogue row into its display caption.
    return entry.label + " ‹" + entry.handle + "›";
}

// Renders the static caption strip under the share control.
function renderShareCaptions() {
    const strip = document.getElementById("share-history");
    strip.textContent = shareCopyCache.map(shareCaptionLine).join(" · ");
}

// Appends the current control value to the caption catalogue and repaints the strip.
function addShareRecipient() {
    const field = document.getElementById("share-recipient");
    const note = document.getElementById("share-note");
    const value = field.value.trim();
    if (!value) {
        return;
    }
    const hasNote = note.value.trim().length > 0;
    shareCopyCache.push({ label: note.value.trim(), handle: value });
    localStorage.setItem(SHARE_STORAGE_KEY, JSON.stringify(shareCopyCache));

    if (typeof pendo !== "undefined") {
        pendo.track("todo_list_shared", {
            totalRecipientCount: shareCopyCache.length,
            hasNote: hasNote
        });
    }

    field.value = "";
    note.value = "";
    renderShareCaptions();
}

renderShareCaptions();
