import React from "react";
import { Check, Square, Circle, Hexagon } from "lucide-react";
import { cn } from "@/lib/utils";

export default function BillingPage() {
	return (
		<div className="space-y-6">
			<div className="flex items-center gap-2">
				<Square size={20} className="text-primary" />
				<h1 className="text-xl font-semibold">Plans & Billing</h1>
			</div>
			<p className="text-muted-foreground">
				Manage your subscription plan and billing details
			</p>

			<div className="space-y-4">
				<PlanOption
					selected={true}
					icon={<Circle className="size-5" />}
					title="Basic Plan - $9/month"
					description="Up to 10 users, 20GB per user"
				/>

				<PlanOption
					selected={false}
					icon={<Square className="size-5" />}
					title="Business Plan - $19/month"
					description="Up to 20 users, 40GB per user"
				/>

				<PlanOption
					selected={false}
					icon={<Hexagon className="size-5" />}
					title="Enterprise Plan - $29/month"
					description="Unlimited users, 50GB per user"
				/>
			</div>
		</div>
	);
}

interface PlanOptionProps {
	selected: boolean;
	icon: React.ReactNode;
	title: string;
	description: string;
}

function PlanOption({ selected, icon, title, description }: PlanOptionProps) {
	return (
		<div
			className={cn(
				"flex items-center gap-3 p-4 border rounded-lg relative",
				selected ? "ring-1 ring-primary" : ""
			)}
		>
			<div className="flex items-center justify-center">{icon}</div>
			<div className="flex-1">
				<h3 className="font-medium">{title}</h3>
				<p className="text-sm text-muted-foreground">{description}</p>
			</div>
			{selected && (
				<div className="absolute right-4 top-1/2 -translate-y-1/2">
					<div className="rounded-full bg-primary size-6 flex items-center justify-center">
						<Check className="size-4 text-primary-foreground" />
					</div>
				</div>
			)}
			{!selected && (
				<div className="absolute right-4 top-1/2 -translate-y-1/2">
					<div className="rounded-full border-2 size-6"></div>
				</div>
			)}
		</div>
	);
}
