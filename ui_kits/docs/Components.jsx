/* global React */

function PaperCard({ kind, label, title, sub, chips }) {
  return (
    <div className={`pcard ${kind}`}>
      <div className="pcard-eb">{label}</div>
      <div className="pcard-title">{title}</div>
      <div className="pcard-sub">{sub}</div>
      {chips && (
        <div className="pcard-chips">
          {chips.map((c, i) => <span key={i} className="chip">{c}</span>)}
        </div>
      )}
    </div>
  );
}

function ThreeLayerDiagram() {
  return (
    <div className="diagram">
      <div className="diagram-row">
        <PaperCard kind="network" label="WIRE" title="metered egress" sub="every call gated · every call recorded" />
        <PaperCard kind="storage" label="VAULT" title="stamped volume" sub="content-addressed · point-in-time" />
        <PaperCard kind="compute" label="ANVIL" title="ephemeral worker" sub="capabilities pruned at boot" />
      </div>

      <div className="diagram-arrows">
        <svg viewBox="0 0 600 80" preserveAspectRatio="none">
          <path d="M 100 0 Q 100 50 300 60" stroke="#FF6B1A" strokeWidth="1.5" fill="none" strokeDasharray="4 4"/>
          <path d="M 300 0 L 300 60" stroke="#FF6B1A" strokeWidth="1.5" fill="none" strokeDasharray="4 4"/>
          <path d="M 500 0 Q 500 50 300 60" stroke="#2EE6A8" strokeWidth="1.5" fill="none" strokeDasharray="4 4"/>
          <circle cx="300" cy="60" r="3" fill="#FF6B1A"/>
        </svg>
      </div>

      <div className="diagram-bottom">
        <PaperCard
          kind="sandbox"
          label="FORGE"
          title={<><span className="dot green"></span>forge</>}
          sub=""
          chips={['build.go', 'go:1.22', 'stamped on success']}
        />
      </div>
    </div>
  );
}

function DocsHeader() {
  return (
    <>
      <div className="docs-eyebrow">architecture</div>
      <h1 className="docs-h1">Three pieces, separated on purpose</h1>
    </>
  );
}

function DocsBody() {
  return (
    <>
      <p className="docs-p">
        Bitforge splits a build into three pieces that don't trust each other by default: the <b>vault</b> that holds your code and data, the <b>anvil</b> that runs it, and the <b>wire</b> that lets it talk to the outside world. Each piece keeps its own ledger, so a runaway worker, a leaked secret, or a noisy dependency can never contaminate the other two.
      </p>
      <p className="docs-p">
        Splitting up the moving parts is half the trick. Stitching them back together is the other half: every build is anchored to a single stamp, and that stamp is what you ship, recover, or roll back to. One identifier, one source of truth, one button to undo.
      </p>
    </>
  );
}

Object.assign(window, { PaperCard, ThreeLayerDiagram, DocsHeader, DocsBody });
