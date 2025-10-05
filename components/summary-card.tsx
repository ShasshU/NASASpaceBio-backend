import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Sparkles } from "lucide-react"

export function SummaryCard() {
    return (
        <Card className="shadow-sm">
            <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg font-bold text-primary">
                    <Sparkles className="h-5 w-5 text-accent" />
                    Impact Summary
                </CardTitle>
            </CardHeader>
            <CardContent>
                <div className="bg-muted/30 rounded-lg p-6 min-h-[200px] flex items-center justify-center">
                    <p className="text-muted-foreground text-center italic">AI-generated insight will appear here.</p>
                </div>
            </CardContent>
        </Card>
    )
}
