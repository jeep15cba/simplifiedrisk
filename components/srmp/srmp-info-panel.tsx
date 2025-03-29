"use client";

import React from "react";
import { X, Calendar, User, ThumbsUp, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Node } from "@/types/srmp";

interface SRMPInfoPanelProps {
	node: Node;
	onClose: () => void;
}

export function SRMPInfoPanel({ node, onClose }: SRMPInfoPanelProps) {
	const getPanelTitle = () => {
		switch (node.type) {
			case "danger":
				return "Danger";
			case "barrier":
				return "Barrier";
			case "consequence":
				return "Consequence";
			default:
				return "Node";
		}
	};

	const getTitleColor = () => {
		switch (node.type) {
			case "danger":
				return "text-red-600";
			case "barrier":
				return "text-blue-600";
			case "consequence":
				return "text-amber-600";
			default:
				return "";
		}
	};

	return (
		<div className="absolute top-0 right-0 w-80 h-full bg-white border-l shadow-lg p-4 z-10 overflow-y-auto">
			<div className="flex items-center justify-between mb-4">
				<h3 className={`font-medium ${getTitleColor()}`}>
					{getPanelTitle()}
				</h3>
				<Button
					variant="ghost"
					size="icon"
					className="h-8 w-8"
					onClick={onClose}
				>
					<X className="size-4" />
				</Button>
			</div>

			<div className="space-y-4">
				<div className="space-y-2">
					<label className="text-sm font-medium text-gray-700">
						Title
					</label>
					<input
						type="text"
						defaultValue={node.title}
						className="w-full px-3 py-2 border rounded-md"
					/>
				</div>

				<div className="space-y-2">
					<label className="text-sm font-medium text-gray-700">
						Description
					</label>
					<textarea
						defaultValue={node.description}
						className="w-full px-3 py-2 border rounded-md min-h-[100px]"
					/>
				</div>

				{node.type === "barrier" && (
					<>
						<div className="space-y-2">
							<label className="text-sm font-medium text-gray-700">
								Type
							</label>
							<select className="w-full px-3 py-2 border rounded-md">
								<option>Physical</option>
								<option>Procedural</option>
								<option>Administrative</option>
								<option>Human Factor</option>
							</select>
						</div>

						<div className="space-y-2">
							<label className="text-sm font-medium text-gray-700">
								Effectiveness
							</label>
							<div className="flex items-center gap-1">
								<span className="text-yellow-500">
									<ThumbsUp className="size-4" />
								</span>
								<span className="text-yellow-500">
									<ThumbsUp className="size-4" />
								</span>
								<span className="text-yellow-500">
									<ThumbsUp className="size-4" />
								</span>
								<span className="text-gray-300">
									<ThumbsUp className="size-4" />
								</span>
								<span className="text-gray-300">
									<ThumbsUp className="size-4" />
								</span>
							</div>
						</div>
					</>
				)}

				{node.type === "consequence" && (
					<div className="space-y-2">
						<label className="text-sm font-medium text-gray-700">
							Severity
						</label>
						<select className="w-full px-3 py-2 border rounded-md">
							<option>Low</option>
							<option>Medium</option>
							<option>High</option>
							<option>Critical</option>
						</select>
					</div>
				)}

				<div className="space-y-2">
					<label className="text-sm font-medium text-gray-700">
						Assignee
					</label>
					<div className="flex items-center gap-2 px-3 py-2 border rounded-md">
						<User className="size-4 text-gray-500" />
						<span>John Doe</span>
					</div>
				</div>

				<div className="space-y-2">
					<label className="text-sm font-medium text-gray-700">
						Due Date
					</label>
					<div className="flex items-center gap-2 px-3 py-2 border rounded-md">
						<Calendar className="size-4 text-gray-500" />
						<span>Oct 25, 2023</span>
					</div>
				</div>

				<div className="pt-4 flex justify-end gap-2">
					<Button variant="outline" size="sm" onClick={onClose}>
						Cancel
					</Button>
					<Button size="sm">
						<Check className="size-3 mr-1" />
						Save
					</Button>
				</div>
			</div>
		</div>
	);
}
