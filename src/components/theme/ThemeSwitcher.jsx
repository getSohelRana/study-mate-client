import { useEffect, useState } from "react";
import { GoMoon, GoSun } from "react-icons/go";

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState("light"); // default theme

  // Load theme from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute("data-theme", savedTheme);
    } else {
      document.documentElement.setAttribute("data-theme", "light");
    }
  }, []);

  // Change theme function
  const handleThemeChange = (value) => {
    setTheme(value);
    document.documentElement.setAttribute("data-theme", value);
    localStorage.setItem("theme", value);
  };

  return (
    <div className="flex items-center gap-2">
      {/* Toggle Button  */}
      <button title="Change Theme"
        className="cursor-pointer"
        onClick={() => handleThemeChange(theme === "light" ? "dark" : "light")}
      >
        {theme === "light" ? (
          <GoSun size={25}/>
        ) : (
          <GoMoon size={25} className="text-black" />
        )}
      </button>
    </div>
  );
};

export default ThemeSwitcher;
