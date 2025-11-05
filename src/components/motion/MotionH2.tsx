"use client";

import { motion } from "motion/react";
import { type ComponentPropsWithoutRef } from "react";

export function MotionH2({
	children,
	...props
}: ComponentPropsWithoutRef<typeof motion.h2>) {
	return <motion.h2 {...props}>{children}</motion.h2>;
}

