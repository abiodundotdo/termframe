// 🖼️ termframe — Terminal UI Component Library

const RESET  = '\x1b[0m';
const BOLD   = '\x1b[1m';
const GREEN  = '\x1b[32m';
const YELLOW = '\x1b[33m';
const CYAN   = '\x1b[36m';
const RED    = '\x1b[31m';
const DIM    = '\x1b[2m';

// ── Table ──────────────────────────────────────────────────
class Table {
  constructor({ headers = [], rows = [], border = true } = {}) {
    this.headers = headers;
    this.rows    = rows;
    this.border  = border;
  }
  render() {
    const cols = this.headers.map((h, i) =>
      Math.max(h.length, ...this.rows.map(r => String(r[i] || '').length))
    );
    const line = cols.map(w => '─'.repeat(w + 2)).join('┼');
    const fmt  = (row) => cols.map((w, i) => ` ${String(row[i]||'').padEnd(w)} `).join('│');
    const out  = [];
    if (this.border) out.push('┌' + cols.map(w => '─'.repeat(w + 2)).join('┬') + '┐');
    out.push('│' + fmt(this.headers.map(h => `${BOLD}${h}${RESET}`)) + '│');
    if (this.border) out.push('├' + line + '┤');
    this.rows.forEach(row => out.push('│' + fmt(row) + '│'));
    if (this.border) out.push('└' + cols.map(w => '─'.repeat(w + 2)).join('┴') + '┘');
    return out.join('\n');
  }
}

// ── ProgressBar ────────────────────────────────────────────
class ProgressBar {
  constructor({ label = '', value = 0, max = 100, width = 30 } = {}) {
    this.label = label; this.value = value; this.max = max; this.width = width;
  }
  render() {
    const pct   = Math.min(this.value / this.max, 1);
    const filled = Math.round(pct * this.width);
    const color  = pct > 0.8 ? RED : pct > 0.5 ? YELLOW : GREEN;
    const bar    = color + '█'.repeat(filled) + RESET + DIM + '░'.repeat(this.width - filled) + RESET;
    return `${this.label.padEnd(12)} [${bar}] ${Math.round(pct * 100)}%`;
  }
}

// ── Spinner ────────────────────────────────────────────────
class Spinner {
  constructor({ label = 'Loading', style = 'dots' } = {}) {
    this.label  = label;
    this.frames = style === 'dots' ? ['⠋','⠙','⠹','⠸','⠼','⠴','⠦','⠧','⠇','⠏'] : ['|','/','-','\\'];
    this.i      = 0;
    this.timer  = null;
  }
  start() {
    this.timer = setInterval(() => {
      process.stdout.write(`\r${CYAN}${this.frames[this.i % this.frames.length]}${RESET} ${this.label}...`);
      this.i++;
    }, 80);
    return this;
  }
  stop(msg = 'Done') {
    clearInterval(this.timer);
    process.stdout.write(`\r${GREEN}✅${RESET} ${msg}\n`);
  }
}

// ── Panel ──────────────────────────────────────────────────
class Panel {
  constructor({ title = '', content = '', width = 50 } = {}) {
    this.title = title; this.content = content; this.width = width;
  }
  render() {
    const inner = this.width - 2;
    const top   = `┌─ ${BOLD}${this.title}${RESET} ${'─'.repeat(Math.max(0, inner - this.title.length - 3))}┐`;
    const lines = this.content.split('\n').map(l => `│ ${l.padEnd(inner - 1)}│`);
    const bot   = '└' + '─'.repeat(inner) + '┘';
    return [top, ...lines, bot].join('\n');
  }
}

// ── Dashboard ──────────────────────────────────────────────
class Dashboard {
  constructor({ title = 'Dashboard' } = {}) {
    this.title      = title;
    this.components = [];
  }
  add(component) { this.components.push(component); return this; }
  render() {
    console.clear();
    console.log(`\n${CYAN}${BOLD}  ${this.title}${RESET}\n`);
    this.components.forEach(c => { console.log(c.render()); console.log(); });
  }
}

module.exports = { Table, ProgressBar, Spinner, Panel, Dashboard };

// ── Demo ────────────────────────────────────────────────────
if (require.main === module) {
  const { Table, ProgressBar, Panel, Dashboard } = module.exports;
  const dash = new Dashboard({ title: '🖼️ termframe — Component Demo' });
  dash.add(new Table({
    headers: ['Service', 'Status', 'Uptime'],
    rows: [
      ['API Server', '✅ Online', '99.9%'],
      ['Database',   '✅ Online', '100%'],
      ['Cache',      '⚠️  Slow',   '98.2%'],
    ]
  }));
  dash.add(new ProgressBar({ label: 'CPU Usage', value: 67, max: 100 }));
  dash.add(new ProgressBar({ label: 'Memory',    value: 42, max: 100 }));
  dash.add(new ProgressBar({ label: 'Disk I/O',  value: 89, max: 100 }));
  dash.add(new Panel({ title: 'Info', content: 'termframe v1.0.0\nRun: node src/components.js' }));
  dash.render();
}
