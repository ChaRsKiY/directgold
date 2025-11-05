"use client";

import { motion } from "motion/react";
import { type ComponentPropsWithoutRef } from "react";

export function MotionP({
	children,
	...props
}: ComponentPropsWithoutRef<typeof motion.p>) {
	return <motion.p {...props}>{children}</motion.p>;
}

