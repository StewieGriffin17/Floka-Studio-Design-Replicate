import { useState } from 'react';
import CircularText from './CircularText';

const FlyoutItem = ({ label, children }) => (
  <li className="relative group/sub">
    <span className="flex justify-between items-center cursor-pointer hover:text-primary transition-colors py-1 pr-1">
      {label}
      <svg className="w-3 h-3 ml-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
    </span>
    <div className="absolute left-full top-0 hidden group-hover/sub:block bg-white shadow-lg rounded-md p-3 w-44 z-50">
      <ul className="space-y-2 text-sm">
        {children}
      </ul>
    </div>
  </li>
);

const NavItem = ({ label }) => (
  <li className="cursor-pointer hover:text-primary transition-colors py-1">{label}</li>
);

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState(null);

  const toggleMobile = (section) =>
    setMobileExpanded((prev) => (prev === section ? null : section));

  return (
    <>
      <nav className="hidden lg:flex bg-white shadow-sm text-[#202020] text-[15px] font-medium">
        <div className="flex w-full items-center">

          <div className="flex-none flex items-center px-4 sm:px-6 py-4">
            <a href="/">
              <img src="/logo.png" alt="logo" className="h-8 sm:h-10" />
            </a>
          </div>

          <div className="flex-1 flex justify-around space-x-2 sm:space-x-5 min-w-0">
            <div className="flex items-center cursor-pointer hover:text-primary transition-colors shrink-0">
              Home
            </div>

            <div className="relative group flex items-center cursor-pointer hover:text-primary transition-colors shrink-0">
              <span>Pages</span>
              <svg className="w-3 h-3 ml-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-0 hidden group-hover:block bg-white text-[#202020] shadow-xl rounded-lg z-50 min-w-[200px]">
                <ul className="p-3 space-y-1 text-sm">
                  <NavItem label="About Us" />
                  <FlyoutItem label="Team">
                    <NavItem label="Our Team" />
                    <NavItem label="Team Details" />
                  </FlyoutItem>
                  <FlyoutItem label="Contact Us">
                    <NavItem label="Contact Us V1" />
                    <NavItem label="Contact Us V2" />
                  </FlyoutItem>
                  <FlyoutItem label="Services">
                    <NavItem label="Services V1" />
                    <NavItem label="Services V2" />
                    <NavItem label="Services V3" />
                    <NavItem label="Services V4" />
                    <NavItem label="Service Details" />
                  </FlyoutItem>
                  <NavItem label="Careers" />
                  <NavItem label="FAQs" />
                  <FlyoutItem label="Shop">
                    <NavItem label="Shop" />
                    <NavItem label="Shop Page" />
                    <NavItem label="Product Details" />
                    <NavItem label="Cart" />
                  </FlyoutItem>
                  <NavItem label="404 Error" />
                  <NavItem label="Landing Page" />
                </ul>
              </div>
            </div>

            <div className="relative group flex items-center cursor-pointer hover:text-primary transition-colors shrink-0">
              <span>Portfolio</span>
              <svg className="w-3 h-3 ml-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-0 hidden group-hover:block bg-white shadow-xl rounded-lg z-50 min-w-[180px]">
                <ul className="p-3 space-y-1 text-sm text-[#202020]">
                  <NavItem label="Portfolio Grid" />
                  <NavItem label="Portfolio Carousel" />
                  <NavItem label="Portfolio Masonry" />
                  <NavItem label="Portfolio Showcase" />
                  <NavItem label="Portfolio Details" />
                </ul>
              </div>
            </div>

            <div className="relative group flex items-center cursor-pointer hover:text-primary transition-colors shrink-0">
              <span>Blog</span>
              <svg className="w-3 h-3 ml-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-0 hidden group-hover:block bg-white shadow-xl rounded-lg z-50 min-w-[160px]">
                <ul className="p-3 space-y-1 text-sm text-[#202020]">
                  <NavItem label="Blog Grid" />
                  <NavItem label="Blog Standard" />
                  <NavItem label="Blog Details" />
                </ul>
              </div>
            </div>
          </div>

          <div className="flex-none flex items-center gap-2 sm:gap-3 px-3 sm:px-6">
            <a href="mailto:info@floka.com" className="hover:text-primary transition-colors text-xs sm:text-sm max-w-[100px] sm:max-w-none truncate hidden md:inline-block">
              info@floka.com
            </a>
            <span className="text-gray-300 select-none hidden md:inline">|</span>
            <button
              type="button"
              className="p-2 rounded hover:bg-gray-100 transition-colors"
              onClick={() => document.getElementById('menu_modal').showModal()}
              aria-label="Open menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="h-5 w-5 stroke-current">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

        </div>
      </nav>

      <nav className="lg:hidden bg-white shadow-sm text-[#202020]">
        <div className="flex items-center justify-between px-4 py-3">
          <a href="/">
            <img src="/logo.png" alt="logo" className="h-9" />
          </a>

          <div className="flex items-center gap-2">
            <button
              type="button"
              className="p-2 rounded hover:bg-gray-100 transition-colors"
              onClick={() => document.getElementById('menu_modal').showModal()}
              aria-label="Open full menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="h-5 w-5 stroke-current">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>

            <button
              type="button"
              className="p-2 rounded hover:bg-gray-100 transition-colors"
              onClick={() => setMobileOpen((o) => !o)}
              aria-label="Toggle navigation"
            >
              {mobileOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="h-5 w-5 stroke-current">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="h-5 w-5 stroke-current">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8h16M4 16h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className="border-t border-gray-100 px-4 pb-4 text-sm font-medium max-h-[min(70vh,calc(100dvh-4rem))] overflow-y-auto">
            <div className="py-3 border-b border-gray-100 cursor-pointer hover:text-primary">Home</div>

            {[
              { key: 'pages', label: 'Pages', items: ['About Us', 'Careers', 'FAQs', '404 Error', 'Landing Page'] },
              { key: 'portfolio', label: 'Portfolio', items: ['Portfolio Grid', 'Portfolio Carousel', 'Portfolio Masonry', 'Portfolio Showcase', 'Portfolio Details'] },
              { key: 'blog', label: 'Blog', items: ['Blog Grid', 'Blog Standard', 'Blog Details'] },
            ].map(({ key, label, items }) => (
              <div key={key} className="border-b border-gray-100">
                <button
                  type="button"
                  className="w-full flex justify-between items-center py-3 hover:text-primary transition-colors text-left"
                  onClick={() => toggleMobile(key)}
                >
                  <span>{label}</span>
                  <svg
                    className={`w-4 h-4 transition-transform duration-200 shrink-0 ${mobileExpanded === key ? 'rotate-180' : ''}`}
                    fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {mobileExpanded === key && (
                  <ul className="pb-3 pl-4 space-y-2 text-[#555]">
                    {items.map((item) => (
                      <li key={item} className="cursor-pointer hover:text-primary transition-colors">{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}

            <div className="pt-3">
              <a href="mailto:info@floka.com" className="text-sm hover:text-primary transition-colors break-all">
                info@floka.com
              </a>
            </div>
          </div>
        )}
      </nav>

      <dialog id="menu_modal" className="modal">
        <div className="modal-box w-screen h-screen max-w-none bg-black text-white p-5 sm:p-6 md:p-10 rounded-none overflow-y-auto">

          <form method="dialog">
            <button type="submit" className="absolute right-4 top-4 sm:right-6 sm:top-6 text-sm md:text-base hover:text-white/70 transition-colors z-10">
              Close ✕
            </button>
          </form>

          <div className="flex flex-col md:grid md:grid-cols-3 gap-8 md:gap-10 min-h-full items-start md:items-center pt-12 sm:pt-14 md:pt-0">

            <div className="md:col-span-1 w-full">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-snug">
                Our approach is straightforward— prioritizing functionality, speed, and clarity for solutions.
              </h1>
              <img
                src="/modal_img.jpg"
                alt="preview"
                className="mt-6 sm:mt-8 rounded-xl w-full object-cover max-h-48 sm:max-h-64 md:max-h-none"
              />
            </div>

            <div className="flex flex-col gap-4 sm:gap-5 text-xl sm:text-2xl md:text-3xl text-white/70 md:col-span-1 w-full">
              {['Home', 'Pages', 'Portfolio', 'Blog'].map((item) => (
                <div
                  key={item}
                  className="hover:text-white cursor-pointer transition-colors flex justify-between items-center border-b border-white/10 pb-3 sm:pb-4"
                >
                  <span>{item}</span>
                  <span className="text-lg sm:text-xl text-white/40">+</span>
                </div>
              ))}
            </div>

            <div className="flex justify-center md:col-span-1 w-full py-4 scale-75 sm:scale-90 md:scale-100">
              <CircularText
                text="WANT IT TO SOUND PLAYFUL, LUXURIOUS, OR MORE"
                spinDuration={15}
                onHover="speedUp"
                centerImage="/logo3.png"
                radius={90}
              />
            </div>

          </div>
        </div>
      </dialog>
    </>
  );
};

export default Navbar;
