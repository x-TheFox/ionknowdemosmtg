import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="py-12 md:py-16 border-t border-[#2A2A2A] px-6 max-w-7xl mx-auto bg-[#0A0A0A]">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Brand */}
        <div>
          <h3 className="font-mono tracking-[0.2em] text-[#C9A96E] text-lg">MERIDIAN</h3>
          <p className="text-[#8B7D6B] text-sm mt-4">
            Building lasting legacies.
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-col space-y-4">
          <Link href="/work" className="text-[#8B7D6B] hover:text-[#F5F0EB] transition-colors">Work</Link>
          <Link href="/process" className="text-[#8B7D6B] hover:text-[#F5F0EB] transition-colors">Process</Link>
          <Link href="/services" className="text-[#8B7D6B] hover:text-[#F5F0EB] transition-colors">Services</Link>
          <Link href="/about" className="text-[#8B7D6B] hover:text-[#F5F0EB] transition-colors">About</Link>
        </div>

        {/* Contact */}
        <div className="flex flex-col space-y-2 text-sm text-[#8B7D6B] font-mono">
          <address className="not-italic">
            123 Architectural Way<br />
            Suite 400<br />
            New York, NY 10001
          </address>
          <a href="mailto:info@meridianestates.demo" className="hover:text-[#F5F0EB] transition-colors mt-4 block">
            info@meridianestates.demo
          </a>
          <a href="tel:+18005550199" className="hover:text-[#F5F0EB] transition-colors block">
            +1.800.555.0199
          </a>
        </div>
      </div>

      {/* Bottom */}
      <div className="flex flex-col md:flex-row justify-between items-center mt-16 pt-8 border-t border-[#2A2A2A]/50 text-xs text-[#8B7D6B]">
        <p>&copy; {new Date().getFullYear()} Meridian Estates. All rights reserved.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <Link href="/privacy" className="hover:text-[#F5F0EB] transition-colors">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-[#F5F0EB] transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
