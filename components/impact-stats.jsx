"use client"

import { useEffect, useState } from "react"

const stats = [
  { number: 2500, label: "Lives Transformed", suffix: "+" },
  { number: 45, label: "Communities Served", suffix: "" },
  { number: 150, label: "Projects Completed", suffix: "+" },
  { number: 98, label: "Success Rate", suffix: "%" },
]

const ImpactStats = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [animatedNumbers, setAnimatedNumbers] = useState(stats.map(() => 0))

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.5 },
    )

    const element = document.getElementById("impact-stats")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return

    const animateNumbers = () => {
      stats.forEach((stat, index) => {
        let current = 0
        const increment = stat.number / 50
        const timer = setInterval(() => {
          current += increment
          if (current >= stat.number) {
            current = stat.number
            clearInterval(timer)
          }
          setAnimatedNumbers((prev) => {
            const newNumbers = [...prev]
            newNumbers[index] = Math.floor(current)
            return newNumbers
          })
        }, 30)
      })
    }

    animateNumbers()
  }, [isVisible])

  return (
    <section id="impact-stats" className="py-20 bg-primary text-primary-foreground">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Our Impact in Numbers</h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto text-pretty">
            Real results from our commitment to community development and sustainable change.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">
                {animatedNumbers[index]}
                {stat.suffix}
              </div>
              <div className="text-lg opacity-90">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ImpactStats
