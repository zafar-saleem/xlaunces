import { ApolloError } from '@apollo/client/errors';

export interface IMissionID {
	0: string;
}

export interface ILaunches {
	launch_date_utc: string;
	mission_id: IMissionID[];
	mission_name: string;
	date: string;
	favorited: boolean;
	description: string;
}
