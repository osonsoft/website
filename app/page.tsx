import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRight, Phone, Mail, MapPin } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="flex items-center bg-primary-foreground">
        <div className="container relative z-10 mx-auto px-4 py-32 flex flex-col items-center text-center space-y-8">
          <h1 className="text-6xl font-extrabold tracking-tight bg-gradient-to-r from-white via-primary to-white bg-clip-text text-transparent">
            We Build What We Dream
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Osonsoft is a creative studio and product company. We design, build,
            and launch our own digital startups—no clients, just our vision.
            Every product is crafted for the US market, blending technology,
            creativity, and impact.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" className="gap-2">
              Explore Our Products <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* About/Philosophy Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            A Studio for the Next Generation of Apps
          </h2>
          <p className="text-lg text-muted-foreground mb-6">
            We don&apos;t build for clients. We build for ourselves—and for the
            world. Our mission is to create products that inspire, empower, and
            delight millions.
          </p>
        </div>
      </section>

      {/* Flagship Product Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 flex justify-center">
            <div className="relative w-64 h-64 rounded-2xl overflow-hidden shadow-lg bg-secondary/60">
              <Image
                src="/chatflow-logo.svg"
                alt="Chatflow Logo"
                fill
                className="object-contain p-8"
              />
            </div>
          </div>
          <div className="flex-1 space-y-6">
            <h3 className="text-2xl font-bold">Chatflow</h3>
            <p className="text-lg text-muted-foreground">
              Our flagship platform for Instagram DM, messaging, and comments
              automation. Built for creators, brands, and businesses to connect,
              engage, and grow—at scale.
            </p>
            <ul className="text-base text-muted-foreground list-disc list-inside space-y-1">
              <li>Automate conversations and replies</li>
              <li>Boost engagement and conversions</li>
              <li>Designed for the US market</li>
            </ul>
            <Button size="lg" className="gap-2">
              Learn More <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Startups</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="bg-secondary/80 border-0 flex flex-col items-center text-center">
            <CardHeader>
              <div className="flex justify-center mb-4">
                <Image
                  src="/chatflow-logo.svg"
                  alt="Chatflow"
                  width={56}
                  height={56}
                />
              </div>
              <CardTitle>Chatflow</CardTitle>
              <CardDescription>
                Instagram automation for DMs, comments, and more. (2024)
              </CardDescription>
            </CardHeader>
          </Card>
          <Card className="bg-secondary/80 border-0 flex flex-col items-center text-center">
            <CardHeader>
              <div className="flex justify-center mb-4">
                <Image
                  src="/past-app1.svg"
                  alt="Past Project 1"
                  width={56}
                  height={56}
                />
              </div>
              <CardTitle>StoryCraft</CardTitle>
              <CardDescription>
                AI-powered story creation app for mobile. (2022)
              </CardDescription>
            </CardHeader>
          </Card>
          <Card className="bg-secondary/80 border-0 flex flex-col items-center text-center">
            <CardHeader>
              <div className="flex justify-center mb-4">
                <Image
                  src="/past-app2.svg"
                  alt="Past Project 2"
                  width={56}
                  height={56}
                />
              </div>
              <CardTitle>FitVerse</CardTitle>
              <CardDescription>
                Social fitness challenges and wellness platform. (2021)
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold mb-8 text-center">Leadership</h2>
        <div className="flex flex-col md:flex-row gap-12 justify-center items-center">
          <div className="flex flex-col items-center text-center">
            <div className="w-32 h-32 rounded-full overflow-hidden mb-4 bg-secondary/60">
              <Image
                src="/ceo.png"
                alt="Mukhammadsobir Abdurakhimov"
                width={128}
                height={128}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="font-bold text-lg">Mukhammadsobir Abdurakhimov</div>
            <div className="text-muted-foreground mb-2">
              Chief Executive Officer
            </div>
            <div className="text-sm text-muted-foreground max-w-xs">
              Driving innovation and execution across all Osonsoft products.
            </div>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="w-32 h-32 rounded-full overflow-hidden mb-4 bg-secondary/60">
              <Image
                src="/founder.png"
                alt="Mukhammadyusuf Abdurakhimov"
                width={128}
                height={128}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="font-bold text-lg">Mukhammadyusuf Abdurakhimov</div>
            <div className="text-muted-foreground mb-2">
              Founder & President
            </div>
            <div className="text-sm text-muted-foreground max-w-xs">
              Visionary founder, product strategist, and creative force behind
              Osonsoft.
            </div>
          </div>
        </div>
      </section>

      {/* How We Help Founders Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">How We Help Founders</h2>
          <p className="text-lg text-muted-foreground mb-6">
            We invest in education and partner with ambitious founders in an
            accelerator-style format. If you&apos;re building something bold, we
            help you grow your product, provide mentorship, and share in the
            journey for equity.
          </p>
          <div className="flex flex-col md:flex-row gap-8 justify-center items-center mt-8">
            <div className="bg-secondary/80 rounded-xl p-8 flex-1 min-w-[220px]">
              <div className="font-bold text-lg mb-2">Accelerator Model</div>
              <div className="text-muted-foreground">
                We work with select founders, providing resources, mentorship,
                and a path to market in exchange for equity.
              </div>
            </div>
            <div className="bg-secondary/80 rounded-xl p-8 flex-1 min-w-[220px]">
              <div className="font-bold text-lg mb-2">Education & Growth</div>
              <div className="text-muted-foreground">
                We invest in your learning and product growth, helping you avoid
                common pitfalls and scale faster.
              </div>
            </div>
            <div className="bg-secondary/80 rounded-xl p-8 flex-1 min-w-[220px]">
              <div className="font-bold text-lg mb-2">True Partnership</div>
              <div className="text-muted-foreground">
                We only win when you win. Our team becomes your team, working
                side by side to launch and grow your vision.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Build Section */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold mb-8 text-center">What We Build</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <Card className="bg-secondary/80 border-0 flex flex-col items-center text-center p-8">
            <Image
              src="/game-dev.svg"
              alt="Game Development"
              width={56}
              height={56}
              className="mb-4"
            />
            <CardTitle>Game Development</CardTitle>
            <CardDescription>
              Immersive, creative, and fun games for mobile and web.
            </CardDescription>
          </Card>
          <Card className="bg-secondary/80 border-0 flex flex-col items-center text-center p-8">
            <Image
              src="/mobile-apps.svg"
              alt="Mobile Apps"
              width={56}
              height={56}
              className="mb-4"
            />
            <CardTitle>Mobile Apps</CardTitle>
            <CardDescription>
              Beautiful, high-performance apps for iOS and Android.
            </CardDescription>
          </Card>
          <Card className="bg-secondary/80 border-0 flex flex-col items-center text-center p-8">
            <Image
              src="/ai.svg"
              alt="AI"
              width={56}
              height={56}
              className="mb-4"
            />
            <CardTitle>AI</CardTitle>
            <CardDescription>
              AI-powered products and features that make a difference.
            </CardDescription>
          </Card>
          <Card className="bg-secondary/80 border-0 flex flex-col items-center text-center p-8">
            <Image
              src="/web-apps.svg"
              alt="Web Apps"
              width={56}
              height={56}
              className="mb-4"
            />
            <CardTitle>Web Apps</CardTitle>
            <CardDescription>
              Modern, scalable web applications for the US market.
            </CardDescription>
          </Card>
        </div>
      </section>

      {/* Let&apos;s Build Together CTA */}
      <section className="container mx-auto px-4 py-20">
        <div className="bg-primary/10 rounded-xl p-16 text-center animate-gradient-text">
          <h2 className="text-4xl font-bold mb-4">Let&apos;s Build Together</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Are you a founder with a bold idea? Pitch us your vision. We&apos;re
            always looking for the next great product to build, invest in, and
            grow—together.
          </p>
          <Button size="lg" className="gap-2">
            Pitch Your Startup <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary/80 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex flex-col items-center md:items-start">
              <div className="font-bold text-xl mb-2">Osonsoft Studio</div>
              <div className="text-sm text-muted-foreground mb-2">
                Building in-house products for the US market
              </div>
              <div className="flex gap-4 text-muted-foreground text-sm">
                <div className="flex items-center gap-1">
                  <Mail className="h-4 w-4" />
                  hello@osonsoft.com
                </div>
                <div className="flex items-center gap-1">
                  <Phone className="h-4 w-4" />
                  (645) 444-1069
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  Miami, FL
                </div>
              </div>
            </div>
            <div className="text-sm text-muted-foreground text-center md:text-right">
              &copy; 2024 Osonsoft. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
