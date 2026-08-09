import type { AgendaStyleSet } from './types';

// A completely different look: a hand-written sticky note instead of a dark card.
const altStyles: AgendaStyleSet = {
  container: {
    fontFamily: "'Courier New', monospace",
    background: '#fff7cc',
    color: '#3a2f00',
    padding: '16px',
    borderRadius: '2px',
    border: '2px dashed #d4a017',
    boxShadow: '4px 4px 0 #d4a017',
    transform: 'rotate(-1deg)',
  },
  title: {
    color: '#c2410c',
    margin: '0 0 10px 0',
    fontFamily: "'Courier New', monospace",
    fontWeight: 700,
    textTransform: 'none',
    fontSize: '16px',
    letterSpacing: '1px',
  },
  list: { fontSize: '14px', color: '#3a2f00' },
  item: { padding: '4px 0', borderBottom: '1px dashed #d4a017' },
};

export default altStyles;
