import Link from "next/link";

import { siteConfig } from "@/config/site";
import { Icons } from "@/components/icons";
import { MainNav } from "@/components/main-nav";
import { Button } from "@/components/ui/button";

export function SiteHeader() {
  return (
    <header className="border-grid sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-14 items-center gap-2 md:gap-4">
        <Link
          href="/"
          className="md:hidden mr-4 flex items-center gap-2 lg:mr-6"
        >
          <Icons.logo className="h-12 w-auto p-1" />
        </Link>
        <MainNav />
        <div className="ml-auto flex items-center gap-2 md:flex-1 md:justify-end">
          <div className="hidden w-full flex-1 md:flex md:w-auto md:flex-none"></div>
          <nav className="hidden md:flex items-center gap-0.5">
            <Button
              asChild
              variant="ghost"
              size="icon"
              className="h-8 w-8 px-0"
            >
              <Link
                href={siteConfig.links.github}
                target="_blank"
                rel="noreferrer"
              >
                <Icons.gitHub className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
            {/* <ModeSwitcher /> */}
          </nav>
        </div>
      </div>
    </header>
  );
}
