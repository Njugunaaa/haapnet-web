import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Eye, Leaf, Users } from "lucide-react"
import AnimatedSection from "@/components/animated-section"

const values = [
  {
    icon: MapPin,
    title: "Local Focus",
    description:
      "We believe that sustainable development starts at the grassroots level. Our programs are designed and implemented in partnership with local communities, ensuring that solutions are culturally appropriate and community-owned.",
    color: "bg-blue-500",
  },
  {
    icon: Eye,
    title: "Transparency",
    description:
      "We maintain the highest standards of accountability and transparency in all our operations. Our stakeholders have access to regular reports on our activities, finances, and impact measurements.",
    color: "bg-green-500",
  },
  {
    icon: Leaf,
    title: "Sustainability",
    description:
      "Every project we undertake is designed with long-term sustainability in mind. We focus on building local capacity and creating systems that can continue to operate and grow without external dependency.",
    color: "bg-orange-500",
  },
  {
    icon: Users,
    title: "Inclusivity",
    description:
      "We are committed to ensuring that all members of the community, regardless of gender, age, ethnicity, or social status, have equal access to opportunities and benefits from our programs.",
    color: "bg-purple-500",
  },
]

export default function CommitmentPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-20 bg-muted">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <AnimatedSection>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Our Commitment</h1>
              <p className="text-xl text-muted-foreground text-pretty">
                The values and principles that guide our work and define our approach to community development.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-4">
            <AnimatedSection className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Our Core Values</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                These fundamental principles shape every decision we make and every action we take in our mission to
                build stronger communities.
              </p>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <AnimatedSection key={index} delay={index * 0.1}>
                  <Card className="h-full hover:shadow-lg transition-all hover:scale-105">
                    <CardHeader>
                      <div className="flex items-center space-x-4 mb-4">
                        <div className={`w-12 h-12 ${value.color} rounded-full flex items-center justify-center`}>
                          <value.icon className="w-6 h-6 text-white" />
                        </div>
                        <CardTitle className="text-2xl">{value.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base text-pretty">{value.description}</CardDescription>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Commitment Statement */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-balance">Our Promise to Communities</h2>
              <div className="prose prose-lg prose-invert max-w-none">
                <p className="text-lg opacity-90 mb-6 text-pretty">
                  We commit to working alongside communities as partners, not as external agents of change. We promise
                  to listen more than we speak, to learn from local wisdom, and to support community-led initiatives
                  that reflect the values and aspirations of the people we serve.
                </p>
                <p className="text-lg opacity-90 mb-6 text-pretty">
                  We pledge to be transparent in our operations, accountable for our actions, and responsive to the
                  evolving needs of the communities we work with. Our success is measured not by the projects we
                  complete, but by the lasting positive change we help communities create for themselves.
                </p>
                <p className="text-lg opacity-90 text-pretty">
                  Above all, we commit to approaching our work with humility, respect, and a deep appreciation for the
                  strength and resilience that already exists within every community we have the privilege to serve.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
