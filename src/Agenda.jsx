import React from 'react';
export default function Agenda() {
  return (
    <div style={{ fontFamily: "'Source Sans Pro', sans-serif" }}>
      <h3 style={{ color: '#57B12D', margin: '0 0 10px 0', fontFamily: "'Montserrat', sans-serif", fontWeight: 700, textTransform: 'uppercase' }}>📆 Today's Agenda</h3>
      <div style={{ fontSize: '14px', color: '#8b949e' }}>
        <div>11:00 AM — Morning Sync ☕</div>
        <div>18:00 PM — Microfrontend Webinar 🚀</div>
      </div>
    </div>
  );
}
