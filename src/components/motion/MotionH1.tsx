"use client";

import { motion } from "motion/react";
import { type ComponentPropsWithoutRef } from "react";

export function MotionH1({
	children,
	...props
}: ComponentPropsWithoutRef<typeof motion.h1>) {
	return <motion.h1 {...props}>{children}</motion.h1>;
}

