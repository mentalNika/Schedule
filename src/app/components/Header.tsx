import Link from "next/link";

export const Header = () => {
  const navLinks = [
    { id: 1, href: "/", value: "Schedule" },

    { id: 2, href: "/change", value: "Change Schedule" },
  ];
  return (
    <header>
      <h1>Schedule for the group №1</h1>
      <nav>
        <ul>
          {navLinks.map((link) => {
            return (
              <li>
                <Link key={link.id} href={link.href}>
                  {link.value}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <img src="/images/1.png" width={300} alt="logo"></img>
    </header>
  );
};
