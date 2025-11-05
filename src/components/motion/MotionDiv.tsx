"use client";

import { motion } from "motion/react";
import { type ComponentPropsWithoutRef } from "react";

export function MotionDiv({
	children,
	...props
}: ComponentPropsWithoutRef<typeof motion.div>) {
	return <motion.div {...props}>{children}</motion.div>;
}

