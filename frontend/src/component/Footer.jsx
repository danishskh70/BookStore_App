const Footer = () => {
  return (
    <footer className="footer footer-center p-10 text-base-content rounded dark:bg-slate-900 dark:text-white mt-auto">
      <nav className="grid grid-flow-col gap-4">
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </nav>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <a>
            {/* Social Media Icons */}
          </a>
        </div>
      </nav>
      <aside>
        <p>Copyright © 2024 - All right reserved by ACME Industries Ltd</p>
      </aside>
    </footer>
  );
};

export default Footer;
