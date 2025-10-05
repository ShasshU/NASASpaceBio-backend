"use client"

import type { ReactNode } from "react"
import { Database, FileText, BarChart3, Settings, Microscope } from "lucide-react"
import { cn } from "@/lib/utils"

interface DashboardLayoutProps {
    children: ReactNode
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
    return (
        <div className="flex h-screen bg-background">
            {/* Fixed Sidebar */}
            <aside className="w-64 bg-primary text-primary-foreground flex-shrink-0 fixed h-full">
                <div className="p-6">
                    <div className="flex items-center gap-3 mb-8">
                        <Microscope className="h-8 w-8 text-accent" />
                        <div>
                            <h1 className="text-xl font-bold text-white">Space Biology</h1>
                            <p className="text-xs text-primary-foreground/70">Knowledge Engine</p>
                        </div>
                    </div>

                    <nav className="space-y-2">
                        <NavItem icon={<Database className="h-5 w-5" />} label="Publications" active />
                        <NavItem icon={<BarChart3 className="h-5 w-5" />} label="Analytics" />
                        <NavItem icon={<FileText className="h-5 w-5" />} label="Reports" />
                        <NavItem icon={<Settings className="h-5 w-5" />} label="Settings" />
                    </nav>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-primary-foreground/10">
                    <p className="text-xs text-primary-foreground/60">NASA Space Biology Research</p>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 ml-64 overflow-auto">
                <div className="p-8">{children}</div>
            </main>
        </div>
    )
}

interface NavItemProps {
    icon: ReactNode
    label: string
    active?: boolean
}

function NavItem({ icon, label, active }: NavItemProps) {
    return (
        <button
            className={cn(
                "w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors text-left",
                active
                    ? "bg-accent text-accent-foreground font-medium"
                    : "text-primary-foreground/80 hover:bg-primary-foreground/10",
            )}
        >
            {icon}
            <span>{label}</span>
        </button>
    )
}
