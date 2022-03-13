import { ApolloError } from '@apollo/client/errors';
import { ILaunches } from 'interfaces/';

export interface IDescriptions {
	description: string;
	id: string;
}

interface IData {
	launches: ILaunches[];
}

export interface IHomeContainerProps {
	loading: boolean;
	error: ApolloError | undefined;
	data: IData;
	descriptions: IDescriptions[];
	setSortBy: Function;
}