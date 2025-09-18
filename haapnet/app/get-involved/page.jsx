import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, Users, Handshake, Share2 } from "lucide-react"
import AnimatedSection from "@/components/animated-section"

const involvementOptions = [
  {
    icon: Users,
    title: "Volunteer",
    description: "Join our team of dedicated volunteers and make a direct impact in communities across East Africa.",
    benefits: ["Skills development", "Cultural exchange", "Personal growth", "Networking opportunities"],
    cta: "Apply to Volunteer",
    link: "/volunteer-application",
  },
  {
    icon: Heart,
    title: "Donate",
    description: "Support our mission with financial contributions that directly fund community development projects.",
    benefits: ["Tax deductible", "Regular updates", "Project reports", "Impact tracking"],
    cta: "Make a Donation",
    link: "/donate",
  },
  {
    icon: Handshake,
    title: "Partner",
    description: "Collaborate with us as an organization to amplify impact and create sustainable change together.",
    benefits: ["Joint initiatives", "Resource sharing", "Capacity building", "Strategic alignment"],
    cta: "Explore Partnership",
    link: "/partnership",
  },
  {
    icon: Share2,
    title: "Share",
    description: "Help spread awareness about our work and mission through your networks and social media.",
    benefits: ["Easy sharing tools", "Impact stories", "Social media kits", "Community building"],
    cta: "Share Our Story",
    link: "/share",
  },
]

export default function GetInvolvedPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-20 bg-muted">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <AnimatedSection>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Get Involved</h1>
              <p className="text-xl text-muted-foreground text-pretty">
                Join us in building stronger communities and creating lasting positive change across East Africa.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Involvement Options */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-4">
            <AnimatedSection className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Ways to Make a Difference</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                Whether you have time, resources, or expertise to share, there's a meaningful way for you to contribute
                to our mission.
              </p>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 gap-8">
              {involvementOptions.map((option, index) => (
                <AnimatedSection key={index} delay={index * 0.1}>
                  <Card className="h-full hover:shadow-lg transition-all hover:scale-105">
                    <CardHeader>
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                          <option.icon className="w-6 h-6 text-primary" />
                        </div>
                        <CardTitle className="text-2xl">{option.title}</CardTitle>
                      </div>
                      <CardDescription className="text-base text-pretty">{option.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="mb-6">
                        <h4 className="font-semibold mb-3">Benefits:</h4>
                        <ul className="space-y-1">
                          {option.benefits.map((benefit, benefitIndex) => (
                            <li key={benefitIndex} className="flex items-center text-sm text-muted-foreground">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <Button className="w-full bg-primary hover:bg-primary/90 transition-all hover:scale-105" asChild>
                        <a href={option.link}>{option.cta}</a>
                      </Button>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">Ready to Make an Impact?</h2>
              <p className="text-lg opacity-90 mb-8 text-pretty">
                Every contribution, no matter how small, helps us build stronger communities and create lasting change.
                Join our movement today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" className="transition-all hover:scale-105" asChild>
                  <a href="/contact">Contact Us</a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-primary transition-all hover:scale-105 bg-transparent"
                  asChild
                >
                  <a href="/about">Learn More</a>
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
