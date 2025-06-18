import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="bg-[#F5F6F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-extrabold text-[#1A1A1A] sm:text-4xl">About Our Church</h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">Learn about our history, mission, and vision.</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold text-[#1A1A1A] mb-4">Our History</h2>
            <p className="text-[#1A1A1A]/80 mb-4">
              Founded in 1980, our church has been serving the community for over four decades. What started as a small
              gathering of faithful individuals has grown into a vibrant community of believers dedicated to spreading
              God's word and love.
            </p>
            <p className="text-[#1A1A1A]/80 mb-4">
              Through the years, we have expanded our facilities, programs, and outreach efforts to better serve our
              growing congregation and the wider community.
            </p>
          </div>

          <div className="rounded-lg relative h-full flex items-center justify-center">
            <div className="blur-md bg-primary opacity-30 w-full inset-0 z-50 absolute"></div>
            <Image
            src='/images/OurHistory.jpg'
            width={250}
            height={250}
            alt="About Us"
            className="w-full h-full"
            />
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold text-[#1A1A1A] mb-8 text-center">Our Mission & Vision</h2>

          <div className="grid gap-8 md:grid-cols-2">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-[#1A1A1A] mb-4">Mission</h3>
                <p className="text-[#1A1A1A]/80">
                  Our mission is to spread the love of Christ, build a community of believers, and serve those in need.
                  We strive to create an environment where everyone feels welcome and can grow in their faith journey.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-[#1A1A1A] mb-4">Vision</h3>
                <p className="text-[#1A1A1A]/80">
                  We envision a church that is a beacon of hope and transformation in our community. A place where lives
                  are changed, relationships are healed, and people discover their God-given purpose.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold text-[#1A1A1A] mb-8 text-center">Church Leadership</h2>

          <div className="grid gap-8 md:grid-cols-3">
            {/* {[1, 2, 3].map((leader) => ( */}
              <div className="text-center">
                <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Image
                  src='/images/priest1.jpg'
                  width={200}
                  height={200}
                  alt="Priest Image"
                  className="object-cover rounded-full w-full h-full"
                  quality={100}
                  />                  
                </div>
                <h3 className="text-xl font-bold text-[#1A1A1A]">Priest Name</h3>
                <p className="text-[#1A1A1A]/80">Parish Priest</p>
              </div>
              <div className="text-center">
                <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Image
                  src='/images/priest2.jpg'
                  width={200}
                  height={200}
                  alt="Priest Image"
                  className="object-cover rounded-full w-full h-full"
                  quality={100}
                  />                  
                </div>
                <h3 className="text-xl font-bold text-[#1A1A1A]">Priest Name</h3>
                <p className="text-[#1A1A1A]/80">Associate Parish Priest</p>
              </div>
              <div className="text-center">
                <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Image
                  src='/images/priest3.jpg'
                  width={200}
                  height={200}
                  alt="Priest Image"
                  className="object-cover rounded-full w-full h-full"
                  quality={100}
                  />                  
                </div>
                <h3 className="text-xl font-bold text-[#1A1A1A]">Priest Name</h3>
                <p className="text-[#1A1A1A]/80">Admin</p>
              </div>
            {/* ))} */}
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold text-[#1A1A1A] mb-8 text-center">Our Values</h2>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "Faith", description: "Trusting in God's promises and living by His word." },
              { title: "Community", description: "Building meaningful relationships and supporting one another." },
              { title: "Service", description: "Serving others with love and compassion." },
              { title: "Growth", description: "Continuously growing in our relationship with God." },
            ].map((value, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-[#1A1A1A] mb-2">{value.title}</h3>
                  <p className="text-[#1A1A1A]/80">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

