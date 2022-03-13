import React, { useState } from 'react';
import { Home } from '../View/';
import { IHomeContainerProps } from './interfaces';
import moment from 'moment';

export const HomeContainer: React.FC<IHomeContainerProps> = ({
	loading,
	error,
	data,
	descriptions,
	setSortBy,
}) => {
	const [forceUpdate, setForceUpdate] = useState<boolean>(false);
	const manipulateData = () => (
		data?.launches?.map((item) => {
			return {
				...item,
				favorited: localStorage.getItem(item.mission_name) ? true : false,
				date: moment(item.launch_date_utc).format('DD MMMM yyyy, HH:mm'),
				description: descriptions?.filter(desc => {
					if (desc.id === String(item?.mission_id?.[0])) {
						return desc.description;
					}
				})[0]?.description
			};
		})
	);

	const onSaveToFavorite = (name: string) => {
		if (localStorage.getItem(name)) {
			localStorage.removeItem(name);
			setForceUpdate(!forceUpdate);

			return;
		}

		localStorage.setItem(name, name);
		setForceUpdate(!forceUpdate);
	};

	return (
		<Home
			loading={loading}
			error={error}
			items={manipulateData()}
			setSortBy={setSortBy}
			onSaveToFavorite={onSaveToFavorite}
		/>
	);
}
