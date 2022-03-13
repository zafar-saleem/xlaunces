import React from 'react';
import { TitleClassNames } from './TailwindClassNames';
import { ITitleProps } from './interfaces';

export const Title: React.FC<ITitleProps> = ({
	label,
	variant,
}) => (
	<h1 className={TitleClassNames(variant)}>{label}</h1>
);
