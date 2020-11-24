import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="socials">
        <div className="brand">BRAND NAME</div>
        <div className="icons"></div>
      </div>
      <div className="nav">
        <Link href="/">
          <a href="">Home</a>
        </Link>
        <Link href="Gallery">
          <a href="">Gallery</a>
        </Link>
        <Link href="Stories">
          <a href="">Stories</a>
        </Link>
      </div>
      <div className="info">copyright 2020. All Rights Reserved.</div>
    </footer>
  );
}
