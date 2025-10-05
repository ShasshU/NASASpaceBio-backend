"use client"

import { useState, useMemo } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Mock data for publications
const publications = [
    { id: 1, title: "Effects of Microgravity on Plant Cell Growth", date: "2024-03-15", subject: "Flora & Fauna" },
    { id: 2, title: "Radiation Exposure in Deep Space Missions", date: "2024-03-10", subject: "Radiation Biology" },
    { id: 3, title: "Bone Density Loss in Extended Spaceflight", date: "2024-03-08", subject: "Human Physiology" },
    { id: 4, title: "Microbial Behavior in Zero Gravity Environments", date: "2024-03-05", subject: "Microbiology" },
    { id: 5, title: "Cardiovascular Adaptations During Space Travel", date: "2024-03-01", subject: "Human Physiology" },
    {
        id: 6,
        title: "Gene Expression Changes in Space-Grown Organisms",
        date: "2024-02-28",
        subject: "Molecular Biology",
    },
    { id: 7, title: "Algae Cultivation for Life Support Systems", date: "2024-02-25", subject: "Flora & Fauna" },
    { id: 8, title: "Immune System Response to Spaceflight", date: "2024-02-20", subject: "Human Physiology" },
    { id: 9, title: "Protein Crystallization in Microgravity", date: "2024-02-15", subject: "Molecular Biology" },
    { id: 10, title: "Cosmic Ray Impact on DNA Structure", date: "2024-02-10", subject: "Radiation Biology" },
]

const subjects = [
    "All Subjects",
    "Flora & Fauna",
    "Radiation Biology",
    "Human Physiology",
    "Microbiology",
    "Molecular Biology",
]

export function PublicationsTable() {
    const [searchQuery, setSearchQuery] = useState("")
    const [selectedSubject, setSelectedSubject] = useState("All Subjects")

    const filteredPublications = useMemo(() => {
        return publications.filter((pub) => {
            const matchesSearch = pub.title.toLowerCase().includes(searchQuery.toLowerCase())
            const matchesSubject = selectedSubject === "All Subjects" || pub.subject === selectedSubject
            return matchesSearch && matchesSubject
        })
    }, [searchQuery, selectedSubject])

    return (
        <Card className="shadow-sm">
            <CardHeader>
                <CardTitle className="text-2xl font-bold text-primary">608 Publications</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                {/* Search and Filter Controls */}
                <div className="flex flex-col sm:flex-row gap-4">
                    <div className="relative flex-1">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                            placeholder="Search publications..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="pl-10"
                        />
                    </div>
                    <Select value={selectedSubject} onValueChange={setSelectedSubject}>
                        <SelectTrigger className="w-full sm:w-[240px]">
                            <SelectValue placeholder="Filter by subject" />
                        </SelectTrigger>
                        <SelectContent>
                            {subjects.map((subject) => (
                                <SelectItem key={subject} value={subject}>
                                    {subject}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>

                {/* Publications Table */}
                <div className="border rounded-lg overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead className="bg-muted/50">
                                <tr>
                                    <th className="text-left p-4 font-semibold text-sm text-foreground">Title</th>
                                    <th className="text-left p-4 font-semibold text-sm text-foreground whitespace-nowrap">
                                        Publication Date
                                    </th>
                                    <th className="text-left p-4 font-semibold text-sm text-foreground">Key Subject</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y">
                                {filteredPublications.map((pub) => (
                                    <tr key={pub.id} className="hover:bg-muted/30 transition-colors">
                                        <td className="p-4">
                                            <button className="text-left hover:text-accent transition-colors font-medium">{pub.title}</button>
                                        </td>
                                        <td className="p-4 text-muted-foreground whitespace-nowrap">{pub.date}</td>
                                        <td className="p-4">
                                            <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
                                                {pub.subject}
                                            </Badge>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Results count */}
                <p className="text-sm text-muted-foreground">Showing {filteredPublications.length} of 608 publications</p>
            </CardContent>
        </Card>
    )
}
