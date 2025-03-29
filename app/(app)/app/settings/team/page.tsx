import React from "react";
import { Users } from "lucide-react";

export default function TeamPage() {
	return (
		<div className="space-y-6">
			<div className="flex items-center gap-2">
				<Users size={20} className="text-primary" />
				<h1 className="text-xl font-semibold">Team</h1>
			</div>
			<p className="text-muted-foreground">
				Manage team members and their permissions
			</p>

			<div className="space-y-4">
				<div className="grid gap-6 p-6 border rounded-lg">
					<div className="space-y-4">
						<h3 className="text-sm font-medium">Team Members</h3>

						<div className="border rounded-md overflow-hidden">
							<table className="min-w-full divide-y">
								<thead className="bg-muted/50">
									<tr>
										<th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
											Name
										</th>
										<th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
											Email
										</th>
										<th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
											Role
										</th>
										<th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
											Actions
										</th>
									</tr>
								</thead>
								<tbody className="bg-background divide-y">
									<tr>
										<td className="px-6 py-4 whitespace-nowrap text-sm">
											John Doe
										</td>
										<td className="px-6 py-4 whitespace-nowrap text-sm">
											john@example.com
										</td>
										<td className="px-6 py-4 whitespace-nowrap text-sm">
											Admin
										</td>
										<td className="px-6 py-4 whitespace-nowrap text-sm">
											<button className="text-blue-600 hover:text-blue-800">
												Edit
											</button>
										</td>
									</tr>
									<tr>
										<td className="px-6 py-4 whitespace-nowrap text-sm">
											Jane Smith
										</td>
										<td className="px-6 py-4 whitespace-nowrap text-sm">
											jane@example.com
										</td>
										<td className="px-6 py-4 whitespace-nowrap text-sm">
											Member
										</td>
										<td className="px-6 py-4 whitespace-nowrap text-sm">
											<button className="text-blue-600 hover:text-blue-800">
												Edit
											</button>
										</td>
									</tr>
								</tbody>
							</table>
						</div>

						<button className="px-4 py-2 bg-primary text-primary-foreground rounded-md text-sm font-medium">
							Add Team Member
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
