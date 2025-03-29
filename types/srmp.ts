// Node types for SRMP diagrams
export type NodeType = "danger" | "barrier" | "consequence";

export interface Node {
	id: string;
	type: NodeType;
	title: string;
	description: string;
	x: number;
	y: number;
}

// Connection between nodes
export interface Connection {
	id: string;
	sourceId: string;
	targetId: string;
}

// Full SRMP diagram data
export interface SRMPData {
	id?: string;
	title: string;
	description: string;
	createdAt?: Date;
	updatedAt?: Date;
	assignee?: string;
	dueDate?: Date;
	nodes: Node[];
	connections: Connection[];
}
