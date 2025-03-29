import React from "react";
import { Plug } from "lucide-react";

export default function IntegrationsPage() {
	return (
		<div className="space-y-6">
			<div className="flex items-center gap-2">
				<Plug size={20} className="text-primary" />
				<h1 className="text-xl font-semibold">Integrations</h1>
			</div>
			<p className="text-muted-foreground">
				Connect your account with third-party services
			</p>

			<div className="space-y-4">
				<div className="grid gap-6 p-6 border rounded-lg">
					<div className="space-y-4">
						<h3 className="text-sm font-medium">
							Available Integrations
						</h3>

						<div className="space-y-4">
							<div className="flex items-center justify-between p-4 border rounded-md">
								<div className="flex items-center gap-3">
									<div className="size-10 rounded-md bg-blue-100 flex items-center justify-center">
										<svg
											viewBox="0 0 24 24"
											width="24"
											height="24"
											stroke="#2563eb"
											strokeWidth="2"
											fill="none"
											strokeLinecap="round"
											strokeLinejoin="round"
										>
											<path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4" />
										</svg>
									</div>
									<div>
										<h4 className="font-medium">Slack</h4>
										<p className="text-xs text-muted-foreground">
											Send notifications to your Slack
											workspace
										</p>
									</div>
								</div>
								<button className="px-3 py-1.5 border border-primary text-primary rounded-md text-sm font-medium hover:bg-primary/10">
									Connect
								</button>
							</div>

							<div className="flex items-center justify-between p-4 border rounded-md">
								<div className="flex items-center gap-3">
									<div className="size-10 rounded-md bg-red-100 flex items-center justify-center">
										<svg
											viewBox="0 0 24 24"
											width="24"
											height="24"
											stroke="#dc2626"
											strokeWidth="2"
											fill="none"
											strokeLinecap="round"
											strokeLinejoin="round"
										>
											<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
											<polyline points="22 4 12 14.01 9 11.01" />
										</svg>
									</div>
									<div>
										<h4 className="font-medium">
											Google Calendar
										</h4>
										<p className="text-xs text-muted-foreground">
											Sync events with your Google
											Calendar
										</p>
									</div>
								</div>
								<button className="px-3 py-1.5 bg-green-600 text-white rounded-md text-sm font-medium">
									Connected
								</button>
							</div>

							<div className="flex items-center justify-between p-4 border rounded-md">
								<div className="flex items-center gap-3">
									<div className="size-10 rounded-md bg-purple-100 flex items-center justify-center">
										<svg
											viewBox="0 0 24 24"
											width="24"
											height="24"
											stroke="#9333ea"
											strokeWidth="2"
											fill="none"
											strokeLinecap="round"
											strokeLinejoin="round"
										>
											<rect
												x="4"
												y="4"
												width="16"
												height="16"
												rx="2"
												ry="2"
											/>
											<rect
												x="9"
												y="9"
												width="6"
												height="6"
											/>
											<line x1="9" y1="1" x2="9" y2="4" />
											<line
												x1="15"
												y1="1"
												x2="15"
												y2="4"
											/>
											<line
												x1="9"
												y1="20"
												x2="9"
												y2="23"
											/>
											<line
												x1="15"
												y1="20"
												x2="15"
												y2="23"
											/>
											<line
												x1="20"
												y1="9"
												x2="23"
												y2="9"
											/>
											<line
												x1="20"
												y1="14"
												x2="23"
												y2="14"
											/>
											<line x1="1" y1="9" x2="4" y2="9" />
											<line
												x1="1"
												y1="14"
												x2="4"
												y2="14"
											/>
										</svg>
									</div>
									<div>
										<h4 className="font-medium">Zapier</h4>
										<p className="text-xs text-muted-foreground">
											Connect with 3,000+ apps via Zapier
										</p>
									</div>
								</div>
								<button className="px-3 py-1.5 border border-primary text-primary rounded-md text-sm font-medium hover:bg-primary/10">
									Connect
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
