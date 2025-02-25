import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Github,
  Twitter,
  Linkedin,
  Users,
  Calendar,
  Trophy,
  CheckCircle,
  Coffee,
} from "lucide-react";

export const Route = createFileRoute("/about")({
  component: RouteComponent,
});

function RouteComponent() {
  return <AboutPage />;
}

const AboutPage = () => {
  const teamMembers = [
    {
      name: "Ayuba Ezekiel",
      role: "Founder & CEO",
      bio: "Former Algorand Foundation developer and DeFi protocol architect with 8+ years in blockchain development.",
      image: "/api/placeholder/300/300",
      links: {
        twitter: "https://twitter.com",
        linkedin: "https://linkedin.com",
        github: "https://github.com",
      },
    },
    {
      name: "Marcus Rivera",
      role: "CTO",
      bio: "Smart contract security expert who previously led engineering at a top DEX. Contributed to Tealish language development.",
      image: "/api/placeholder/300/300",
      links: {
        twitter: "https://twitter.com",
        linkedin: "https://linkedin.com",
        github: "https://github.com",
      },
    },
    {
      name: "Emma Patel",
      role: "Head of AI",
      bio: "PhD in computational linguistics with expertise in applying AI to code generation. Pioneered our natural language to Tealish system.",
      image: "/api/placeholder/300/300",
      links: {
        twitter: "https://twitter.com",
        linkedin: "https://linkedin.com",
        github: "https://github.com",
      },
    },
    {
      name: "David Kim",
      role: "Lead Designer",
      bio: "UX specialist with focus on making complex blockchain interactions simple. Created our intuitive drag-and-drop interface.",
      image: "/api/placeholder/300/300",
      links: {
        twitter: "https://twitter.com",
        linkedin: "https://linkedin.com",
        github: "https://github.com",
      },
    },
  ];

  const values = [
    {
      title: "Democratizing Blockchain",
      description:
        "Making blockchain development accessible to developers of all skill levels.",
    },
    {
      title: "Security First",
      description:
        "Building security into every step of the development process.",
    },
    {
      title: "Innovation Through Simplicity",
      description: "Solving complex problems with elegant, simple solutions.",
    },
    {
      title: "Community Driven",
      description:
        "Engaging with users to shape our product roadmap and features.",
    },
  ];

  return (
    <div className="pt-24 pb-16 container mx-auto px-4 md:px-6">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-teal-500 to-cyan-400 bg-clip-text text-transparent">
          Our Mission
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
          We're building the tools to make Algorand development accessible to
          everyone, regardless of their technical expertise or coding
          experience.
        </p>
      </div>

      {/* Mission Video/Image Section */}
      <div className="mb-16 relative overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800">
        <div className="aspect-video bg-slate-100 dark:bg-slate-900 flex items-center justify-center">
          <img
            src="/api/placeholder/1200/600"
            alt="TealGen Team"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 pt-16">
          <h2 className="text-white text-2xl font-bold mb-2">
            Simplifying Algorand Development
          </h2>
          <p className="text-white/80 mb-4 max-w-2xl">
            Our team is united by a shared vision: to remove barriers to
            blockchain innovation.
          </p>
          <Button className="bg-gradient-to-r from-teal-500 to-cyan-400 hover:from-teal-600 hover:to-cyan-500 text-white">
            Watch Our Story
          </Button>
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
        <Card className="border-none bg-gradient-to-br from-teal-500/10 to-cyan-400/10">
          <CardContent className="p-6 flex flex-col items-center text-center">
            <Users className="w-8 h-8 text-teal-500 mb-2" />
            <div className="text-3xl font-bold text-foreground">25,000+</div>
            <p className="text-muted-foreground">Developers</p>
          </CardContent>
        </Card>
        <Card className="border-none bg-gradient-to-br from-teal-500/10 to-cyan-400/10">
          <CardContent className="p-6 flex flex-col items-center text-center">
            <CheckCircle className="w-8 h-8 text-teal-500 mb-2" />
            <div className="text-3xl font-bold text-foreground">100,000+</div>
            <p className="text-muted-foreground">Contracts Deployed</p>
          </CardContent>
        </Card>
        <Card className="border-none bg-gradient-to-br from-teal-500/10 to-cyan-400/10">
          <CardContent className="p-6 flex flex-col items-center text-center">
            <Trophy className="w-8 h-8 text-teal-500 mb-2" />
            <div className="text-3xl font-bold text-foreground">$50M+</div>
            <p className="text-muted-foreground">TVL in Contracts</p>
          </CardContent>
        </Card>
        <Card className="border-none bg-gradient-to-br from-teal-500/10 to-cyan-400/10">
          <CardContent className="p-6 flex flex-col items-center text-center">
            <Coffee className="w-8 h-8 text-teal-500 mb-2" />
            <div className="text-3xl font-bold text-foreground">∞</div>
            <p className="text-muted-foreground">Cups of Coffee</p>
          </CardContent>
        </Card>
      </div>

      {/* Our Values Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {values.map((value, index) => (
            <Card
              key={index}
              className="border border-slate-200 dark:border-slate-800"
            >
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-teal-500">
                  {value.title}
                </h3>
                <p className="text-muted-foreground">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Team Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Meet Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-40 h-40 rounded-full overflow-hidden mb-4 border-4 border-teal-500 group-hover:border-cyan-400 transition-colors duration-300">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-teal-500 font-medium mb-2">{member.role}</p>
              <p className="text-sm text-muted-foreground mb-4">{member.bio}</p>
              <div className="flex gap-3">
                {member.links.twitter && (
                  <a
                    href={member.links.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-teal-500 transition-colors"
                  >
                    <Twitter className="w-4 h-4" />
                  </a>
                )}
                {member.links.linkedin && (
                  <a
                    href={member.links.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-teal-500 transition-colors"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                )}
                {member.links.github && (
                  <a
                    href={member.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-teal-500 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Partners and Backers */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Our Partners & Backers
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="flex items-center justify-center p-8 bg-slate-50 dark:bg-slate-900 rounded-lg"
            >
              <img
                src={`/api/placeholder/200/80`}
                alt={`Partner ${i}`}
                className="max-h-12 opacity-70 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Join Us Section */}
      <div className="bg-gradient-to-r from-teal-500 to-cyan-400 rounded-xl p-8 text-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-3xl font-bold mb-4">Join Our Team</h2>
            <p className="mb-6">
              We're always looking for talented individuals who are passionate
              about making blockchain technology accessible to everyone. If you
              share our vision, we'd love to hear from you.
            </p>
            <Button className="bg-white text-teal-600 hover:bg-slate-100">
              View Open Positions
            </Button>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
            <p className="mb-4">
              Have questions about TealGen or interested in partnering with us?
              We'd love to hear from you!
            </p>
            <p className="font-medium">hello@tealgen.io</p>
          </div>
        </div>
      </div>
    </div>
  );
};
