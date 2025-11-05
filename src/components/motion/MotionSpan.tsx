"use client";

import { motion } from "motion/react";
import { type ComponentPropsWithoutRef } from "react";

export function MotionSpan({
	children,
	...props
}: ComponentPropsWithoutRef<typeof motion.span>) {
	return <motion.span {...props}>{children}</motion.span>;
}

