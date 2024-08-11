import ThemeSwitcher from "./ThemeSwitcher";

const Header = () => {
  return (
    <header className="flex justify-between items-center align-middle bg-zinc-100 dark:bg-zinc-950 p-4 shadow-sm">
        <ThemeSwitcher />
      <h1 className="flex-1 text-center text-xl font-semibold text-primary dark:text-primary/80">Top-100-Movies</h1>
    </header>
  );
};

export default Header;
