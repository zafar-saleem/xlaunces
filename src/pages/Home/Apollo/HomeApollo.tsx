import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { HomeContainer } from '../Container/';
import { GET_LAUNCHES, GET_DESCRIPTION } from '../Queries/';
import { IDescriptions } from '../Container/interfaces';
import { ILaunch } from './interfaces';

export const HomeApollo: React.FC = () => {
	const limit = 10;
	const [description, setDescription] = useState<IDescriptions[]>([]);
	const [sortBy, setSortBy] = useState<string>('mission_name');
	const launches = useQuery(GET_LAUNCHES, {
		variables: { limit, sort: sortBy },
	});

	useEffect(() => {
		function getDescription() {
			launches.data?.launches?.map(async (launch: ILaunch) => {
				const data = await launches.client.query({
					query: GET_DESCRIPTION,
					variables: { id: launch.mission_id[0] }
				});

				if (data) {
					setDescription((prev: IDescriptions[]) => [...prev, data.data.mission]);
				}
			});
		}
		if (description.length > 0) {
			setDescription([]);
		}
		getDescription();
	}, []);

	return (
		<HomeContainer
			loading={launches.loading}
			error={launches.error}
			data={launches.data}
			descriptions={description}
			setSortBy={setSortBy}
		/>
	);
}
