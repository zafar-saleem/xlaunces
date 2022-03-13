import { gql } from 'apollo-boost';

export const GET_LAUNCHES = gql`
	query GetLaunches($limit: Int, $sort: String) {
		launches(limit: $limit, sort: $sort) {
			mission_name
			mission_id
			launch_date_utc
		}
	}
`;

export const GET_DESCRIPTION = gql`
	query GetDescription($id: ID!) {
		mission(id: $id) {
	    description
	    id
	  }
	}
`;