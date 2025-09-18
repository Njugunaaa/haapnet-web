import { Button } from "@/components/ui/button"
import Link from "next/link"
import AnimatedSection from "./animated-section"

const AboutTeaser = () => {
  return (
    <section className="py-20 bg-muted">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection direction="left">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
              Empowering Communities Through Faith and Action
            </h2>
            <p className="text-lg text-muted-foreground mb-6 text-pretty">
              HAAPNET is a harvest-time apostolic and prophetic network dedicated to building stronger, more resilient
              communities. We believe in the power of local leadership, sustainable development, and faith-driven action
              to create lasting change.
            </p>
            <p className="text-lg text-muted-foreground mb-8 text-pretty">
              Our approach combines practical skills training, resource mobilization, and spiritual guidance to address
              the root causes of community challenges. We work alongside local leaders to develop solutions that are
              culturally appropriate and economically sustainable.
            </p>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 transition-all hover:scale-105">
              <Link href="/about">Read More About Us</Link>
            </Button>
          </AnimatedSection>
          <AnimatedSection direction="right" delay={0.2}>
            <div className="relative">
              <img
                src="/placeholder.svg?height=600&width=800&text=HAAPNET+Community+Work"
                alt="HAAPNET community development work"
                className="rounded-lg shadow-lg w-full h-auto transition-transform hover:scale-105"
                loading="lazy"
              />
              <div className="absolute -bottom-6 -left-6 bg-accent text-accent-foreground p-6 rounded-lg shadow-lg">
                <p className="font-bold text-2xl">15+</p>
                <p className="text-sm">Years of Impact</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}

export default AboutTeaser
