// src/components/Header.jsx
import { Link, NavLink, useLocation } from "react-router-dom";
import { useEffect, useLayoutEffect, useRef, useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef(null);
  const btnRef = useRef(null);
  const headerRef = useRef(null);
  const { pathname } = useLocation();

  // Close menu on route change
  useEffect(() => setOpen(false), [pathname]);

  // Shrink-on-scroll state
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when menu is open (mobile)
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = open ? "hidden" : prev || "";
    return () => {
      document.body.style.overflow = prev || "";
    };
  }, [open]);

  // ESC to close
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  // Click outside to close
  useEffect(() => {
    const onClickAway = (e) => {
      if (!open) return;
      if (navRef.current?.contains(e.target)) return;
      if (btnRef.current?.contains(e.target)) return;
      setOpen(false);
    };
    document.addEventListener("click", onClickAway);
    return () => document.removeEventListener("click", onClickAway);
  }, [open]);

  // 👉 Tell CSS the real header height so pages can offset correctly
  useLayoutEffect(() => {
    const setHeaderVar = () => {
      const h = headerRef.current?.offsetHeight || 120;
      document.documentElement.style.setProperty("--header-h", `${h}px`);
    };
    setHeaderVar();
    const ro = new ResizeObserver(setHeaderVar);
    if (headerRef.current) ro.observe(headerRef.current);
    window.addEventListener("resize", setHeaderVar);
    // also re-run when scrolled state changes (header shrinks)
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", setHeaderVar);
    };
  }, [scrolled]);

  return (
    <header
      ref={headerRef}
      className={`header ${scrolled ? "scrolled" : ""} ${open ? "menu-open" : ""}`}
      role="banner"
    >
      <div className="header__inner container">
        <Link to="/" className="logo" aria-label="Soham Production Home" />
        <h1>SOHAM PRODUCTION</h1>

        <button
          className="nav-toggle"
          ref={btnRef}
          aria-label="Toggle menu"
          aria-controls="site-nav"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          ☰
        </button>

        <nav id="site-nav" ref={navRef} className={`nav ${open ? "open" : ""}`}>
          <ul className="nav-links" onClick={() => setOpen(false)}>
            <li><NavLink to="/" end>Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/product">Products</NavLink></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
