import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, Clock } from "lucide-react"
import Link from "next/link"

const newsItems = [
  {
    title: "New Skills Training Center Opens in Nakuru",
    description: "Our latest facility will serve over 500 community members with vocational training programs.",
    date: "March 15, 2024",
    image: "/placeholder.svg?height=200&width=300&text=Training+Center",
    link: "/news/skills-training-center-nakuru",
  },
  {
    title: "Community Garden Project Yields First Harvest",
    description: "Local families celebrate successful organic farming initiative that provides food security.",
    date: "March 10, 2024",
    image: "/placeholder.svg?height=200&width=300&text=Community+Garden",
    link: "/news/community-garden-harvest",
  },
]

const upcomingEvents = [
  {
    title: "Leadership Development Workshop",
    description: "Three-day intensive program for emerging community leaders.",
    date: "April 20-22, 2024",
    location: "Nairobi Conference Center",
    link: "/events/leadership-workshop-april",
  },
  {
    title: "Annual Community Impact Summit",
    description: "Celebrating achievements and planning for the future together.",
    date: "May 15, 2024",
    location: "Mombasa Convention Center",
    link: "/events/impact-summit-2024",
  },
]

const NewsEventsPreview = () => {
  return (
    <section className="py-20 bg-muted">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* News Section */}
          <div>
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold">Latest News</h2>
              <Button variant="outline" asChild>
                <Link href="/news">View All News</Link>
              </Button>
            </div>

            <div className="space-y-6">
              {newsItems.map((item, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <div className="flex flex-col sm:flex-row">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      className="w-full sm:w-32 h-32 object-cover rounded-t-lg sm:rounded-l-lg sm:rounded-t-none"
                      loading="lazy"
                    />
                    <div className="flex-1">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg line-clamp-2">{item.title}</CardTitle>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Calendar className="w-4 h-4 mr-1" />
                          {item.date}
                        </div>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="line-clamp-2 mb-3">{item.description}</CardDescription>
                        <Button variant="link" className="p-0 h-auto" asChild>
                          <Link href={item.link}>Read More</Link>
                        </Button>
                      </CardContent>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Events Section */}
          <div>
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold">Upcoming Events</h2>
              <Button variant="outline" asChild>
                <Link href="/events">View All Events</Link>
              </Button>
            </div>

            <div className="space-y-6">
              {upcomingEvents.map((event, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg">{event.title}</CardTitle>
                    <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {event.date}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {event.location}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="mb-4">{event.description}</CardDescription>
                    <Button variant="outline" size="sm" asChild>
                      <Link href={event.link}>Learn More</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default NewsEventsPreview
