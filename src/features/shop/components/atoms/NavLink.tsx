import type { ReactNode } from "react"

export default function NavLink({ children, href }: { children: ReactNode; href: string }) {
    return (
        <a href={href} className="text-white font-semibold hover:text-primary-yellow transition">
            {children}
        </a>
    )
}
