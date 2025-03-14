'use dom'

export default function DOMComponent({
  name,
}: {
  name: string
  dom: import('expo/dom').DOMProps
}) {
  return (
    <div style={{width: 100, height: 100}}>
      <h1>Hello, {name}</h1>
    </div>
  )
}
