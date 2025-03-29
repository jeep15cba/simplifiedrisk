import React from "react";
import { PaintBucket } from "lucide-react";

export default function AppearancePage() {
	return (
		<div className="space-y-6">
			<div className="flex items-center gap-2">
				<PaintBucket size={20} className="text-primary" />
				<h1 className="text-xl font-semibold">Appearance</h1>
			</div>
			<p className="text-muted-foreground">
				Customize the look and feel of your workspace
			</p>

			<div className="space-y-4">
				<div className="grid gap-6 p-6 border rounded-lg">
					<div className="space-y-4">
						<h3 className="text-sm font-medium">Theme</h3>

						<div className="flex gap-3">
							<label className="flex items-center space-x-2">
								<input
									type="radio"
									name="theme"
									defaultChecked
									className="h-4 w-4"
								/>
								<span>Light</span>
							</label>

							<label className="flex items-center space-x-2">
								<input
									type="radio"
									name="theme"
									className="h-4 w-4"
								/>
								<span>Dark</span>
							</label>

							<label className="flex items-center space-x-2">
								<input
									type="radio"
									name="theme"
									className="h-4 w-4"
								/>
								<span>System</span>
							</label>
						</div>
					</div>

					<div className="space-y-4">
						<h3 className="text-sm font-medium">Accent Color</h3>

						<div className="grid grid-cols-6 gap-3">
							{[
								"#0ea5e9",
								"#8b5cf6",
								"#ec4899",
								"#f59e0b",
								"#10b981",
								"#6b7280",
							].map((color) => (
								<div
									key={color}
									className="aspect-square rounded-full cursor-pointer border-2 border-transparent hover:border-gray-300"
									style={{ backgroundColor: color }}
								/>
							))}
						</div>
					</div>

					<div className="space-y-4">
						<h3 className="text-sm font-medium">Font Size</h3>

						<select className="w-full px-3 py-2 border rounded-md">
							<option>Small</option>
							<option selected>Medium</option>
							<option>Large</option>
						</select>
					</div>
				</div>
			</div>
		</div>
	);
}
