"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Calendar,
  Heart,
  HandIcon as PrayingHands,
  DollarSign,
  ChevronRight,
  Users,
  Clock,
  MapPin,
  ArrowRight,
  UserPlus,
} from "lucide-react"
import { formatDate2 } from "@/lib/utils"
import { EventDetailsModal } from "@/components/event-details-modal"
import { MassDetailsModal } from "@/components/mass-details-modal"

// Types based on the schema
export interface Event {
  id: string
  title: string
  description: string
  date: Date | string
  location: string
  capacity?: number | null
}

export interface Mass {
  id: string
  title: string
  date: Date | string
  location: string
  availableIntentionsSlots: number
  availableThanksgivingsSlots: number
  status: string
}

export default function HomeClient({
  upcomingEvents = [],
  upcomingMasses = [],
}: {
  upcomingEvents: Event[]
  upcomingMasses: Mass[]
}) {
  // State for modals
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null)
  const [selectedMass, setSelectedMass] = useState<Mass | null>(null)
  const [eventModalOpen, setEventModalOpen] = useState(false)
  const [massModalOpen, setMassModalOpen] = useState(false)

  // Handlers for opening modals
  const openEventModal = (event: Event) => {
    setSelectedEvent(event)
    setEventModalOpen(true)
  }

  const openMassModal = (mass: Mass) => {
    setSelectedMass(mass)
    setMassModalOpen(true)
  }

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-blue-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 opacity-90"></div>
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1200')] bg-cover bg-center opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-24 lg:py-28">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
              Welcome to St Kizito Catholic Church
            </h1>
            <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-blue-100 max-w-2xl mx-auto">
              Your digital companion for faith and fellowship.
            </p>
            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/services" className="sm:order-2">
                <Button
                  className="w-full sm:w-auto text-base sm:text-lg font-semibold px-6 py-3 h-auto
                  bg-yellow-500 hover:bg-yellow-600 text-blue-900 shadow-lg hover:shadow-xl
                  transform transition-all duration-200 hover:-translate-y-1
                  border-2 border-yellow-400 hover:border-yellow-500
                  animate-pulse-subtle"
                >
                  <span>Our Services</span>
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/register" className="sm:order-1">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 
                  text-sm sm:text-base px-4 py-2 h-auto border-white/40"
                >
                  Join Us
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Decorative wave divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
            <path
              fill="#f9fafb"
              fillOpacity="1"
              d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
            ></path>
          </svg>
        </div>
      </section>

      {/* Services Highlight Section */}
      <section className="py-8 bg-white relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl shadow-xl overflow-hidden">
            <div className="px-6 py-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between">
              <div className="text-white text-center sm:text-left mb-6 sm:mb-0">
                <h2 className="text-2xl sm:text-3xl font-bold">Explore Our Church Services</h2>
                <p className="mt-2 text-blue-100">Discover how we can support your spiritual journey</p>
              </div>
              <Link href="/services">
                <Button
                  className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-semibold px-6 py-3 h-auto
                  shadow-md hover:shadow-lg text-base sm:text-lg border-2 border-yellow-400"
                >
                  View All Services
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Info Section */}
      <section className="py-8 sm:py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm flex items-start space-x-4">
              <div className="bg-blue-100 p-3 rounded-full">
                <Clock className="h-6 w-6 text-blue-700" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Mass Schedule</h3>
                <p className="mt-1 text-sm text-gray-500">Sundays: 7:00 AM, 9:00 AM, 11:00 AM</p>
                <p className="text-sm text-gray-500">Weekdays: 6:30 AM</p>
              </div>
            </div>

            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm flex items-start space-x-4">
              <div className="bg-blue-100 p-3 rounded-full">
                <MapPin className="h-6 w-6 text-blue-700" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Location</h3>
                <p className="mt-1 text-sm text-gray-500">123 Faith Avenue</p>
                <p className="text-sm text-gray-500">Lagos, Nigeria</p>
              </div>
            </div>

            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm flex items-start space-x-4">
              <div className="bg-blue-100 p-3 rounded-full">
                <Users className="h-6 w-6 text-blue-700" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Community</h3>
                <p className="mt-1 text-sm text-gray-500">Join our growing community of over 1,000 members</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Masses Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Upcoming Masses</h2>
              <p className="mt-2 text-base text-gray-500">Join us for worship and prayer</p>
            </div>
            <Link href="/register" className="mt-4 sm:mt-0">
              <Button
                className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900
                text-white font-medium px-5 py-2 rounded-full shadow-md hover:shadow-lg
                transform transition-all duration-300 hover:-translate-y-1 border-0
                flex items-center gap-2"
              >
                <UserPlus className="h-4 w-4" />
                <span>Join Our Community</span>
              </Button>
            </Link>
          </div>

          {upcomingMasses.length > 0 ? (
            <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
              {upcomingMasses.map((mass) => (
                <Card
                  key={mass.id}
                  className="overflow-hidden border-0 shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="bg-blue-600 px-6 py-4 text-white">
                    <div className="flex justify-between items-center">
                      <h3 className="text-lg font-semibold">{mass.title}</h3>
                      <div className="bg-blue-500 text-white text-xs font-medium px-2.5 py-1 rounded">
                        {mass.availableIntentionsSlots > 0 ? `${mass.availableIntentionsSlots} slots` : "Full"}
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-blue-100 p-3 rounded-lg text-center min-w-[60px]">
                        <div className="text-2xl font-bold text-blue-700">{new Date(mass.date).getDate()}</div>
                        <div className="text-xs text-blue-700">
                          {new Date(mass.date).toLocaleString("default", { month: "short" })}
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                          <div>
                            <p className="text-sm text-gray-500">
                              {new Date(mass.date).toLocaleDateString("en-US", {
                                weekday: "long",
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                              })}
                            </p>
                            <div className="mt-1 flex items-center text-sm text-gray-700">
                              <Clock className="h-4 w-4 mr-1 text-blue-600" />
                              <span>
                                {new Date(mass.date).toLocaleTimeString("en-US", {
                                  hour: "2-digit",
                                  minute: "2-digit",
                                })}
                              </span>
                            </div>
                            <div className="mt-1 text-sm text-gray-700">
                              <MapPin className="h-4 w-4 mr-1 text-blue-600 inline" />
                              <span>{mass.location}</span>
                            </div>
                          </div>
                          <div className="mt-2 sm:mt-0">
                            <Button
                              variant="outline"
                              size="sm"
                              className="text-blue-600 border-blue-600 hover:bg-blue-50"
                              onClick={() => openMassModal(mass)}
                            >
                              View Details
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <Card className="border-0 shadow-md">
              <CardContent className="p-6 flex flex-col items-center justify-center text-center">
                <div className="bg-blue-100 p-4 rounded-full mb-4">
                  <Calendar className="h-10 w-10 text-blue-600" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-1">No upcoming masses</h3>
                <p className="text-sm text-gray-500 max-w-md">Check back soon for our updated mass schedule.</p>
              </CardContent>
            </Card>
          )}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">Church Management Features</h2>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg text-gray-500 max-w-2xl mx-auto">
              Everything you need to connect with our church community.
            </p>
          </div>

          <div className="mt-8 sm:mt-12 grid gap-5 sm:gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            <Card className="border-0 shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="pb-2">
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <PrayingHands className="h-6 w-6 text-blue-700" />
                </div>
                <CardTitle className="text-xl">Mass Intentions</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500 text-sm">
                  Request Mass intentions for your loved ones and special occasions.
                </p>
                <Link
                  href="/dashboard/mass-intentions"
                  className="mt-4 inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-800"
                >
                  Learn more <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="pb-2">
                <div className="bg-red-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Heart className="h-6 w-6 text-red-600" />
                </div>
                <CardTitle className="text-xl">Thanksgiving</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500 text-sm">
                  Book thanksgiving services to express gratitude for blessings received.
                </p>
                <Link
                  href="/dashboard/thanksgiving"
                  className="mt-4 inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-800"
                >
                  Learn more <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="pb-2">
                <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <DollarSign className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle className="text-xl">Donations</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500 text-sm">
                  Support our church through tithes, offerings, and special project donations.
                </p>
                <Link
                  href="/dashboard/donations"
                  className="mt-4 inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-800"
                >
                  Learn more <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="pb-2">
                <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Calendar className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle className="text-xl">Events</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500 text-sm">Stay updated on church events and RSVP to participate.</p>
                <Link
                  href="/dashboard/events"
                  className="mt-4 inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-800"
                >
                  Learn more <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Upcoming Events</h2>
              <p className="mt-2 text-base text-gray-500">Join us for these special occasions</p>
            </div>
            <Link href="/register" className="mt-4 sm:mt-0">
              <Button
                className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700
                text-white font-medium px-5 py-2 rounded-full shadow-md hover:shadow-lg
                transform transition-all duration-300 hover:-translate-y-1 border-0
                flex items-center gap-2"
              >
                <UserPlus className="h-4 w-4" />
                <span>Become a Member</span>
              </Button>
            </Link>
          </div>

          {upcomingEvents.length > 0 ? (
            <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
              {upcomingEvents.map((event) => (
                <Card
                  key={event.id}
                  className="overflow-hidden border-0 shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="h-40 bg-gradient-to-r from-purple-500 to-indigo-600 relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Calendar className="h-16 w-16 text-white opacity-20" />
                    </div>
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1.5 text-sm font-medium text-gray-900">
                      {formatDate2(new Date(event.date))}
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">{event.title}</h3>
                        <p className="text-sm text-gray-500 mt-1">{event.location}</p>
                      </div>
                      {event.capacity && (
                        <div className="bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded">
                          Capacity: {event.capacity}
                        </div>
                      )}
                    </div>
                    {event.description && (
                      <p className="mt-3 text-sm text-gray-600 line-clamp-2">{event.description}</p>
                    )}
                    <div className="mt-4 flex items-center text-sm text-gray-500">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>
                        {new Date(event.date).toLocaleTimeString("en-US", {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </span>
                    </div>
                    <div className="mt-4">
                      <Button variant="outline" size="sm" className="w-full" onClick={() => openEventModal(event)}>
                        View Details
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <Card className="border-0 shadow-md">
              <CardContent className="p-6 flex flex-col items-center justify-center text-center">
                <div className="bg-purple-100 p-4 rounded-full mb-4">
                  <Calendar className="h-10 w-10 text-purple-600" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-1">No upcoming events</h3>
                <p className="text-sm text-gray-500 max-w-md">
                  Check back soon for our upcoming events or subscribe to our newsletter.
                </p>
              </CardContent>
            </Card>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-blue-700 text-white overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-800 to-blue-600 opacity-90"></div>
        <div className="absolute inset-0 opacity-10 bg-[url('/placeholder.svg?height=400&width=1200')] bg-cover bg-center"></div>

        {/* Decorative circles */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-yellow-500 rounded-full opacity-20 transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-green-500 rounded-full opacity-20 transform translate-x-1/3 translate-y-1/3"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-24">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Join Our Community Today</h2>
            <p className="mt-4 text-base sm:text-lg text-blue-100 mb-10">
              Register to access all features and stay connected with our church.
            </p>

            {/* Highlighted container for the button */}
            <div className="relative inline-block">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-white/20 blur-xl rounded-full"></div>

              {/* Button */}
              <Link href="/register">
                <Button
                  className="relative w-full sm:w-auto text-base sm:text-xl font-bold px-8 py-4 h-auto
                  bg-green-500 hover:bg-green-600 text-white shadow-lg hover:shadow-xl
                  transform transition-all duration-300 hover:-translate-y-1 hover:scale-105
                  border-2 border-green-400 hover:border-green-500
                  rounded-full animate-pulse-subtle z-10"
                >
                  <UserPlus className="mr-2 h-6 w-6" />
                  Register Now
                </Button>
              </Link>
            </div>

            {/* Additional text */}
            <p className="mt-6 text-sm text-blue-200">
              Already a member?{" "}
              <Link href="/login" className="underline font-medium hover:text-white">
                Sign in here
              </Link>
            </p>
          </div>
        </div>

        {/* Decorative wave for top of section */}
        <div className="absolute top-0 left-0 right-0 transform rotate-180">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto fill-gray-50">
            <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
          </svg>
        </div>
      </section>

      {/* Modals */}
      <EventDetailsModal event={selectedEvent} isOpen={eventModalOpen} onClose={() => setEventModalOpen(false)} />

      <MassDetailsModal mass={selectedMass} isOpen={massModalOpen} onClose={() => setMassModalOpen(false)} />
    </div>
  )
}
