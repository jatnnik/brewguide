import { useStore } from "@nanostores/preact"
import { $brewTime, $isActive } from "../stores/timer"
import { StopIcon } from "./StopIcon"

interface Props {
  brewTime: string
}

export function TriggerTimerButton({ brewTime }: Props) {
  const isActive = useStore($isActive)

  function handleClick() {
    $isActive.set(!$isActive.get())
    $brewTime.set(isActive ? null : brewTime)
  }

  return (
    <button
      className="mt-4 rounded-md bg-gray-300 px-3 py-2 text-sm font-bold text-gray-800 disabled:opacity-50"
      onClick={handleClick}
      disabled={isActive}
    >
      Timer starten
    </button>
  )
}

export function Timer() {
  const isActive = useStore($isActive)
  const brewTime = useStore($brewTime)

  function stop() {
    $isActive.set(false)
    $brewTime.set(null)
  }

  if (!isActive) {
    return null
  }

  return (
    <div className="fixed bottom-8 right-8 inline-flex items-center space-x-2 rounded-md bg-white px-3 py-2 font-bold shadow-md">
      <span className="tracking-wide">0{brewTime}:00</span>
      <button onClick={stop}>
        <StopIcon />
      </button>
    </div>
  )
}
