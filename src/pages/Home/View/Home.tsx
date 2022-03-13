import React from 'react';

import { Table, Title } from 'components/';
import { IHomeProps } from './interfaces';

export const Home: React.FC<IHomeProps> = ({
	loading,
	error,
	items,
	setSortBy,
	onSaveToFavorite,
}) => {
	return (
		<div className="">
			<Title label="Home" variant="h1" />
			<Table
				loading={loading}
				error={error}
				items={items}
				setSortBy={setSortBy}
				onSaveToFavorite={onSaveToFavorite}
			/>
		</div>
	);
};
