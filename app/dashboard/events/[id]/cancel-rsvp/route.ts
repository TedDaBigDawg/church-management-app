import { type NextRequest, NextResponse } from "next/server"
import { cancelRsvp } from "@/app/actions/event-actions"

export async function POST(request: NextRequest, { params }: { params: { id: string } }) {
  const eventId = params.id
  await cancelRsvp(eventId)

  return NextResponse.redirect(new URL("/dashboard/events", request.url))
}

