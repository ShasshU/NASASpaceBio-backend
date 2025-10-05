import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertCircle } from "lucide-react"

const knowledgeGaps = [
    "How does prolonged microgravity affect multi-generational plant reproduction cycles?",
    "What are the long-term effects of cosmic radiation on neural plasticity in mammals?",
    "Can extremophile microorganisms adapt to survive in Martian soil conditions?",
]

export function KnowledgeGapCard() {
    return (
        <Card className="shadow-sm">
            <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg font-bold text-primary">
                    <AlertCircle className="h-5 w-5 text-accent" />
                    Unaddressed Questions
                </CardTitle>
            </CardHeader>
            <CardContent>
                <div className="space-y-3 max-h-[300px] overflow-y-auto">
                    {knowledgeGaps.map((gap, index) => (
                        <div key={index} className="flex gap-3 p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
                            <span className="text-accent font-bold flex-shrink-0">•</span>
                            <p className="text-sm text-foreground leading-relaxed">{gap}</p>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    )
}
