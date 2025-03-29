import React from "react";
import { History } from "lucide-react";

export default function AuditTrailPage() {
	return (
		<div className="space-y-6">
			<div className="flex items-center gap-2">
				<History size={20} className="text-primary" />
				<h1 className="text-xl font-semibold">Audit Trail</h1>
			</div>
			<p className="text-muted-foreground">
				View a log of all account activities
			</p>

			<div className="space-y-4">
				<div className="grid gap-6 p-6 border rounded-lg">
					<div className="space-y-4">
						<div className="flex items-center justify-between">
							<h3 className="text-sm font-medium">
								Activity Log
							</h3>

							<div className="flex gap-2">
								<select className="px-2 py-1 border rounded-md text-xs">
									<option>All activities</option>
									<option>Logins</option>
									<option>Settings changes</option>
									<option>Data changes</option>
								</select>

								<button className="px-2 py-1 bg-primary text-primary-foreground rounded-md text-xs">
									Export
								</button>
							</div>
						</div>

						<div className="border rounded-md overflow-hidden">
							<table className="min-w-full divide-y">
								<thead className="bg-muted/50">
									<tr>
										<th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
											Date
										</th>
										<th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
											User
										</th>
										<th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
											Action
										</th>
										<th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
											IP Address
										</th>
									</tr>
								</thead>
								<tbody className="bg-background divide-y">
									<tr>
										<td className="px-6 py-4 whitespace-nowrap text-sm">
											2023-06-15 14:30
										</td>
										<td className="px-6 py-4 whitespace-nowrap text-sm">
											john@example.com
										</td>
										<td className="px-6 py-4 whitespace-nowrap text-sm">
											Login
										</td>
										<td className="px-6 py-4 whitespace-nowrap text-sm">
											192.168.1.1
										</td>
									</tr>
									<tr>
										<td className="px-6 py-4 whitespace-nowrap text-sm">
											2023-06-14 11:22
										</td>
										<td className="px-6 py-4 whitespace-nowrap text-sm">
											jane@example.com
										</td>
										<td className="px-6 py-4 whitespace-nowrap text-sm">
											Updated billing info
										</td>
										<td className="px-6 py-4 whitespace-nowrap text-sm">
											192.168.1.2
										</td>
									</tr>
									<tr>
										<td className="px-6 py-4 whitespace-nowrap text-sm">
											2023-06-13 09:15
										</td>
										<td className="px-6 py-4 whitespace-nowrap text-sm">
											john@example.com
										</td>
										<td className="px-6 py-4 whitespace-nowrap text-sm">
											Added team member
										</td>
										<td className="px-6 py-4 whitespace-nowrap text-sm">
											192.168.1.1
										</td>
									</tr>
								</tbody>
							</table>
						</div>

						<div className="flex justify-between items-center text-sm">
							<div>Showing 1-3 of 24 activities</div>
							<div className="flex gap-2">
								<button className="px-2 py-1 border rounded-md">
									Previous
								</button>
								<button className="px-2 py-1 border rounded-md">
									Next
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
