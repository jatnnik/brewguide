type Option = {
  label: string
  value: string
}

interface Props {
  options: Option[]
}

export function Nav({ options }: Props) {
  function handleChange(event: Event) {
    const el = event.target as HTMLSelectElement
    const target = document.querySelector(`#${el.value}`)

    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
      })
    }
  }

  return (
    <select
      class="mb-8 focus:ring-0 focus:ring-offset-0"
      onChange={handleChange}
    >
      <option value="" disabled selected>
        Auswählen
      </option>
      {options.map((option) => (
        <option value={option.value}>{option.label}</option>
      ))}
    </select>
  )
}
