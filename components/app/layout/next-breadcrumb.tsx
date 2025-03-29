"use client";

import React, { ReactNode } from "react";

import { usePathname } from "next/navigation";
import Link from "next/link";
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

type TBreadCrumbProps = {
	listClasses?: string;
	activeClasses?: string;
	capitalizeLinks?: boolean;
};

function capitalizeFirstLetter(string: string) {
	return string.charAt(0).toUpperCase() + string.slice(1);
}

const NextBreadcrumb = ({
	listClasses,
	activeClasses,
	capitalizeLinks,
}: TBreadCrumbProps) => {
	const paths = usePathname() ?? "";
	const pathNames = paths.split("/").filter((path) => path);

	return (
		<>
			{pathNames.length > 0 && (
				<BreadcrumbSeparator className="hidden md:block" />
			)}
			{pathNames.map((itemLink, index) => {
				let href = `/${pathNames.slice(0, index + 1).join("/")}`;
				let itemClasses =
					paths === href
						? `${listClasses} ${activeClasses}`
						: listClasses;

				return (
					<React.Fragment key={index}>
						<BreadcrumbItem className={itemClasses}>
							<BreadcrumbPage>
								<Link href={href}>
									{itemLink == "app"
										? "Dashboard"
										: capitalizeFirstLetter(itemLink)}
								</Link>
							</BreadcrumbPage>
						</BreadcrumbItem>
						{pathNames.length !== index + 1 && (
							<BreadcrumbSeparator className="hidden md:block" />
						)}
					</React.Fragment>
				);
			})}
		</>
	);
};

export default NextBreadcrumb;
