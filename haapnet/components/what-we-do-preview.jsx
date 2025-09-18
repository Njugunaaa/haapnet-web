import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { GraduationCap, DollarSign, Users } from "lucide-react"
import Link from "next/link"
import AnimatedSection from "./animated-section"

const features = [
  {
    icon: GraduationCap,
    title: "Skills Training",
    description:
      "Comprehensive training programs that equip community members with practical skills for sustainable livelihoods and leadership development.",
    link: "/achievements#skills-training",
  },
  {
    icon: DollarSign,
    title: "Income Generation",
    description:
      "Supporting micro-enterprises and cooperative ventures that create economic opportunities and build financial resilience within communities.",
    link: "/achievements#income-generation",
  },
  {
    icon: Users,
    title: "Community Projects",
    description:
      "Collaborative initiatives that address local needs through infrastructure development, health programs, and educational support.",
    link: "/achievements#community-projects",
  },
]

const WhatWeDoPreview = () => {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">What We Do</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Our comprehensive approach to community development focuses on three key areas that create lasting impact
            and sustainable change.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <Card className="text-center hover:shadow-lg transition-all hover:scale-105 h-full">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 transition-colors hover:bg-primary/20">
                    <feature.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base mb-4 text-pretty">{feature.description}</CardDescription>
                  <Button variant="outline" asChild className="transition-all hover:scale-105 bg-transparent">
                    <Link href={feature.link}>Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="text-center" delay={0.4}>
          <Button size="lg" className="bg-accent hover:bg-accent/90 transition-all hover:scale-105" asChild>
            <Link href="/achievements">View All Our Work</Link>
          </Button>
        </AnimatedSection>
      </div>
    </section>
  )
}

export default WhatWeDoPreview
