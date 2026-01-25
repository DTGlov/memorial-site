const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-charcoal text-cream">
      <div className="container mx-auto px-6 text-center">
        <p className="font-serif text-lg mb-2">
          Emmanuel Narh Glover
        </p>
        <p className="font-sans text-sm text-cream/60">
          Forever in our hearts
        </p>
        <div className="divider-gold my-6 opacity-50" />
        <p className="font-sans text-xs text-cream/40">
          © {currentYear} Glover Family. Made with love.
        </p>
      </div>
    </footer>
  );
};

export default Footer;