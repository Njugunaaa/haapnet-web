"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

const slides = [
  {
    id: 1,
    headline: "Building Stronger Communities Together",
    subheadline: "Skills, resources and local leadership for a resilient future.",
    cta: "Find Out About Us",
    ctaLink: "/about",
    image: "/placeholder.svg?height=900&width=1600&text=Community+Building",
  },
  {
    id: 2,
    headline: "Empowering Local Voices for Change",
    subheadline: "Training, business support, and community projects.",
    cta: "Get Involved",
    ctaLink: "/get-involved",
    image: "/placeholder.svg?height=900&width=1600&text=Local+Empowerment",
  },
  {
    id: 3,
    headline: "Sustainable Livelihoods, Real Impact",
    subheadline: "Income generation and sustainable project models.",
    cta: "Support Our Work",
    ctaLink: "/get-involved",
    image: "/placeholder.svg?height=900&width=1600&text=Sustainable+Impact",
  },
  {
    id: 4,
    headline: "Join Our Movement",
    subheadline: "Volunteer, partner or donate to scale impact.",
    cta: "Contact Us",
    ctaLink: "/contact",
    image: "/placeholder.svg?height=900&width=1600&text=Join+Movement",
  },
]

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  return (
    <section
      className="relative h-screen overflow-hidden"
      role="region"
      aria-roledescription="carousel"
      aria-label="Hero carousel"
    >
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
          aria-hidden={index !== currentSlide}
        >
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute inset-0 bg-black/40" />
          </div>

          <div className="relative z-10 flex items-center justify-center h-full">
            <div className="max-w-4xl mx-auto px-4 text-center text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">{slide.headline}</h1>
              <p className="text-xl md:text-2xl mb-8 text-pretty max-w-2xl mx-auto">{slide.subheadline}</p>
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3 text-lg font-semibold"
                asChild
              >
                <a href={slide.ctaLink}>{slide.cta}</a>
              </Button>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>

      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${index === currentSlide ? "bg-white" : "bg-white/50"}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}

export default HeroCarousel
