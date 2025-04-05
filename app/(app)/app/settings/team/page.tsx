"use client";
import { Users } from "lucide-react";
import { useOrganization, useUser } from "@clerk/nextjs";

export default function TeamPage() {
	const { user } = useUser();
	const { memberships, organization } = useOrganization({
		memberships: {
			infinite: true, // Append new data to the existing list
			keepPreviousData: true, // Persist the cached data until the new data has been fetched
		},
		organization: {
			keepPreviousData: true, // Persist the cached data until the new data has been fetched
		},
	});
	return (
		<div className="space-y-6">
			<div className="flex items-center gap-2">
				<Users size={20} className="text-primary" />
				<h1 className="text-xl font-semibold">
					{organization?.id ? organization.name : "Team"}
				</h1>
			</div>
			<p className="text-muted-foreground">
				Manage team members and their permissions
			</p>

			<div className="space-y-4">
				<div className="grid gap-6 p-6 border rounded-lg">
					<div className="space-y-4">
						<h3 className="text-sm font-medium">
							{organization?.id
								? `${organization.name} Members`
								: "Team Members"}
						</h3>

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
								</thead>{" "}
								<tbody className="bg-background divide-y">
									{memberships ? (
										memberships.data?.map((mem) => (
											<tr key={mem.id}>
												<td className="px-6 py-4 whitespace-nowrap text-sm">
													{
														mem.publicUserData
															.firstName
													}{" "}
													{
														mem.publicUserData
															.lastName
													}
												</td>
												<td className="px-6 py-4 whitespace-nowrap text-sm">
													{
														mem.publicUserData
															.identifier
													}
												</td>
												<td className="px-6 py-4 whitespace-nowrap text-sm">
													{mem.role}
												</td>
												<td className="px-6 py-4 whitespace-nowrap text-sm">
													<button className="text-blue-600 hover:text-blue-800">
														Edit
													</button>
												</td>
											</tr>
										))
									) : (
										<tr>
											<td className="px-6 py-4 whitespace-nowrap text-sm">
												{user?.fullName}
											</td>
											<td className="px-6 py-4 whitespace-nowrap text-sm">
												{
													user?.emailAddresses[0]
														.emailAddress
												}
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
									)}
								</tbody>
							</table>
						</div>
						<div className="flex justify-between">
							<button className="px-4 py-2 bg-primary text-primary-foreground rounded-md text-sm font-medium">
								Add Team Member
							</button>
							{memberships && (
								<button
									className="px-4 py-2 rounded-md text-sm font-medium"
									disabled={memberships.hasNextPage} // Disable the button if there are no more available pages to be fetched
									onClick={memberships.fetchNext}
								>
									Load more
								</button>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
