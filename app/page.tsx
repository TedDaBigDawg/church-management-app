import HomeClient from "@/app/components/home-client"
import { getUpcomingEvents, getUpcomingMasses } from "@/lib/data-utils"

export default async function HomePage() {
  // Fetch data using our utility functions
  const [upcomingEvents, upcomingMasses] = await Promise.all([getUpcomingEvents(2), getUpcomingMasses(2)])

  return <HomeClient upcomingEvents={upcomingEvents} upcomingMasses={upcomingMasses} />
}
