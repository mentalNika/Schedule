import Link from "next/link";

export const Header = () => {
  const navLinks = [
    { id: 1, href: "/", value: "Расписание" },

    { id: 2, href: "/change", value: "Изменить Расписание" },
  ];
  return (
    <header>
      <h1>Расписание для группы №1</h1>
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
      <img src="#" alt="logo"></img>
    </header>
  );
};
