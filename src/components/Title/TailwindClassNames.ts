import { IVariants } from './interfaces';

export const TitleClassNames = (variant: string) => {
	const variants: IVariants = {
		'h1': 'text-5xl',
		'h2': 'text-4xl',
		'h3': 'text-3xl',
		'h4': 'text-2xl',
		'h5': 'text-xl',
		'h6': 'text-base',
	};

	const getVariant = (): string => variants[variant as keyof IVariants];

	return [
		'font-medium',
		'leading-tight',
		'mt-0',
		'mb-2',
		'text-center',
		getVariant()
	].join(' ');
}