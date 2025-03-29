"use client";

import React, { useState, useEffect } from "react";
import { ChevronLeft, X, Settings } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import SRMPEditor from "@/components/srmp/srmp-editor";

export default function NewSRMPPage() {
	const [showDetailsModal, setShowDetailsModal] = useState(false);
	const [srmpName, setSrmpName] = useState("Untitled SRMP");
	const [isInitialNameDialog, setIsInitialNameDialog] = useState(true);

	// Show the name dialog on initial page load
	useEffect(() => {
		const timer = setTimeout(() => {
			setShowDetailsModal(true);
		}, 100);

		return () => clearTimeout(timer);
	}, []);

	const handleSaveDetails = () => {
		setShowDetailsModal(false);
		setIsInitialNameDialog(false);
	};

	const handleCloseModal = () => {
		// Don't allow closing the modal if it's the initial naming dialog
		if (!isInitialNameDialog) {
			setShowDetailsModal(false);
		}
	};

	return (
		<div className="container py-6 space-y-6">
			<div className="flex items-center justify-between">
				<div className="flex items-center gap-4">
					<Link href="/app/srmp">
						<Button variant="ghost" size="sm" className="h-8 gap-1">
							<ChevronLeft className="size-4" />
							<span>Back</span>
						</Button>
					</Link>
					<div>
						<h1 className="text-2xl font-semibold">{srmpName}</h1>
						<p className="text-muted-foreground">
							Build a risk management plan diagram
						</p>
					</div>
				</div>

				<div className="flex items-center gap-2">
					<Button
						variant="outline"
						size="sm"
						onClick={() => setShowDetailsModal(true)}
						className="flex items-center gap-1"
					>
						<Settings className="size-4" />
						<span>SRMP Details</span>
					</Button>
					<Button variant="outline" size="sm">
						Save Draft
					</Button>
					<Button size="sm">Publish</Button>
				</div>
			</div>

			<div>
				<div className="border rounded-lg p-4 min-h-[700px] bg-white">
					<SRMPEditor title={srmpName} />
				</div>
			</div>

			{/* Details Modal */}
			{showDetailsModal && (
				<div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
					<div className="bg-white rounded-lg p-6 w-full max-w-md">
						<div className="flex items-center justify-between mb-4">
							<h2 className="text-xl font-semibold">
								{isInitialNameDialog
									? "Name Your SRMP"
									: "SRMP Details"}
							</h2>
							{!isInitialNameDialog && (
								<Button
									variant="ghost"
									size="icon"
									className="h-8 w-8"
									onClick={handleCloseModal}
								>
									<X className="size-4" />
								</Button>
							)}
						</div>

						<div className="space-y-4">
							<div className="space-y-2">
								<label className="text-sm font-medium">
									Title
								</label>
								<input
									type="text"
									value={srmpName}
									onChange={(e) =>
										setSrmpName(e.target.value)
									}
									placeholder="Enter SRMP title"
									className="w-full px-3 py-2 border rounded-md"
									autoFocus
								/>
							</div>

							<div className="space-y-2">
								<label className="text-sm font-medium">
									Description
								</label>
								<textarea
									placeholder="Enter description"
									className="w-full px-3 py-2 border rounded-md min-h-[100px]"
								/>
							</div>

							<div className="space-y-2">
								<label className="text-sm font-medium">
									Due Date
								</label>
								<input
									type="date"
									className="w-full px-3 py-2 border rounded-md"
								/>
							</div>

							<div className="space-y-2">
								<label className="text-sm font-medium">
									Assignee
								</label>
								<select className="w-full px-3 py-2 border rounded-md">
									<option>John Doe</option>
									<option>Jane Smith</option>
								</select>
							</div>

							<div className="flex justify-end gap-2 pt-2">
								{!isInitialNameDialog && (
									<Button
										variant="outline"
										onClick={handleCloseModal}
									>
										Cancel
									</Button>
								)}
								<Button onClick={handleSaveDetails}>
									{isInitialNameDialog
										? "Create SRMP"
										: "Save"}
								</Button>
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}
