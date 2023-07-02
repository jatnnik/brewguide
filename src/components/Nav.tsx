type Option = {
  label: string
  value: string
}

interface Props {
  options: Option[]
}

export function Nav({ options }: Props) {
  function handleChange(event: React.ChangeEvent<HTMLSelectElement>) {
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
      className="mb-8 bg-gray-50 rounded-xl shadow-sm border border-gray-200 focus:ring-0 focus:ring-offset-0 px-4 py-2"
      onChange={handleChange}
      defaultValue={""}
    >
      <option value="" disabled>
        Auswählen
      </option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>{option.label}</option>
      ))}
    </select>
  )
}