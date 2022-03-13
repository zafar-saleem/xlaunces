export const ContainerClassNames = [
	'container',
	'flex',
	'justify-center',
	'mx-auto'
].join(' ');

export const FlexClassNames = [
	'flex',
	'flex-col'
].join(' ');

export const BorderClassNames = [
	'border-b',
	'border-gray-200',
	'shadow'
].join(' ');

export const TableClassNames = [
	'divide-y',
	'divide-gray-300'
].join(' ');

export const TableHeaderClassNames = (isCursor = false) => {
	return [
		'px-6',
		'py-2',
		'text-xs',
		'text-gray-500',
		'text-left',
		(isCursor) && 'cursor-pointer'
	].join(' ');
};

export const TableBodyClassNames = [
	'bg-white',
	'divide-y',
	'divide-gray-300'
].join(' ');

export const TableColumnClassNames = (color = '900') => {
	return [
		'px-6',
		'py-4',
		'text-sm',
		color === '500' ? 'text-gray-500' : 'text-gray-900'
	].join(' ');	
}

export const CheckboxClassNames = [
	'form-check-input',
	'appearance-none',
	'h-4',
	'w-4',
	'border',
	'border-gray-300',
	'rounded-sm',
	'bg-white',
	'checked:bg-blue-600',
	'checked:border-blue-600',
	'focus:outline-none',
	'transition',
	'duration-200',
	'my-1',
	'align-top',
	'bg-no-repeat',
	'bg-center',
	'bg-contain',
	'float-left',
	'cursor-pointer'
].join(' ');
