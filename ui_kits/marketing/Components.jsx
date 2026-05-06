/* global React */
const { useState } = React;

const GhIcon = () => (
  <svg className="gh" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55v-2.07c-3.2.7-3.87-1.36-3.87-1.36-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.76 2.69 1.25 3.34.96.1-.74.4-1.25.72-1.54-2.55-.29-5.24-1.27-5.24-5.66 0-1.25.45-2.27 1.18-3.07-.12-.29-.51-1.45.11-3.02 0 0 .96-.31 3.16 1.18a11 11 0 0 1 5.76 0c2.2-1.49 3.16-1.18 3.16-1.18.62 1.57.23 2.73.11 3.02.74.8 1.18 1.82 1.18 3.07 0 4.4-2.7 5.36-5.27 5.65.41.36.78 1.05.78 2.13v3.16c0 .31.21.66.79.55C20.21 21.39 23.5 17.08 23.5 12 23.5 5.65 18.35.5 12 .5z"/></svg>
);

const Icon = ({ children }) => (
  <svg className="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">{children}</svg>
);

const StampIcon = () => (<Icon><rect x="4" y="11" width="16" height="9"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/></Icon>);
const ForgeIcon = () => (<Icon><path d="M14 4h7l-3 5"/><path d="M2 15l5-2 4 6"/><path d="M11 19l3-3 6 4"/><circle cx="7" cy="13" r="2"/></Icon>);
const ShieldIcon = () => (<Icon><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></Icon>);
const PlugIcon = () => (<Icon><path d="M9 7v3a3 3 0 0 0 6 0V7"/><path d="M12 13v8"/><path d="M9 4v3M15 4v3"/></Icon>);

function Nav() {
  return (
    <nav className="nav">
      <a href="#" className="nav-brand"><span className="t">&gt;</span>bitforge</a>
      <div className="nav-links">
        <a href="#forge">Forge</a>
        <a href="#docs">Docs</a>
        <a href="#cli">CLI</a>
        <a href="#" aria-label="GitHub"><GhIcon /></a>
        <button className="nav-cta">Open the forge <span>→</span></button>
      </div>
    </nav>
  );
}

function StampLedger() {
  const stamps = [
    { hash: '@b1f04ge', when: '2m ago',  subj: 'feat(api): retry budget for vault writes', status: 'live',     pct: 72 },
    { hash: '@a9c12d1', when: '18m ago', subj: 'fix: drift in worker pool reaper',         status: 'pass'   },
    { hash: '@93ee0a5', when: '1h ago',  subj: 'refactor: vault adapter signing path',     status: 'pass'   },
    { hash: '@81bb47c', when: '3h ago',  subj: 'bump runtime to go 1.22',                  status: 'reverted' },
    { hash: '@74fa2b3', when: '5h ago',  subj: 'docs: forge intro + anvil glossary',       status: 'pass'   },
    { hash: '@6512d09', when: 'yday',    subj: 'chore: cargo deps refresh',                status: 'pass'   },
  ];
  const chip = {
    live:     { label: 'LIVE',  glyph: '●' },
    pass:     { label: 'PASS',  glyph: '✓' },
    reverted: { label: 'REVRT', glyph: '↶' },
  };
  return (
    <div className="ledger">
      <div className="ledger-head">
        <span className="t">&gt;</span>
        <span className="cmd">bitforge stamp ls <span className="flag">--branch main</span></span>
        <span className="cur">_</span>
      </div>
      <div className="ledger-rows">
        {stamps.map((s) => (
          <div key={s.hash} className={"stamp-row st-" + s.status}>
            <div className="hash">{s.hash}</div>
            <div className="when">{s.when}</div>
            <div className="subj">{s.subj}</div>
            <div className={"chip c-" + s.status}>
              <span className="cl">[</span>{chip[s.status].label} <span className="g">{chip[s.status].glyph}</span><span className="cl">]</span>
            </div>
            {s.status === 'live'
              ? <div className="pct">{s.pct}%</div>
              : <button className="revert" type="button"><span>↶</span> revert</button>}
            {s.status === 'live' && (
              <div className="live-bar"><i style={{ width: s.pct + '%' }}/></div>
            )}
          </div>
        ))}
      </div>
      <div className="ledger-foot">every stamp pinned · revertible</div>
    </div>
  );
}

function Hero() {
  return (
    <section className="hero">
      <div className="hero-left">
        <h1 className="hero-wordmark">
          <span className="t">&gt;</span>bitforge<span className="pix">_</span>
        </h1>
        <div className="hero-tagline">
          A workbench where agents build, ship, and recover — without breaking prod.
        </div>
        <p className="hero-desc">
          Bitforge gives every agent its own anvil: a stamped, sandboxed workspace that mounts your repos, datasets, and docs as one filesystem. Compile, package, and deploy with full provenance — and walk every change back to any prior stamp with a single command.
        </p>
        <div className="hero-ctas">
          <button className="btn btn-primary">Open the forge <span>→</span></button>
          <button className="btn btn-ghost-bordered">Read the docs <span>→</span></button>
        </div>
        <div className="hero-foot">Free during preview · Bring your own runtime</div>
      </div>
      <div className="hero-right">
        <StampLedger />
        <InstallCommand />
      </div>
    </section>
  );
}

function InstallCommand() {
  const [copied, setCopied] = useState(false);
  const onCopy = () => { setCopied(true); setTimeout(() => setCopied(false), 1400); };
  return (
    <div className="install">
      <div className="install-cmd">
        <span className="p">$</span>
        <span className="cmd">npx <span className="green">bitforge</span></span>
        <button className={"copy" + (copied ? ' done' : '')} onClick={onCopy}>{copied ? 'copied' : 'copy'}</button>
      </div>
    </div>
  );
}

function FeatureRow() {
  const items = [
    { Ico: StampIcon, t: 'Every build is a stamp', d: 'Every artifact pinned to a hash you can pull back at any time' },
    { Ico: ForgeIcon, t: 'One mount, every source', d: 'Repos, buckets, and drives stitched into a single ./forge tree' },
    { Ico: ShieldIcon, t: 'Capabilities by default', d: 'Workers run with the smallest permissions the job needs' },
    { Ico: PlugIcon, t: 'Plug into your runtime', d: 'Bring your own image, lockfile, and CI — Bitforge wraps it' },
  ];
  return (
    <section className="features">
      {items.map(({ Ico, t, d }, i) => (
        <div key={i} className="feature">
          <Ico />
          <div>
            <div className="t">{t}</div>
            <div className="d">{d}</div>
          </div>
        </div>
      ))}
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="nav-brand"><span className="t" style={{ color: 'var(--bf-orange)', fontWeight: 700 }}>&gt;</span>bitforge</div>
      <div className="footer-links">
        <a href="#">Privacy</a>
        <a href="#">Security</a>
        <a href="#">Changelog</a>
        <a href="#">Status</a>
        <a href="#">GitHub</a>
      </div>
      <div>© 2026 Bitforge Labs</div>
    </footer>
  );
}

Object.assign(window, { Nav, Hero, StampLedger, InstallCommand, FeatureRow, Footer });
