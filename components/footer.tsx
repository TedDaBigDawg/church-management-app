// components/Footer.tsx
import Link from "next/link"
import { getChurchInfo } from "@/lib/data"

export async function Footer() {
  const church = await getChurchInfo()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">{church?.name || "Church App"}</h3>
            <p className="text-gray-300">
              A comprehensive church management application for parishioners and administrators.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-white">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <address className="not-italic text-gray-300 space-y-1">
              <p>{church?.address || "Address not available"}</p>
              <p>{church?.phone || "Phone not available"}</p>
              <p>{church?.email || "Email not available"}</p>
            </address>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-blue-800 text-center text-gray-300">
          <p>&copy; {currentYear} {church?.name || "Church App"}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
