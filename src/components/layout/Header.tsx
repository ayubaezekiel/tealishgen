import { Button } from "@/components/ui/button";
import { DiscordLogoIcon } from "@radix-ui/react-icons";
import { Twitter, MessageCircle } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

const Header = () => {
  return (
    <header className="w-full py-4 px-6 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 fixed top-0 z-50">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-8">
          <a href="/" className="text-xl font-bold text-foreground">
            TealGen
          </a>
          <nav className="hidden md:flex gap-6">
            <a
              href="/roadmap"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Roadmap
            </a>
            <a
              href="/token"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Buy Token
            </a>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <ThemeToggle />
          <div className="flex gap-3">
            <a
              href="https://discord.gg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="ghost" size="icon">
                <DiscordLogoIcon className="w-5 h-5" />
              </Button>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="ghost" size="icon">
                <Twitter className="w-5 h-5" />
              </Button>
            </a>
            <a href="https://t.me" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon">
                <MessageCircle className="w-5 h-5" />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
