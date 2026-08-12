import defaultStyles from './styles/default';
import altStyles from './styles/alt';
import type { AgendaStyleSet } from './styles/types';

// Switch which visual theme is shown: 'default' or 'alt'
const ACTIVE_STYLE: 'default' | 'alt' = 'default';

const STYLE_SETS: Record<'default' | 'alt', AgendaStyleSet> = { default: defaultStyles, alt: altStyles };
const styles = STYLE_SETS[ACTIVE_STYLE];

export default function Agenda() {
  return (
    <div style={styles.container}>
      <h3 style={styles.title}>🗓️ Today's Agenda</h3>
      <div style={styles.list}>
        <div style={styles.item}>11:00 AM — Morning Sync ☕</div>
        <div style={styles.item}>18:00 PM — Microfrontend Webinar 🚀</div>
      </div>
    </div>
  );
}
