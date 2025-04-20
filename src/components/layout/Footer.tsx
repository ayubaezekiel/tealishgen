import { Twitter, DiscIcon } from "lucide-react";
import { Link } from "@tanstack/react-router";

const Footer = () => {
  return (
    <footer className="w-full py-12 bg-background border-t">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-foreground">TealGen</h3>
            <p className="text-sm text-muted-foreground">
              Building the future of smart contracts on Algorand
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/roadmap"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Roadmap
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Buy Token
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Community</h4>
            <div className="flex gap-4 justify-center md:justify-start">
              <a
                href="https://discord.gg/EHhyxu9v"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground"
              >
                <DiscIcon className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} TealGen. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
