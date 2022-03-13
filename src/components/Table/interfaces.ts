import { ApolloError } from '@apollo/client/errors';
import { ILaunches } from 'interfaces/';

export interface ITableProps {
	loading: boolean;
	error: ApolloError | undefined;
	setSortBy: Function;
	items: ILaunches[];
	onSaveToFavorite: Function;
}