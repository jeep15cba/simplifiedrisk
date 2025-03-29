"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

interface SettingsLayoutProps {
	children: React.ReactNode;
}

export default function SettingsLayout({ children }: SettingsLayoutProps) {
	const pathname = usePathname();

	const tabs = [
		{
			name: "Basic Info",
			href: "/app/settings",
			active: pathname === "/app/settings",
		},
		{
			name: "Plans & Billing",
			href: "/app/settings/billing",
			active: pathname === "/app/settings/billing",
		},
		{
			name: "Team",
			href: "/app/settings/team",
			active: pathname === "/app/settings/team",
		},
		{
			name: "Appearance",
			href: "/app/settings/appearance",
			active: pathname === "/app/settings/appearance",
		},
		{
			name: "Notifications",
			href: "/app/settings/notifications",
			active: pathname === "/app/settings/notifications",
		},
		{
			name: "Audit Trail",
			href: "/app/settings/audit-trail",
			active: pathname === "/app/settings/audit-trail",
		},
		{
			name: "Integrations",
			href: "/app/settings/integrations",
			active: pathname === "/app/settings/integrations",
		},
	];

	return (
		<div className="container py-6 space-y-8">
			<div>
				<h1 className="text-2xl font-semibold">Settings</h1>
				<p className="text-muted-foreground mt-1">
					Manage account settings and preferences
				</p>
			</div>

			<div className="flex flex-col gap-8">
				<nav className="flex overflow-x-auto border-b">
					{tabs.map((tab) => (
						<Link
							key={tab.href}
							href={tab.href}
							className={cn(
								"px-4 py-2 text-sm font-medium transition-colors relative",
								"hover:text-foreground/80",
								{
									"text-foreground border-b-2 border-primary":
										tab.active,
									"text-foreground/60": !tab.active,
								}
							)}
						>
							{tab.name}
						</Link>
					))}
				</nav>

				<div>{children}</div>
			</div>
		</div>
	);
}
