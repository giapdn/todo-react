import { Outlet } from "react-router-dom"

export default function Layout() {
  return (
    <div className="p-3.5">
      <div className="w-full">
        <Outlet />
      </div>
    </div>
  )
}