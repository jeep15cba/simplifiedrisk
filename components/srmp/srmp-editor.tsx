"use client";

import React, { useState, useEffect } from "react";
import {
	Plus,
	Minus,
	AlertTriangle,
	Shield,
	X,
	AlertCircle,
	ThumbsUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
	SRMPNode,
	SRMPInfoPanel,
} from "@/components/srmp/srmp-editor-components";
import { Node, NodeType } from "@/types/srmp";

interface SRMPEditorProps {
	title?: string;
}

export default function SRMPEditor({
	title = "Untitled Risk",
}: SRMPEditorProps) {
	const [nodes, setNodes] = useState<Node[]>([
		{
			id: "central",
			type: "danger",
			title: title,
			description: "Central risk event",
			x: 50,
			y: 50,
		},
	]);

	// Update central node title when the prop changes
	useEffect(() => {
		setNodes((prevNodes) =>
			prevNodes.map((node) =>
				node.id === "central" ? { ...node, title: title } : node
			)
		);
	}, [title]);

	const [selectedNode, setSelectedNode] = useState<Node | null>(null);
	const [showInfoPanel, setShowInfoPanel] = useState(false);

	const handleNodeClick = (node: Node) => {
		setSelectedNode(node);
		setShowInfoPanel(true);
	};

	const handleAddDanger = () => {
		const newNode: Node = {
			id: `danger-${Date.now()}`,
			type: "danger",
			title: "New Danger",
			description: "Description of the new danger",
			x: 20,
			y: Math.random() * 80,
		};
		setNodes([...nodes, newNode]);
	};

	const handleAddBarrier = () => {
		const newNode: Node = {
			id: `barrier-${Date.now()}`,
			type: "barrier",
			title: "New Barrier",
			description: "Description of the new barrier",
			x: 50,
			y: Math.random() * 80,
		};
		setNodes([...nodes, newNode]);
	};

	const handleAddConsequence = () => {
		const newNode: Node = {
			id: `consequence-${Date.now()}`,
			type: "consequence",
			title: "New Consequence",
			description: "Description of the new consequence",
			x: 80,
			y: Math.random() * 80,
		};
		setNodes([...nodes, newNode]);
	};

	const handleCloseInfoPanel = () => {
		setShowInfoPanel(false);
		setSelectedNode(null);
	};

	return (
		<div className="relative h-full">
			{/* Editor toolbar */}
			<div className="flex justify-between mb-4 bg-muted/50 p-2 rounded-md">
				<div className="flex gap-2">
					<Button
						variant="outline"
						size="sm"
						onClick={handleAddDanger}
					>
						<AlertTriangle className="size-4 mr-1 text-red-500" />
						Add Danger
					</Button>
					<Button
						variant="outline"
						size="sm"
						onClick={handleAddBarrier}
					>
						<Shield className="size-4 mr-1 text-blue-500" /> Add
						Barrier
					</Button>
					<Button
						variant="outline"
						size="sm"
						onClick={handleAddConsequence}
					>
						<AlertCircle className="size-4 mr-1 text-amber-500" />
						Add Consequence
					</Button>
				</div>
				<div className="flex gap-2">
					<Button variant="outline" size="icon" className="h-8 w-8">
						<Plus className="size-4" />
					</Button>
					<Button variant="outline" size="icon" className="h-8 w-8">
						<Minus className="size-4" />
					</Button>
				</div>
			</div>

			{/* Diagram area */}
			<div className="relative h-[700px] border border-dashed rounded-md bg-gray-50 overflow-hidden">
				{/* Central node */}
				<div
					className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border border-red-300 bg-red-50 p-3 rounded-md cursor-pointer"
					onClick={() => handleNodeClick(nodes[0])}
				>
					<div className="flex items-center gap-2 text-red-700 font-medium">
						<AlertTriangle className="size-4" />
						{nodes[0].title}
					</div>
				</div>

				{/* Render all nodes */}
				{nodes.map((node) => {
					if (node.id === "central") return null; // Skip central node as it's rendered separately

					return (
						<SRMPNode
							key={node.id}
							node={node}
							onClick={() => handleNodeClick(node)}
						/>
					);
				})}

				{/* Helper guide lines for empty diagram */}
				{nodes.length <= 1 && (
					<div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-30">
						<div className="w-full h-px bg-gray-300"></div>
						<div className="h-full w-px bg-gray-300 absolute"></div>
						<div className="absolute text-gray-400 text-sm left-5 top-5">
							Dangers
						</div>
						<div className="absolute text-gray-400 text-sm right-5 top-5">
							Consequences
						</div>
						<div className="absolute text-gray-400 text-sm left-1/2 -translate-x-1/2 top-5">
							Barriers
						</div>
					</div>
				)}

				{/* Add buttons for the empty state */}
				{nodes.length <= 1 && (
					<>
						<div className="absolute top-1/2 left-[20%] transform -translate-x-1/2 -translate-y-1/2">
							<Button
								variant="outline"
								size="sm"
								className="bg-white shadow-sm border-red-200 text-red-600"
								onClick={handleAddDanger}
							>
								<Plus className="size-3 mr-1" /> Add Danger
							</Button>
						</div>
						<div className="absolute top-1/2 right-[20%] transform translate-x-1/2 -translate-y-1/2">
							<Button
								variant="outline"
								size="sm"
								className="bg-white shadow-sm border-amber-200 text-amber-600"
								onClick={handleAddConsequence}
							>
								<Plus className="size-3 mr-1" /> Add Consequence
							</Button>
						</div>
					</>
				)}
			</div>

			{/* Info panel */}
			{showInfoPanel && selectedNode && (
				<SRMPInfoPanel
					node={selectedNode}
					onClose={handleCloseInfoPanel}
				/>
			)}
		</div>
	);
}
