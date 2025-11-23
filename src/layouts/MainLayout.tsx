import type { ReactNode } from "react"

type Props = {
  children: ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <div className="p-3.5">
      <div className="w-full">
        {children}
      </div>
    </div>
  )
}