import { Button } from "@/components/ui/button";
import { DiscordLogoIcon } from "@radix-ui/react-icons";
import { Twitter, MessageCircle, Menu } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { Link } from "@tanstack/react-router";
import { useState } from "react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full py-4 px-4 md:px-6 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 fixed top-0 z-50">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-4 md:gap-8">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-teal-500 to-cyan-400 flex items-center justify-center">
              <span className="text-white font-bold text-sm">TG</span>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-teal-500 to-cyan-400 bg-clip-text text-transparent">
              TealGen
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            <Link
              to="/roadmap"
              className="text-muted-foreground hover:text-foreground transition-colors font-medium"
            >
              Roadmap
            </Link>
            <Link
              to="/features"
              className="text-muted-foreground hover:text-foreground transition-colors font-medium"
            >
              Features
            </Link>
            <Link
              to="/about"
              className="text-muted-foreground hover:text-foreground transition-colors font-medium"
            >
              About
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden md:block">
            <Button className="bg-gradient-to-r from-teal-500 to-cyan-400 hover:from-teal-600 hover:to-cyan-500 text-white font-medium">
              Buy Token
            </Button>
          </div>

          <ThemeToggle />

          <div className="hidden md:flex gap-2">
            <a
              href="https://discord.gg"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:scale-110"
            >
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                <DiscordLogoIcon className="w-5 h-5" />
              </Button>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:scale-110"
            >
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                <Twitter className="w-5 h-5" />
              </Button>
            </a>
            <a
              href="https://t.me"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:scale-110"
            >
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                <MessageCircle className="w-5 h-5" />
              </Button>
            </a>
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu className="w-6 h-6" />
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-background border-b p-4 z-50">
          <nav className="flex flex-col gap-4">
            <Link
              to="/roadmap"
              className="text-foreground py-2 px-4 hover:bg-muted rounded-md transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Roadmap
            </Link>
            <Link
              to="/features"
              className="text-foreground py-2 px-4 hover:bg-muted rounded-md transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Features
            </Link>
            <Link
              to="/about"
              className="text-foreground py-2 px-4 hover:bg-muted rounded-md transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Button className="bg-gradient-to-r from-teal-500 to-cyan-400 hover:from-teal-600 hover:to-cyan-500 text-white font-medium mt-2">
              Buy Token
            </Button>

            <div className="flex gap-2 mt-2 justify-center">
              <a
                href="https://discord.gg"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="ghost" size="icon" className="rounded-full">
                  <DiscordLogoIcon className="w-5 h-5" />
                </Button>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Twitter className="w-5 h-5" />
                </Button>
              </a>
              <a href="https://t.me" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="rounded-full">
                  <MessageCircle className="w-5 h-5" />
                </Button>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
