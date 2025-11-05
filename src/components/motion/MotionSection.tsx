"use client";

import { motion } from "motion/react";
import { type ComponentPropsWithoutRef } from "react";

export function MotionSection({
	children,
	...props
}: ComponentPropsWithoutRef<typeof motion.section>) {
	return <motion.section {...props}>{children}</motion.section>;
}

