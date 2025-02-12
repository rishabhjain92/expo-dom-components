'use dom'

export default function DOMComponent({
  name,
}: {
  name: string
  dom: import('expo/dom').DOMProps
}) {
  return (
    <div>
      <h1>Hello, {name}</h1>
    </div>
  )
}
