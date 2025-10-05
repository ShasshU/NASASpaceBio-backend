import { DashboardLayout } from "@/components/dashboard-layout"
import { PublicationsTable } from "@/components/publications-table"
import { SummaryCard } from "@/components/summary-card"
import { KnowledgeGapCard } from "@/components/knowledge-gap-card"

export default function Page() {
    return (
        <DashboardLayout>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Main content area - Publications Table */}
                <div className="lg:col-span-2">
                    <PublicationsTable />
                </div>

                {/* Right sidebar - Summary and Knowledge Gap Cards */}
                <div className="space-y-6">
                    <SummaryCard />
                    <KnowledgeGapCard />
                </div>
            </div>
        </DashboardLayout>
    )
}
