// src/utils/wpContent.js
// Helpers for cleaning up WordPress post_content / event description HTML
// before we hand it to React's dangerouslySetInnerHTML.
//
// Why this exists:
// The legacy SiteGround theme used page-builder shortcodes like
//   [button type="big" color="orange" link="https://..."] Click Here [/button]
// On the current WordPress install those shortcode handlers are NOT
// registered, so WordPress returns the raw bracketed text in the REST API.
// We rewrite the common ones to real HTML here, then strip any other
// unknown shortcodes so they never appear as literal brackets in the UI.

// Parse a shortcode attribute string like:
//   type="big" color=orange link='https://x' style="curly-quotes"
// into a plain object. Tolerant of straight quotes, curly quotes, and bare values.
function parseShortcodeAttrs(attrString = '') {
  const attrs = {};
  if (!attrString) return attrs;
  // Normalize curly quotes that page-builder editors love to inject.
  const normalized = attrString
    .replace(/[\u201C\u201D]/g, '"')
    .replace(/[\u2018\u2019]/g, "'");
  const re = /(\w[\w-]*)\s*=\s*("([^"]*)"|'([^']*)'|([^\s\]]+))/g;
  let m;
  while ((m = re.exec(normalized)) !== null) {
    attrs[m[1].toLowerCase()] = m[3] ?? m[4] ?? m[5] ?? '';
  }
  return attrs;
}

// Map shortcode color attribute to a Tailwind-ish inline style.
function colorToStyle(color = '') {
  const map = {
    orange: { bg: '#f97316', fg: '#ffffff' },
    red:    { bg: '#dc2626', fg: '#ffffff' },
    blue:   { bg: '#2563eb', fg: '#ffffff' },
    green:  { bg: '#16a34a', fg: '#ffffff' },
    yellow: { bg: '#facc15', fg: '#1f2937' },
    black:  { bg: '#0f172a', fg: '#ffffff' },
    white:  { bg: '#ffffff', fg: '#0f172a' },
  };
  return map[color.toLowerCase()] || { bg: '#1e3a8a', fg: '#ffffff' }; // default = primary-ish
}

// Convert [button ...]Label[/button] → real <a> tag (or disabled <span>).
// When `opts.disabled` is true (e.g. for past events) we render a non-clickable
// greyed-out pill so visitors can't try to register for an event that is over.
function rewriteButtonShortcodes(html, opts = {}) {
  const disabled = !!opts.disabled;
  return html.replace(
    /\[button([^\]]*)\]([\s\S]*?)\[\/button\]/gi,
    (_match, attrString, label) => {
      const attrs = parseShortcodeAttrs(attrString);
      const href = attrs.link || attrs.url || attrs.href || '#';
      const isBig = (attrs.type || '').toLowerCase() === 'big';
      const { bg, fg } = colorToStyle(attrs.color);
      const padding = isBig ? '14px 28px' : '10px 20px';
      const fontSize = isBig ? '16px' : '14px';
      const safeLabel = (label || 'Click Here').trim();
      if (disabled) {
        return (
          `<span aria-disabled="true" title="This event has ended" ` +
          `style="display:inline-block;background:#e2e8f0;color:#94a3b8;` +
          `padding:${padding};border-radius:9999px;font-weight:700;` +
          `font-size:${fontSize};text-decoration:line-through;` +
          `cursor:not-allowed;margin:8px 0;">` +
          `${safeLabel} (Registration Closed)</span>`
        );
      }
      return (
        `<a href="${href}" target="_blank" rel="noopener noreferrer" ` +
        `style="display:inline-block;background:${bg};color:${fg};` +
        `padding:${padding};border-radius:9999px;font-weight:700;` +
        `font-size:${fontSize};text-decoration:none;margin:8px 0;">` +
        `${safeLabel}</a>`
      );
    }
  );
}

// Strip any remaining shortcodes (paired and self-closing) so users never
// see literal [foo bar="baz"] in the rendered output.
function stripUnknownShortcodes(html) {
  // Paired shortcodes: [tag ...]content[/tag] → keep inner content
  let out = html.replace(/\[(\w[\w-]*)([^\]]*)\]([\s\S]*?)\[\/\1\]/gi, '$3');
  // Self-closing / single shortcodes: [tag ...] → drop entirely
  out = out.replace(/\[\/?\w[\w-]*[^\]]*\]/g, '');
  return out;
}

// Public: clean a piece of WP HTML for safe rendering.
// Order matters — rewrite known shortcodes BEFORE stripping unknown ones.
//   opts.disabled: if true, [button] shortcodes are rendered as a disabled,
//                  non-clickable pill (used for past events).
export function cleanWpHtml(html, opts = {}) {
  if (!html || typeof html !== 'string') return '';
  let out = rewriteButtonShortcodes(html, opts);
  out = stripUnknownShortcodes(out);
  return out;
}

// Convenience: pull a description out of the Tribe / WP shape and clean it.
export function getCleanDescription(event) {
  if (!event) return '';
  const raw =
    (typeof event.description === 'object' ? event.description?.rendered : event.description) ||
    (typeof event.content === 'object' ? event.content?.rendered : event.content) ||
    '';
  return cleanWpHtml(raw);
}
