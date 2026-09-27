export function MapEmbed() {
  return (
    <div className="w-full aspect-[4/3] bg-surface-alt border border-border overflow-hidden">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.1234567890123!2d77.6648!3d12.8456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDUwJzQ0LjIiTiA3N8KwMzgnNTMuMyJF!5e0!3m2!1sen!2sin!4v1234567890"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Sri Kalpa location - Electronic City Phase 2, Bengaluru"
      />
    </div>
  );
}
