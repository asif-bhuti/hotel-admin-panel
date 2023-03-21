import Image from "next/image";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

function Header() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <>
      <div className="grid place-items-center h-screen">
        <div className="flex justify-center">
          {currentTheme === "dark" ? (
            <button
              className="bg-gray-100 w-28 rounded-md border-purple-400 border-2 p-4 hover:bg-gray-400"
              onClick={() => {
                setTheme("light");
              }}
            >
              {""}
              <Image src="/sun.svg" height="50" width="50" alt="logo" />
            </button>
          ) : (
            <button
              className="bg-gray-100 w-28 rounded-md border-purple-400 border-2 p-4 hover:bg-gray-400"
              onClick={() => {
                setTheme("dark");
              }}
            >
              <Image src="/moon.svg" height="50" width="50" alt="logo" />
            </button>
          )}
        </div>
      </div>
    </>
  );
}

export default Header;
