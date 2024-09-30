'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"
import { Twitter, Linkedin, Send, Users, Heart, Lightbulb, Globe } from "lucide-react"
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
})

export default function AboutUsPage() {
  const aboutUsCards = [
    {
      title: "who we are",
      content: "Open Alpha Ventures is a pioneering Web3-focused syndicate, or investment club, that unites a diverse array of stakeholders. The syndicate brings together innovators, developers, thought leaders, key opinion leaders (KOLs), family offices, and key players to collaboratively invest in groundbreaking startup opportunities, investing in tokens, equity or hybrid deals."
    },
    {
      title: "what we do",
      content: "This platform empowers the syndicate members to gain privileged access to unique and carefully vetted investment prospects on a deal-by-deal basis, allowing them the flexibility to invest at their discretion. Notably, there are no mandatory commitments to participate in every deal."
    },
    {
      title: "our objective",
      content: "The primary objective of Open Alpha Ventures is to provide the community with early access to the most promising and transformative companies within the web3 landscape. Through our distinctive deal flow, members can explore a wide spectrum of opportunities and engage in a collaborative environment that fosters knowledge-sharing and mutual support."
    },
    {
      title: "our approach",
      content: "Beyond purely financial contributions, we encourage a 'value-added' approach, ensuring that our syndicate members contribute expertise and support to the startups they invest in, thereby creating mutually beneficial scenarios for all parties involved. Open Alpha is not just an investor, we are a partner, an advisor and an open ear to the start-ups."
    }
  ]

  const valueCards = [
    {
      title: "Collaboration",
      content: "We foster a collaborative environment where innovators, developers, and thought leaders come together to unlock groundbreaking opportunities in the Web3 space.",
      icon: <Users className="h-12 w-12 text-[#0a1ae8]" />
    },
    {
      title: "Care",
      content: "We are committed to supporting our community of startups and investors, providing them with the resources, guidance, and empathy needed to thrive.",
      icon: <Heart className="h-12 w-12 text-[#0a1ae8]" />
    },
    {
      title: "Innovation",
      content: "We embrace and drive forward-thinking solutions, staying at the forefront of the Web3 revolution with cutting-edge technologies and ideas.",
      icon: <Lightbulb className="h-12 w-12 text-[#0a1ae8]" />
    },
    {
      title: "Inclusivity",
      content: "We celebrate diversity and inclusivity, creating a welcoming environment where all members can contribute, share knowledge, and succeed.",
      icon: <Globe className="h-12 w-12 text-[#0a1ae8]" />
    }
  ]

  return (
    <div className={`min-h-screen bg-white text-gray-800 ${poppins.variable} font-sans`}>
      {/* Header */}
      <header className="container mx-auto py-4">
        <nav className="flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <Image 
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/header_logo-F8Ce3RFbRGPU5qQmWizkd5kqlinj1L.svg" 
              alt="Open Alpha Logo" 
              width={200} 
              height={50} 
              className="h-10 w-auto"
            />
          </Link>
          <div className="space-x-4">
            <Link href="/" className="hover:text-[#0a1ae8]">
              Home
            </Link>
            <Link href="about" className="hover:text-[#0a1ae8]">
              About
            </Link>
            <Link href="#values" className="hover:text-[#0a1ae8]">
              Our Values
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-7xl mb-8 text-gray-900 leading-tight">
            <span className="text-[#0a1ae8] font-light">About</span>
            <span className="text-gray-800 font-light"> Us</span>
          </h1>
          <p className="text-xl mb-12 text-gray-700 max-w-3xl mx-auto">
            Discover the story behind Open Alpha Ventures and our mission to revolutionize Web3 investments.
          </p>
        </div>
      </section>

      {/* About Us Cards Section */}
      <section id="about" className="py-20 bg-white bg-opacity-80">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {aboutUsCards.map((card, index) => (
              <Card 
                key={index} 
                className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <CardContent className="p-6">
                  <h2 className="text-2xl font-semibold mb-4 text-[#0a1ae8]">
                    {card.title}
                  </h2>
                  <p className="text-gray-600">
                    {card.content}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section id="values" className="py-20 bg-white text-gray-800">
        <div className="container mx-auto">
          <h2 className="text-7xl font-light text-left mb-12 text-[#0a1ae8]">our values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {valueCards.map((card, index) => (
              <Card 
                key={index} 
                className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 border border-[#0a1ae8]/20"
              >
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="mb-4">
                    {card.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-[#0a1ae8]">{card.title}</h3>
                  <p className="text-gray-600">{card.content}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#282731] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between -mx-4">
            <div className="w-full md:w-1/3 px-4 mb-8 md:mb-0">
              <Image 
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/footer_logo-Vo0sJXemerjpwVSvoIaWmjeZJGajNr.svg" 
                alt="Open Alpha Logo" 
                width={200} 
                height={53} 
                className="mb-6"
              />
              <p className="mb-6">
                Open Alpha Ventures connects investors with exclusive Web3 startups, offering flexible investment opportunities and expert support.
              </p>
            </div>
            <div className="w-full md:w-1/3 px-4 mb-8 md:mb-0">
              <h3 className="text-lg font-bold mb-4">join our community</h3>
              <p className="mb-6">
                Join our community of forward-thinking investors and innovators. Be part of a network
                that offers exclusive access to high-potential Web3 startups, expert guidance, and
                collaborative opportunities.
              </p>
              <Button variant="outline" className="text-gray-800 border-white hover:bg-white hover:text-[#0a1ae8] bg-white">
                join the community
              </Button>
            </div>
            <div className="w-full md:w-1/3 px-4">
              <h3 className="text-lg font-bold mb-4">sign up for our newsletter</h3>
              <div className="mb-6">
                <iframe 
                  src="https://embeds.beehiiv.com/ea969963-88ac-498b-bc59-3648ea022980?slim=true" 
                  data-test-id="beehiiv-embed" 
                  height="52" 
                  style={{
                    margin: 0,
                    borderRadius: 0,
                    backgroundColor: 'transparent',
                    width: '100%',
                    border: 'none'
                  }}
                  title="Newsletter Subscription"
                />
              </div>
              <div>
                <h4 className="text-lg font-bold mb-2">Connect with us</h4>
                <div className="flex space-x-4">
                  <Link href="https://linkedin.com/company/openalpha" className="text-white hover:text-[#0a1ae8]">
                    <Linkedin size={24} />
                    <span className="sr-only">LinkedIn</span>
                  </Link>
                  <Link href="https://twitter.com/openalpha" className="text-white hover:text-[#0a1ae8]">
                    <Twitter size={24} />
                    <span className="sr-only">Twitter</span>
                  </Link>
                  <Link href="https://t.me/openalpha" className="text-white hover:text-[#0a1ae8]">
                    <Send size={24} />
                    <span className="sr-only">Telegram</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-16 pt-8 border-t border-gray-700">
            <ul className="flex flex-wrap justify-center space-x-4 mb-4">
              <li><Link href="/" className="hover:text-[#0a1ae8]">Homepage</Link></li>
              <li><Link href="/about" className="hover:text-[#0a1ae8]">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-[#0a1ae8]">Contact Us</Link></li>
              <li><Link href="/terms" className="hover:text-[#0a1ae8]">Terms and Conditions</Link></li>
              <li><Link href="/privacy" className="hover:text-[#0a1ae8]">Privacy Policy</Link></li>
            </ul>
            <p className="text-sm text-center">&copy; 2024 All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}