"use client";

import { useClerk } from "@clerk/nextjs";
import { LogOut } from "lucide-react";

export const SignOutButton = () => {
	const { signOut } = useClerk();

	return (
		// Clicking this button signs out a user
		// and redirects them to the home page "/".
		<button onClick={() => signOut({ redirectUrl: "/" })}>
			<div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
				<LogOut />
				Sign out
			</div>
		</button>
	);
};
