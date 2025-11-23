import type { ReactNode } from "react"

type children = {
  children: ReactNode
}

export default function Layout({ children }: children) {
  return (
    <div className="p-4">
      <div>
        {children}
      </div>
    </div>
  )
}