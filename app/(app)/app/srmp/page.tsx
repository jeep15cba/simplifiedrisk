import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";

export default function SRMPPage() {
	return (
		<div className="container py-6 space-y-6">
			<div className="flex items-center justify-between">
				<div>
					<h1 className="text-2xl font-semibold">
						Simplified Risk Management Plans
					</h1>
					<p className="text-muted-foreground">
						Manage and create risk management plans
					</p>
				</div>
				<Link href="/app/srmp/new">
					<Button className="flex items-center gap-2">
						<PlusCircle className="size-4" />
						<span>New SRMP</span>
					</Button>
				</Link>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
				<div className="bg-card p-6 border rounded-lg shadow-sm hover:shadow transition-shadow">
					<h3 className="font-medium">Road Safety Assessment</h3>
					<p className="text-sm text-muted-foreground mt-1">
						Last updated: 2 days ago
					</p>
				</div>

				<div className="bg-card p-6 border rounded-lg shadow-sm hover:shadow transition-shadow">
					<h3 className="font-medium">Vehicle Maintenance Plan</h3>
					<p className="text-sm text-muted-foreground mt-1">
						Last updated: 1 week ago
					</p>
				</div>

				<Link
					href="/app/srmp/new"
					className="border rounded-lg shadow-sm p-6 flex flex-col items-center justify-center hover:bg-muted/50 transition-colors border-dashed"
				>
					<PlusCircle className="size-8 text-muted-foreground mb-2" />
					<span className="text-muted-foreground">
						Create New SRMP
					</span>
				</Link>
			</div>
		</div>
	);
}
