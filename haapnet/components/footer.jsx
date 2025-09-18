import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About Section */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold">H</span>
              </div>
              <span className="text-xl font-bold">HAAPNET</span>
            </div>
            <p className="text-sm text-background/80 mb-4 text-pretty">
              Building stronger communities through faith, skills, and sustainable development initiatives across East
              Africa.
            </p>
            <div className="flex space-x-3">
              <Button size="sm" variant="ghost" className="text-background hover:bg-background/10 p-2">
                <Facebook className="w-4 h-4" />
              </Button>
              <Button size="sm" variant="ghost" className="text-background hover:bg-background/10 p-2">
                <Twitter className="w-4 h-4" />
              </Button>
              <Button size="sm" variant="ghost" className="text-background hover:bg-background/10 p-2">
                <Instagram className="w-4 h-4" />
              </Button>
              <Button size="sm" variant="ghost" className="text-background hover:bg-background/10 p-2">
                <Linkedin className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-background/80 hover:text-background transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/commitment" className="text-background/80 hover:text-background transition-colors">
                  Our Commitment
                </Link>
              </li>
              <li>
                <Link href="/achievements" className="text-background/80 hover:text-background transition-colors">
                  Our Achievements
                </Link>
              </li>
              <li>
                <Link href="/get-involved" className="text-background/80 hover:text-background transition-colors">
                  Get Involved
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-background/80 hover:text-background transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 mt-0.5 text-background/60" />
                <span className="text-background/80">P.O. Box 12345, Nairobi, Kenya</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-background/60" />
                <span className="text-background/80">+254 700 123 456</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-background/60" />
                <span className="text-background/80">info@haapnet.org</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold mb-4">Stay Updated</h3>
            <p className="text-sm text-background/80 mb-4">
              Subscribe to our newsletter for the latest updates on our community impact.
            </p>
            <div className="space-y-2">
              <Input
                type="email"
                placeholder="Your email address"
                className="bg-background/10 border-background/20 text-background placeholder:text-background/60"
              />
              <Button size="sm" className="w-full bg-primary hover:bg-primary/90">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-background/80">
          <p>&copy; 2024 HAAPNET. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-background transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-background transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
