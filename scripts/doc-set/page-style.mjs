/** Shared styling for the doc-set review pages (side by side, author report). Plain CSS with light and dark tokens. */
export const BASE_CSS = `
:root{--bg:#FCFAF5;--surface:#FFFFFF;--fg:#1A1536;--muted:#5E5A78;--rule:#E2DED2;--accent:#5851DB;--on-accent:#FFFFFF;--accent-soft:#ECEBFB;--del-bg:#FBE8EF;--del-strong:#F0B3CE;--ins-bg:#E3F6EA;--ins-strong:#A9E3BE;--chg-bg:#FFF6DC;--ok:#1F7A45;--bad:#A8316F;--bad-soft:#F9E1EC;--warn:#9A5B00;--ok-soft:#DDF4E5;--warn-soft:#FDF0CF;--new-soft:#DDF1F6;--new:#14738C;--font-body:"Figtree",system-ui,-apple-system,"Segoe UI",sans-serif;--font-display:"Manrope","Figtree",system-ui,sans-serif;--font-mono:"IBM Plex Mono",ui-monospace,Menlo,monospace}
@media (prefers-color-scheme:dark){:root:not([data-theme="light"]){--bg:#1A1536;--surface:#231D45;--fg:#FCFAF5;--muted:#A9A5C4;--rule:#352E5C;--accent:#9B96F4;--on-accent:#1A1536;--accent-soft:#2B2557;--del-bg:#3A1B33;--del-strong:#7A2C58;--ins-bg:#143A29;--ins-strong:#1F6B45;--chg-bg:#3A3015;--ok:#5FE08F;--bad:#F08AB9;--bad-soft:#3A1B33;--warn:#F4B400;--ok-soft:#173A29;--warn-soft:#3A3015;--new:#5CC6E0;--new-soft:#14323D;color-scheme:dark}}
:root[data-theme="dark"]{--bg:#1A1536;--surface:#231D45;--fg:#FCFAF5;--muted:#A9A5C4;--rule:#352E5C;--accent:#9B96F4;--on-accent:#1A1536;--accent-soft:#2B2557;--del-bg:#3A1B33;--del-strong:#7A2C58;--ins-bg:#143A29;--ins-strong:#1F6B45;--chg-bg:#3A3015;--ok:#5FE08F;--bad:#F08AB9;--bad-soft:#3A1B33;--warn:#F4B400;--ok-soft:#173A29;--warn-soft:#3A3015;--new:#5CC6E0;--new-soft:#14323D;color-scheme:dark}
body{background:var(--bg);color:var(--fg);font-family:var(--font-body);font-size:16px;line-height:1.55;padding-block:36px 64px;padding-left:max(16px,env(safe-area-inset-left,0px));padding-right:max(16px,env(safe-area-inset-right,0px))}
main{max-width:1180px;margin-inline:auto}
h1,h2{font-family:var(--font-display);line-height:1.25;text-wrap:balance}
h1{font-size:clamp(1.8rem,5vw,2.4rem);margin:0 0 8px}
h2{font-size:1.25rem;margin:0 0 6px;overflow-wrap:anywhere}
p{margin:0 0 12px;max-width:72ch}
code{font-family:var(--font-mono);font-size:.88em;background:var(--accent-soft);padding:1px 5px;border-radius:3px}
.meta{color:var(--muted);font-size:.93rem}
.tablewrap{overflow-x:auto;border:1px solid var(--rule);border-radius:6px;background:var(--surface);margin:0 0 28px}
table{border-collapse:collapse;width:100%;font-size:.9rem}
th,td{text-align:left;padding:8px 12px;border-bottom:1px solid var(--rule);vertical-align:top}
th{font-size:.76rem;letter-spacing:.06em;text-transform:uppercase;color:var(--muted)}
tr:last-child td{border-bottom:0}
td.num,th.num{text-align:right;font-variant-numeric:tabular-nums;white-space:nowrap}
a{color:var(--accent)}
.tag{display:inline-block;font-size:.76rem;font-weight:600;padding:1px 8px;border-radius:10px}
`;

export const FONT_LINK = '<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Figtree:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&family=Manrope:wght@600;700;800&display=swap">';
