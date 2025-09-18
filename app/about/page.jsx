import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const teamMembers = [
  {
    name: "Dr. Sarah Kimani",
    role: "Executive Director",
    image: "/placeholder.svg?height=300&width=300&text=Dr.+Sarah+Kimani",
    bio: "20+ years in community development and faith-based initiatives.",
  },
  {
    name: "Rev. John Mwangi",
    role: "Program Director",
    image: "/placeholder.svg?height=300&width=300&text=Rev.+John+Mwangi",
    bio: "Expert in sustainable development and community mobilization.",
  },
  {
    name: "Grace Wanjiku",
    role: "Training Coordinator",
    image: "/placeholder.svg?height=300&width=300&text=Grace+Wanjiku",
    bio: "Specialist in skills development and vocational training programs.",
  },
  {
    name: "David Ochieng",
    role: "Community Outreach Manager",
    image: "/placeholder.svg?height=300&width=300&text=David+Ochieng",
    bio: "Passionate about grassroots engagement and local partnerships.",
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-20 bg-muted">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">About HAAPNET</h1>
            <p className="text-xl text-muted-foreground text-pretty">
              Harvest-time Apostolic And Prophetic NETwork - Building stronger communities through faith, skills, and
              sustainable development.
            </p>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Our Mission</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-pretty">
                    To empower communities through faith-based development initiatives that build local capacity, create
                    sustainable livelihoods, and foster spiritual growth. We work alongside community leaders to address
                    root causes of poverty and create lasting positive change.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Our Vision</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-pretty">
                    Thriving communities across East Africa where every person has access to opportunities for
                    spiritual, economic, and social development. We envision self-sustaining communities that serve as
                    models of transformation and hope.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-20 bg-muted">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-balance">Our Story</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground mb-6 text-pretty">
                HAAPNET was founded in 2009 with a simple yet powerful vision: to see communities transformed through
                the integration of faith and practical development work. What started as a small group of passionate
                individuals has grown into a network spanning multiple countries and touching thousands of lives.
              </p>
              <p className="text-lg text-muted-foreground mb-6 text-pretty">
                Our approach is rooted in the belief that sustainable development must address both the spiritual and
                material needs of communities. We work with local churches, community organizations, and government
                partners to create holistic solutions that respect cultural values while promoting positive change.
              </p>
              <p className="text-lg text-muted-foreground text-pretty">
                Over the years, we have learned that the most effective development happens when communities are
                empowered to lead their own transformation. Our role is to provide resources, training, and support
                while ensuring that local voices and leadership remain at the center of every initiative.
              </p>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-balance">Our Leadership Team</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <Card key={index} className="text-center">
                  <CardHeader>
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                      loading="lazy"
                    />
                    <CardTitle className="text-lg">{member.name}</CardTitle>
                    <CardDescription className="text-primary font-medium">{member.role}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground text-pretty">{member.bio}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
