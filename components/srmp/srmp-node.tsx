"use client";

import React from "react";
import { AlertTriangle, Shield, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { Node } from "@/types/srmp";

interface SRMPNodeProps {
	node: Node;
	onClick: () => void;
}

export function SRMPNode({ node, onClick }: SRMPNodeProps) {
	// Calculate position styles based on x, y percentages
	const positionStyle = {
		left: `${node.x}%`,
		top: `${node.y}%`,
		transform: "translate(-50%, -50%)",
	};

	// Determine styling based on node type
	const getNodeStyles = () => {
		switch (node.type) {
			case "danger":
				return {
					container: "border-red-300 bg-red-50",
					icon: <AlertTriangle className="size-4" />,
					text: "text-red-700",
				};
			case "barrier":
				return {
					container: "border-blue-300 bg-blue-50",
					icon: <Shield className="size-4" />,
					text: "text-blue-700",
				};
			case "consequence":
				return {
					container: "border-amber-300 bg-amber-50",
					icon: <AlertCircle className="size-4" />,
					text: "text-amber-700",
				};
			default:
				return {
					container: "border-gray-300 bg-gray-50",
					icon: null,
					text: "text-gray-700",
				};
		}
	};

	const styles = getNodeStyles();

	return (
		<div
			className={cn(
				"absolute px-3 py-2 border rounded-md cursor-pointer hover:shadow-md transition-shadow",
				styles.container
			)}
			style={positionStyle}
			onClick={onClick}
		>
			<div
				className={cn(
					"flex items-center gap-2 font-medium",
					styles.text
				)}
			>
				{styles.icon}
				<span className="text-sm truncate max-w-[120px]">
					{node.title}
				</span>
			</div>
		</div>
	);
}
