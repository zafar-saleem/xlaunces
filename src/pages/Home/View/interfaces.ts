import { ApolloError } from '@apollo/client/errors';
import { ILaunches } from 'interfaces/';

export interface IHomeProps {
	loading: boolean;
	error: ApolloError | undefined;
	items: ILaunches[];
	setSortBy: Function;
	onSaveToFavorite: Function;
}