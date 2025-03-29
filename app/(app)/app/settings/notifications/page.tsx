import React from "react";
import { Bell } from "lucide-react";

export default function NotificationsPage() {
	return (
		<div className="space-y-6">
			<div className="flex items-center gap-2">
				<Bell size={20} className="text-primary" />
				<h1 className="text-xl font-semibold">Notifications</h1>
			</div>
			<p className="text-muted-foreground">
				Configure how you receive notifications
			</p>

			<div className="space-y-4">
				<div className="grid gap-6 p-6 border rounded-lg">
					<div className="space-y-4">
						<h3 className="text-sm font-medium">
							Email Notifications
						</h3>

						<div className="space-y-2">
							<label className="flex items-center justify-between p-3 border rounded-md">
								<div>
									<span className="font-medium">
										Project updates
									</span>
									<p className="text-xs text-muted-foreground">
										Receive emails about project changes
									</p>
								</div>
								<input
									type="checkbox"
									className="h-4 w-4"
									defaultChecked
								/>
							</label>

							<label className="flex items-center justify-between p-3 border rounded-md">
								<div>
									<span className="font-medium">
										Team messages
									</span>
									<p className="text-xs text-muted-foreground">
										Receive emails when team members message
										you
									</p>
								</div>
								<input
									type="checkbox"
									className="h-4 w-4"
									defaultChecked
								/>
							</label>

							<label className="flex items-center justify-between p-3 border rounded-md">
								<div>
									<span className="font-medium">
										Billing alerts
									</span>
									<p className="text-xs text-muted-foreground">
										Receive emails for billing-related
										notifications
									</p>
								</div>
								<input
									type="checkbox"
									className="h-4 w-4"
									defaultChecked
								/>
							</label>
						</div>
					</div>

					<div className="space-y-4">
						<h3 className="text-sm font-medium">
							Push Notifications
						</h3>

						<div className="space-y-2">
							<label className="flex items-center justify-between p-3 border rounded-md">
								<div>
									<span className="font-medium">
										Enable push notifications
									</span>
									<p className="text-xs text-muted-foreground">
										Receive notifications on your device
									</p>
								</div>
								<input
									type="checkbox"
									className="h-4 w-4"
									defaultChecked
								/>
							</label>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
