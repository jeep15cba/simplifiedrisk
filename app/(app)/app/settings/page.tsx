import React from "react";
import { Info } from "lucide-react";

function SettingsPage() {
	return (
		<div className="space-y-6">
			<div className="flex items-center gap-2">
				<Info size={20} className="text-primary" />
				<h1 className="text-xl font-semibold">Basic Info</h1>
			</div>
			<p className="text-muted-foreground">
				Manage your account information and company details
			</p>

			<div className="space-y-4">
				<div className="grid gap-6 p-6 border rounded-lg">
					<div className="space-y-2">
						<h3 className="text-sm font-medium">Company Name</h3>
						<input
							type="text"
							placeholder="Your company name"
							className="w-full px-3 py-2 border rounded-md"
						/>
					</div>

					<div className="space-y-2">
						<h3 className="text-sm font-medium">Company Website</h3>
						<input
							type="url"
							placeholder="https://example.com"
							className="w-full px-3 py-2 border rounded-md"
						/>
					</div>

					<div className="space-y-2">
						<h3 className="text-sm font-medium">Company Size</h3>
						<select className="w-full px-3 py-2 border rounded-md">
							<option>1-10 employees</option>
							<option>11-50 employees</option>
							<option>51-200 employees</option>
							<option>201-500 employees</option>
							<option>501+ employees</option>
						</select>
					</div>
				</div>
			</div>
		</div>
	);
}

export default SettingsPage;
