"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Modal, ModalHeader, ModalTitle, ModalBody, ModalFooter } from "@/components/ui/modal"
import { Calendar, Clock, MapPin } from "lucide-react"
import { formatDate2 } from "@/lib/utils"

interface Mass {
  id: string
  title: string
  date: Date | string
  location: string
  availableIntentionsSlots: number
  availableThanksgivingsSlots: number
  status: string
}

interface MassDetailsModalProps {
  mass: Mass | null
  isOpen: boolean
  onClose: () => void
}

export function MassDetailsModal({ mass, isOpen, onClose }: MassDetailsModalProps) {
  const [activeTab, setActiveTab] = useState<"details" | "intention" | "thanksgiving">("details")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [intentionType, setIntentionType] = useState("general")

  if (!mass) return null

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setIsSubmitting(false)
    setSubmitSuccess(true)

    // Reset to details tab after successful submission
    setTimeout(() => {
      setActiveTab("details")
      setSubmitSuccess(false)
    }, 3000)
  }

  // Add this function after the existing handleSubmit function
  const handleSignUp = (type: "intention" | "thanksgiving") => {
    // Redirect to the appropriate sign-up page
    window.location.href = `/register`
    // Alternatively, if using Next.js router:
    // router.push(`/mass/${mass.id}/signup/${type}`);
  }

  return (
    <Modal open={isOpen} onClose={onClose}>
      <ModalHeader className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <ModalTitle className="text-white">{mass.title}</ModalTitle>
        <p className="text-blue-100 mt-1 text-sm">{formatDate2(new Date(mass.date))}</p>
      </ModalHeader>

      <div className="border-b">
        <div className="flex">
          <button
            className={`px-4 py-3 text-sm font-medium ${
              activeTab === "details" ? "border-b-2 border-blue-600 text-blue-700" : "text-gray-500 hover:text-gray-700"
            }`}
            onClick={() => setActiveTab("details")}
          >
            Mass Details
          </button>

          {mass.availableIntentionsSlots > 0 && (
            <button
              className={`px-4 py-3 text-sm font-medium ${
                activeTab === "intention"
                  ? "border-b-2 border-blue-600 text-blue-700"
                  : "text-gray-500 hover:text-gray-700"
              }`}
              onClick={() => setActiveTab("intention")}
            >
              Request Intention
            </button>
          )}

          {mass.availableThanksgivingsSlots > 0 && (
            <button
              className={`px-4 py-3 text-sm font-medium ${
                activeTab === "thanksgiving"
                  ? "border-b-2 border-blue-600 text-blue-700"
                  : "text-gray-500 hover:text-gray-700"
              }`}
              onClick={() => setActiveTab("thanksgiving")}
            >
              Thanksgiving
            </button>
          )}
        </div>
      </div>

      <ModalBody className="space-y-4">
        {activeTab === "details" && (
          <>
            <div className="flex items-start gap-3 text-gray-700">
              <Clock className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-medium">Time</p>
                <p className="text-sm text-gray-600">
                  {new Date(mass.date).toLocaleTimeString("en-US", {
                    hour: "2-digit",
                    minute: "2-digit",
                    hour12: true,
                  })}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 text-gray-700">
              <MapPin className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-medium">Location</p>
                <p className="text-sm text-gray-600">{mass.location}</p>
              </div>
            </div>

            <div className="flex items-start gap-3 text-gray-700">
              <Calendar className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-medium">Date</p>
                <p className="text-sm text-gray-600">
                  {new Date(mass.date).toLocaleDateString("en-US", {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
              </div>
            </div>

            <div className="pt-2 space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-gray-700">Available Intention Slots</span>
                <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                  {mass.availableIntentionsSlots}
                </span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-gray-700">Available Thanksgiving Slots</span>
                <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                  {mass.availableThanksgivingsSlots}
                </span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-gray-700">Status</span>
                <span
                  className={`text-xs font-medium px-2.5 py-0.5 rounded ${
                    mass.status === "AVAILABLE" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"
                  }`}
                >
                  {mass.status}
                </span>
              </div>
            </div>
          </>
        )}

        {activeTab === "intention" && (
          <div className="flex flex-col items-center justify-center py-8 px-4 text-center">
            <h3 className="text-xl font-medium text-gray-900 mb-3">Mass Intention Request</h3>
            <p className="text-gray-600 mb-6 max-w-md">
              Request a mass intention for your loved ones or special intentions.
              {mass.availableIntentionsSlots > 1
                ? ` ${mass.availableIntentionsSlots} slots available.`
                : " Only 1 slot available."}
            </p>

            <Button
              onClick={() => handleSignUp("intention")}
              className="bg-blue-600 hover:bg-blue-700 text-white w-full max-w-xs py-6 rounded-md text-base font-medium transition-all duration-200 shadow hover:shadow-lg"
            >
              Sign Up
            </Button>
          </div>
        )}

        {activeTab === "thanksgiving" && (
          <div className="flex flex-col items-center justify-center py-8 px-4 text-center">
            <h3 className="text-xl font-medium text-gray-900 mb-3">Thanksgiving Offering</h3>
            <p className="text-gray-600 mb-6 max-w-md">
              Express your gratitude with a thanksgiving offering for this mass.
              {mass.availableThanksgivingsSlots > 1
                ? ` ${mass.availableThanksgivingsSlots} slots available.`
                : " Only 1 slot available."}
            </p>

            <Button
              onClick={() => handleSignUp("thanksgiving")}
              className="bg-blue-600 hover:bg-blue-700 text-white w-full max-w-xs py-6 rounded-md text-base font-medium transition-all duration-200 shadow hover:shadow-lg"
            >
              Sign Up
            </Button>
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
