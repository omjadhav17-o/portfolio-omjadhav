import Link from "next/link"
import { ArrowRight, Download, Github, Linkedin, Mail, MapPin } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header/Navigation */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 font-bold">
            <span className="text-xl">Om Jadhav</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#about" className="text-sm font-medium transition-colors hover:text-primary">
              About
            </Link>
            <Link href="#experience" className="text-sm font-medium transition-colors hover:text-primary">
              Experience
            </Link>
            <Link href="#projects" className="text-sm font-medium transition-colors hover:text-primary">
              Projects
            </Link>
            <Link href="#skills" className="text-sm font-medium transition-colors hover:text-primary">
              Skills
            </Link>
            <Link href="#contact" className="text-sm font-medium transition-colors hover:text-primary">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" asChild>
              <Link href="#contact">Contact Me</Link>
            </Button>
            <Button size="sm" asChild>
              <a href="/resume.pdf" download>
                <Download className="mr-2 h-4 w-4" />
                Resume
              </a>
            </Button>
          </div>
        </div>
      </header>

      <main className="container py-10 md:py-16">
        {/* Hero Section */}
        <section className="flex flex-col md:flex-row items-center gap-8 py-8 md:py-16 rounded-xl bg-gradient-to-br from-primary/5 via-background to-secondary/5">
          <div className="flex-1 space-y-4 p-6">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Hi, I'm <span className="text-primary">Om Jadhav</span>
            </h1>
            <p className="text-xl text-muted-foreground">Software Developer & Flutter Enthusiast</p>
            <p className="text-muted-foreground max-w-[600px]">
              I'm a passionate IT student and developer with experience in Flutter, AWS, and IoT solutions. Currently
              pursuing my Bachelor's in Information Technology at AISSMS Institute.
            </p>
            <div className="flex gap-4 pt-4">
              <Button asChild>
                <Link href="#projects">
                  View My Work <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="https://github.com/omjadhav17-o" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="https://linkedin.com/in/om-jadhav-a20299257" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="mr-2 h-4 w-4" />
                  LinkedIn
                </Link>
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="w-[280px] h-[280px] md:w-[320px] md:h-[320px] rounded-full overflow-hidden border-4 border-primary/20 bg-gradient-to-br from-primary/10 to-secondary/10">
              <Avatar className="w-full h-full">
                <AvatarImage src="/om.jpeg" alt="Om Jadhav" />
                <AvatarFallback className="text-6xl">OJ</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-10 scroll-mt-20">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tight">About Me</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  I'm an Information Technology student at AISSMS Institute Of Information Technology, SPPU, with a
                  passion for developing innovative software solutions. My journey in tech has led me to explore various
                  domains including mobile app development, IoT, and cloud computing.
                </p>
                <p className="text-muted-foreground">
                  With experience as a Software Developer Intern at Vibron Solutions and a Flutter Developer at
                  DreamaAI, I've honed my skills in creating efficient, user-friendly applications. Currently, I'm also
                  serving as an Android Lead on Campus for Google Developer Group in Pune.
                </p>
              </div>
              <div className="space-y-4">
                <div className="space-y-4">
                  <div className="grid grid-cols-1 gap-4">
                    <div className="flex items-center gap-2">
                      <Mail className="h-5 w-5 text-primary" />
                      <span>omj3211@gmail.com</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-5 w-5 text-primary" />
                      <span>Pune, Maharashtra, India</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Linkedin className="h-5 w-5 text-primary" />
                      <Link
                        href="https://linkedin.com/in/om-jadhav-a20299257"
                        className="hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        linkedin.com/in/om-jadhav-a20299257
                      </Link>
                    </div>
                    <div className="flex items-center gap-2">
                      <Github className="h-5 w-5 text-primary" />
                      <Link
                        href="https://github.com/omjadhav17-o"
                        className="hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        github.com/omjadhav17-o
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-10 scroll-mt-20">
          <h2 className="text-3xl font-bold tracking-tight mb-8">Experience</h2>
          <div className="space-y-8">
            <Card className="bg-gradient-to-r from-background to-primary/5">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                  <div>
                    <CardTitle>Software Developer Intern</CardTitle>
                    <CardDescription>Armtech AI - Pune, India</CardDescription>
                  </div>
                  <Badge className="w-fit">March 2025</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                  <li>Architected AWS-based infrastructure for IoT projects, reducing operational costs by 15%</li>
                  <li>
                    Developed a real-time dashboard using Python and React, improving operational efficiency by 20%
                  </li>
                  <li>Implemented CI/CD pipelines using Docker and Jenkins for automated testing of microservices</li>
                  <li>
                    Designed distributed systems for processing large-scale sensor data from IoT devices in real-time
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-background to-primary/5">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                  <div>
                    <CardTitle>Flutter Developer Intern</CardTitle>
                    <CardDescription>DreamaAI - Remote</CardDescription>
                  </div>
                  <Badge className="w-fit">October 2024 - November 2024</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                  <li>Built cross-platform mobile features using Flutter, Firebase, and RESTful APIs</li>
                  <li>Improved authentication flow efficiency by 30% through optimized state management</li>
                  <li>Scaled backend logic to handle 5,000+ concurrent users using Firebase Cloud Functions</li>
                  <li>Implemented machine learning-based recommendation system that improved user engagement by 25%</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-background to-primary/5">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                  <div>
                    <CardTitle>Android Lead on Campus</CardTitle>
                    <CardDescription>Google Developer Group - Pune, India</CardDescription>
                  </div>
                  <Badge className="w-fit">October 2024 - Present</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                  <li>Lead Android development and mentor a 5-member student team on Google technologies</li>
                  <li>Deliver bi-weekly feature rollouts with code reviews, improving app engagement by 40%</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-10 scroll-mt-20">
          <h2 className="text-3xl font-bold tracking-tight mb-8">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="flex flex-col h-full bg-gradient-to-br from-background to-primary/5">
              <CardHeader>
                <CardTitle>Metadata Visualizer</CardTitle>
                <CardDescription>React, Node.js, Trino, AWS</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="aspect-video rounded-md overflow-hidden mb-4 bg-muted">
                  <img
                    src=""
                    alt="Metadata Visualizer"
                    className="w-full h-full object-cover"
                  />
                </div>
                <ul className="list-disc pl-5 space-y-2 text-muted-foreground text-sm">
                  <li>Engineered a full-stack dashboard to visualize and manage S3 metadata across cloud platforms</li>
                  <li>
                    Created SDKs for Apache Iceberg tables and integrated Trino for distributed query optimization
                  </li>
                  <li>Implemented information retrieval algorithms to enable fast searching across distributed data</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="sm" className="w-full" asChild>
                  <Link href="#" target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    View Code
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="flex flex-col h-full bg-gradient-to-br from-background to-primary/5">
              <CardHeader>
                <CardTitle>Smart Meter App</CardTitle>
                <CardDescription>Flutter, AWS IoT Core, MQTT, Python</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="aspect-video rounded-md overflow-hidden mb-4 bg-muted">
                  <img
                    src=""
                    alt="Smart Meter App"
                    className="w-full h-full object-cover"
                  />
                </div>
                <ul className="list-disc pl-5 space-y-2 text-muted-foreground text-sm">
                  <li>Developed an IoT energy monitoring system with real-time environmental tracking</li>
                  <li>Built a secure remote device control system with authentication using AWS IoT Core</li>
                  <li>Created a machine learning model to predict energy consumption patterns with 87% accuracy</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="sm" className="w-full" asChild>
                  <Link href="https://github.com/omjadhav17-o/SmartMeterApp" target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    View Code
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="flex flex-col h-full bg-gradient-to-br from-background to-primary/5">
              <CardHeader>
                <CardTitle>Pixel Adventure Game</CardTitle>
                <CardDescription>Flutter, Flame Engine, Dart</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="aspect-video rounded-md overflow-hidden mb-4 bg-muted">
                  <img
                    src=""
                    alt="Pixel Adventure Game"
                    className="w-full h-full object-cover"
                  />
                </div>
                <ul className="list-disc pl-5 space-y-2 text-muted-foreground text-sm">
                  <li>Created a 2D platformer game with animations, obstacle collision detection, and level logic</li>
                  <li>Designed responsive UI that adapts to different screen sizes while maintaining performance</li>
                  <li>Implemented state management for game progress and player statistics using local storage</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="sm" className="w-full" asChild>
                  <Link href="https://github.com/omjadhav17-o/PixalAdvanture" target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    View Code
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </section>

        {/* Skills Section */}
        <section
          id="skills"
          className="py-10 scroll-mt-20 bg-gradient-to-br from-background via-primary/5 to-background rounded-xl"
        >
          <h2 className="text-3xl font-bold tracking-tight mb-8 px-4">Technical Skills</h2>
          <Tabs defaultValue="languages" className="w-full">
            <TabsList className="grid w-full grid-cols-5">
              <TabsTrigger value="languages">Languages</TabsTrigger>
              <TabsTrigger value="technologies">Technologies</TabsTrigger>
              <TabsTrigger value="frameworks">Frameworks</TabsTrigger>
              <TabsTrigger value="tools">Cloud/Tools</TabsTrigger>
              <TabsTrigger value="databases">Databases</TabsTrigger>
            </TabsList>
            <TabsContent value="languages" className="p-4 border rounded-md mt-2">
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="text-sm py-2 px-3">
                  Python
                </Badge>
                <Badge variant="secondary" className="text-sm py-2 px-3">
                  C
                </Badge>
                <Badge variant="secondary" className="text-sm py-2 px-3">
                  C++
                </Badge>
                <Badge variant="secondary" className="text-sm py-2 px-3">
                  Java
                </Badge>
                <Badge variant="secondary" className="text-sm py-2 px-3">
                  JavaScript
                </Badge>
                <Badge variant="secondary" className="text-sm py-2 px-3">
                  Dart
                </Badge>
              </div>
            </TabsContent>
            <TabsContent value="technologies" className="p-4 border rounded-md mt-2">
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="text-sm py-2 px-3">
                  Unix/Linux
                </Badge>
                <Badge variant="secondary" className="text-sm py-2 px-3">
                  Distributed Systems
                </Badge>
                <Badge variant="secondary" className="text-sm py-2 px-3">
                  TCP/IP
                </Badge>
                <Badge variant="secondary" className="text-sm py-2 px-3">
                  Machine Learning
                </Badge>
                <Badge variant="secondary" className="text-sm py-2 px-3">
                  Information Retrieval
                </Badge>
              </div>
            </TabsContent>
            <TabsContent value="frameworks" className="p-4 border rounded-md mt-2">
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="text-sm py-2 px-3">
                  Spring Boot
                </Badge>
                <Badge variant="secondary" className="text-sm py-2 px-3">
                  React
                </Badge>
                <Badge variant="secondary" className="text-sm py-2 px-3">
                  Node.js
                </Badge>
                <Badge variant="secondary" className="text-sm py-2 px-3">
                  Flutter
                </Badge>
              </div>
            </TabsContent>
            <TabsContent value="tools" className="p-4 border rounded-md mt-2">
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="text-sm py-2 px-3">
                  AWS
                </Badge>
                <Badge variant="secondary" className="text-sm py-2 px-3">
                  Docker
                </Badge>
                <Badge variant="secondary" className="text-sm py-2 px-3">
                  Kubernetes
                </Badge>
                <Badge variant="secondary" className="text-sm py-2 px-3">
                  Jenkins
                </Badge>
                <Badge variant="secondary" className="text-sm py-2 px-3">
                  Firebase
                </Badge>
                <Badge variant="secondary" className="text-sm py-2 px-3">
                  Git
                </Badge>
              </div>
            </TabsContent>
            <TabsContent value="databases" className="p-4 border rounded-md mt-2">
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="text-sm py-2 px-3">
                  MySQL
                </Badge>
                <Badge variant="secondary" className="text-sm py-2 px-3">
                  Trino
                </Badge>
                <Badge variant="secondary" className="text-sm py-2 px-3">
                  Apache Iceberg
                </Badge>
              </div>
            </TabsContent>
          </Tabs>
        </section>

        {/* Achievements Section */}
        <section id="achievements" className="py-10 scroll-mt-20">
          <h2 className="text-3xl font-bold tracking-tight mb-8">Achievements & Certifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="flex flex-col items-center text-center p-6 bg-gradient-to-br from-background to-primary/5">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <span className="text-primary text-xl font-bold">🌟</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Liquid Galaxy Project</h3>
              <p className="text-muted-foreground">
                Active contributor to Liquid Galaxy Project (GSoC), an open-source geo-visualization initiative
              </p>
            </Card>

            <Card className="flex flex-col items-center text-center p-6 bg-gradient-to-br from-background to-primary/5">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <span className="text-primary text-xl font-bold">🏆</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">COEP Inspiron Hackathon</h3>
              <p className="text-muted-foreground">
                Won "Best UI Award" (Top 8) at COEP Inspiron Hackathon from 240+ participating teams
              </p>
            </Card>

            <Card className="flex flex-col items-center text-center p-6 bg-gradient-to-br from-background to-primary/5">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <span className="text-primary text-xl font-bold">🥇</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">CDAC National IoT Hackathon</h3>
              <p className="text-muted-foreground">
                Secured Top 5 nationally at CDAC National IoT Hackathon for innovative smart city solution
              </p>
            </Card>

            <Card className="flex flex-col items-center text-center p-6 bg-gradient-to-br from-background to-primary/5">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <span className="text-primary text-xl font-bold">©</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">AWS Architecture Copyright</h3>
              <p className="text-muted-foreground">
                Received copyright for original AWS architecture design for scalable IoT data processing
              </p>
            </Card>

            <Card className="flex flex-col items-center text-center p-6 bg-gradient-to-br from-background to-primary/5">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <span className="text-primary text-xl font-bold">2533</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">TCS CodeVita</h3>
              <p className="text-muted-foreground">
                Ranked 2533 among 100,000+ participants in TCS CodeVita competitive programming contest
              </p>
            </Card>
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="py-10 scroll-mt-20 bg-gradient-to-br from-background via-primary/5 to-background rounded-xl"
        >
          <h2 className="text-3xl font-bold tracking-tight mb-8">Get In Touch</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-gradient-to-r from-background to-primary/5">
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
                <CardDescription>Feel free to reach out through any of these channels</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-medium">omj3211@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Linkedin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">LinkedIn</p>
                    <Link
                      href="https://linkedin.com/in/om-jadhav-a20299257"
                      className="font-medium hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      linkedin.com/in/om-jadhav-a20299257
                    </Link>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Github className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">GitHub</p>
                    <Link
                      href="https://github.com/omjadhav17-o"
                      className="font-medium hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      github.com/omjadhav17-o
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-background to-primary/5">
              <CardHeader>
                <CardTitle>Send Me a Message</CardTitle>
                <CardDescription>I'll get back to you as soon as possible</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Name
                      </label>
                      <input
                        id="name"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Your name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Your email"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Subject
                    </label>
                    <input
                      id="subject"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Subject"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <textarea
                      id="message"
                      className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Your message"
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t py-6 md:py-8">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div>
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Om Jadhav. All rights reserved.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <Link
              href="https://linkedin.com/in/om-jadhav-a20299257"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link
              href="https://github.com/omjadhav17-o"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link href="mailto:omj3211@gmail.com" className="text-muted-foreground hover:text-foreground">
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
