"use client";

import * as React from "react";
import {
	BookOpen,
	Bot,
	Command,
	Frame,
	LifeBuoy,
	Map,
	PieChart,
	Plus,
	Send,
	Settings,
	Settings2,
	SquareTerminal,
	AlertTriangle,
} from "lucide-react";

import { NavMain } from "@/components/app/layout/nav-main";
import { NavProjects } from "@/components/app/layout/nav-projects";
import { NavSecondary } from "@/components/app/layout/nav-secondary";
import { NavUser } from "@/components/app/layout/nav-user";
import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from "@/components/ui/sidebar";
import { useUser } from "@clerk/nextjs";

const data = {
	// user: {
	// 	name: "shadcn",
	// 	email: "m@example.com",
	// 	avatar: "/avatars/shadcn.jpg",
	// },
	navMain: [
		{
			title: "Dashboard",
			url: "/app",
			icon: SquareTerminal,
			isActive: true,
			items: [
				{
					title: "History",
					url: "#",
				},
				{
					title: "Starred",
					url: "#",
				},
				{
					title: "Settings",
					url: "#",
				},
			],
		},
		{
			title: "SRMP",
			url: "/app/srmp",
			icon: AlertTriangle,
			items: [
				{
					title: "All Plans",
					url: "/app/srmp",
				},
				{
					title: "Create New",
					url: "/app/srmp/new",
				},
				{
					title: "Templates",
					url: "#",
				},
			],
		},
		{
			title: "Models",
			url: "#",
			icon: Bot,
			items: [
				{
					title: "Genesis",
					url: "#",
				},
				{
					title: "Explorer",
					url: "#",
				},
				{
					title: "Quantum",
					url: "#",
				},
			],
		},
		{
			title: "Documentation",
			url: "#",
			icon: BookOpen,
			items: [
				{
					title: "Introduction",
					url: "#",
				},
				{
					title: "Get Started",
					url: "#",
				},
				{
					title: "Tutorials",
					url: "#",
				},
				{
					title: "Changelog",
					url: "#",
				},
			],
		},
	],
	navSecondary: [
		{
			title: "Settings",
			url: "/app/settings",
			icon: Settings,
		},
		{
			title: "Support",
			url: "#",
			icon: LifeBuoy,
		},
		{
			title: "Feedback",
			url: "#",
			icon: Send,
		},
	],
	projects: [
		{
			name: "Design Engineering",
			url: "#",
			icon: Frame,
		},
		{
			name: "Sales & Marketing",
			url: "#",
			icon: PieChart,
		},
		{
			name: "Travel",
			url: "#",
			icon: Map,
		},
	],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
	const { user } = useUser();
	console.log(user);
	return (
		<Sidebar variant="inset" {...props}>
			<SidebarHeader>
				<SidebarMenu>
					<SidebarMenuItem>
						<SidebarMenuButton size="lg" asChild>
							<a href="/">
								<div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
									<Command className="size-4" />
								</div>
								<div className="grid flex-1 text-left text-sm leading-tight">
									<span className="truncate font-medium">
										Simplifed Risk
									</span>
									<span className="truncate text-xs">
										Ltd
									</span>
								</div>
							</a>
						</SidebarMenuButton>
					</SidebarMenuItem>
				</SidebarMenu>
			</SidebarHeader>

			{/* New SRMP Button */}
			<div className="px-3 pt-2 pb-1">
				<a
					href="/app/srmp/new"
					className="w-full px-3 py-2 bg-primary text-primary-foreground flex items-center justify-center rounded-md hover:bg-primary/90 transition-colors"
				>
					<Plus className="size-4 mr-2" />
					<span className="font-medium">New SRMP</span>
				</a>
			</div>

			<SidebarContent>
				<NavMain items={data.navMain} />
				<NavProjects projects={data.projects} />
				<NavSecondary items={data.navSecondary} className="mt-auto" />
			</SidebarContent>
			<SidebarFooter>
				<NavUser
					user={{
						fullName: user?.fullName ?? "",
						imageUrl: user?.imageUrl ?? "",
						email: user?.emailAddresses?.[0]?.emailAddress ?? "",
					}}
				/>
			</SidebarFooter>
		</Sidebar>
	);
}
