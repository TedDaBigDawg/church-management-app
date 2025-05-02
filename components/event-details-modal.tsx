"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Modal, ModalHeader, ModalTitle, ModalBody, ModalFooter } from "@/components/ui/modal"
import { Clock, MapPin, Users, CheckCircle, ArrowRight } from "lucide-react"
import { formatDate2 } from "@/lib/utils"
import { useRouter } from "next/navigation"

interface Event {
  id: string
  title: string
  description: string
  date: Date | string
  location: string
  capacity?: number | null
}

interface EventDetailsModalProps {
  event: Event | null
  isOpen: boolean
  onClose: () => void
}

export function EventDetailsModal({ event, isOpen, onClose }: EventDetailsModalProps) {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [signupSuccess, setSignupSuccess] = useState(false)

  if (!event) return null

  const handleSignUp = () => {
    setIsSubmitting(true)

    // Simulate a brief loading state before redirecting
    setTimeout(() => {
      // Redirect to the sign-up page with the event ID
      router.push(`/register`)
    }, 300)
  }

  return (
    <Modal open={isOpen} onClose={onClose}>
      <ModalHeader className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white">
        <ModalTitle className="text-white">{event.title}</ModalTitle>
        <p className="text-purple-100 mt-1 text-sm">{formatDate2(new Date(event.date))}</p>
      </ModalHeader>

      <ModalBody className="space-y-6">
        <div className="flex items-start gap-3 text-gray-700">
          <Clock className="h-5 w-5 text-purple-600 flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-medium">Time</p>
            <p className="text-sm text-gray-600">
              {new Date(event.date).toLocaleTimeString("en-US", {
                hour: "2-digit",
                minute: "2-digit",
                hour12: true,
              })}
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3 text-gray-700">
          <MapPin className="h-5 w-5 text-purple-600 flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-medium">Location</p>
            <p className="text-sm text-gray-600">{event.location}</p>
          </div>
        </div>

        {event.capacity && (
          <div className="flex items-start gap-3 text-gray-700">
            <Users className="h-5 w-5 text-purple-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-medium">Capacity</p>
              <p className="text-sm text-gray-600">{event.capacity} people</p>
            </div>
          </div>
        )}

        <div className="pt-2">
          <h4 className="font-medium text-gray-900 mb-2">About this event</h4>
          <p className="text-gray-700 text-sm whitespace-pre-line">{event.description}</p>
        </div>

        {/* Sign Up Button Section */}
        <div className="mt-6 pt-4 border-t border-gray-100">
          <div className="flex flex-col items-center text-center">
            <h3 className="text-lg font-medium text-gray-900 mb-2">Join this event</h3>
            <p className="text-gray-600 mb-4 max-w-md">Reserve your spot for this event. Limited spaces available.</p>

            <Button
              onClick={handleSignUp}
              disabled={isSubmitting}
              className="w-full sm:w-auto px-8 py-6 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white rounded-lg text-base font-medium transition-all duration-200 transform hover:scale-[1.02] hover:shadow-lg flex items-center justify-center gap-2 min-w-[200px]"
            >
              {isSubmitting ? (
                <>
                  <span className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></span>
                  <span>Processing...</span>
                </>
              ) : (
                <>
                  <span>Sign Up</span>
                  <ArrowRight className="h-4 w-4 ml-1" />
                </>
              )}
            </Button>
          </div>
        </div>

        {signupSuccess && (
          <div className="bg-green-50 border border-green-200 rounded-md p-4 flex items-center gap-3">
            <CheckCircle className="h-5 w-5 text-green-600" />
            <p className="text-green-800 text-sm">
              Your registration has been confirmed! We look forward to seeing you at the event.
            </p>
          </div>
        )}
      </ModalBody>

      <ModalFooter>
        <Button variant="outline" onClick={onClose}>
          Close
        </Button>
      </ModalFooter>
    </Modal>
  )
}
