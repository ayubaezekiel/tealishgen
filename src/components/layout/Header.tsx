import { Button } from "@/components/ui/button";
import { DiscordLogoIcon } from "@radix-ui/react-icons";
import { Twitter, MessageCircle } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="w-full py-4 px-4 md:px-6 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 fixed top-0 z-50">
      <div className="container mx-auto flex items-center justify-between gap-4">
        <div className="flex items-center gap-8">
          <Link to="/" className="text-xl font-bold text-foreground">
            TealGen
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            <Link
              to="/roadmap"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Roadmap
            </Link>
            <Button variant="outline">Buy Token</Button>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <ThemeToggle />
          <div className="flex gap-2 md:gap-3">
            <Link
              to="https://discord.gg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="ghost" size="icon">
                <DiscordLogoIcon className="w-5 h-5" />
              </Button>
            </Link>
            <Link
              to="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="ghost" size="icon">
                <Twitter className="w-5 h-5" />
              </Button>
            </Link>
            <Link to="https://t.me" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon">
                <MessageCircle className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
