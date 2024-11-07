import { TEvent } from "@/lib/types"

type EventCardProps ={
  event: TEvent
}

const EventCard = ({event}: EventCardProps) => {
  return (
    <section>{event.description}</section>
  )
}

export default EventCard