import { IMissionID } from 'interfaces/';

export interface ILaunch {
	launch_date_utc: string;
	mission_id: IMissionID[];
	mission_name: string;
}
