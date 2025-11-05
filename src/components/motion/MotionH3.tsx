"use client";

import { motion } from "motion/react";
import { type ComponentPropsWithoutRef } from "react";

export function MotionH3({
	children,
	...props
}: ComponentPropsWithoutRef<typeof motion.h3>) {
	return <motion.h3 {...props}>{children}</motion.h3>;
}

