import type { AgendaStyleSet } from './types';

// Matches the dark dashboard-card look shared by the other LEOday widgets.
const defaultStyles: AgendaStyleSet = {
  container: { fontFamily: "'Source Sans Pro', sans-serif" },
  title: {
    color: '#57B12D',
    margin: '0 0 10px 0',
    fontFamily: "'Montserrat', sans-serif",
    fontWeight: 700,
    textTransform: 'uppercase',
  },
  list: { fontSize: '14px', color: '#8b949e' },
  item: {},
};

export default defaultStyles;
