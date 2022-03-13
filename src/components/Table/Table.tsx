import React from 'react';
import { ITableProps } from './interfaces';
import { Loader } from 'components/';
import {
	CheckboxClassNames,
	ContainerClassNames,
	FlexClassNames,
	BorderClassNames,
	TableClassNames,
	TableHeaderClassNames,
	TableBodyClassNames,
	TableColumnClassNames,
} from './TailwindClassNames';

export const Table: React.FC<ITableProps> = ({
	loading,
	error,
	items,
	setSortBy,
	onSaveToFavorite,
}) => {
	return (
		<div className={ContainerClassNames}>
			{loading && (<Loader />)}
    	<div className={FlexClassNames}>
        <div className="w-full">
          <div className={BorderClassNames}>
          	<>
          		{error && (<p>{error}</p>)}
          	</>
          	{
          		!loading && (
          			<table className={TableClassNames}>
								  <thead className="bg-gray-50">
								    <tr>
								      <th className={TableHeaderClassNames()}>Favorite</th>
								      <th
								      	className={`${TableHeaderClassNames(true)}`}
								      	onClick={() => setSortBy('mission_name')}
								      >
								      	Mission name
								      </th>
								      <th
								      	className={`${TableHeaderClassNames(true)}`}
								      	onClick={() => setSortBy('launch_date_utc')}
								      >
								      	Date
								      </th>
								      <th className={TableHeaderClassNames()}>Description</th>
								    </tr>
								  </thead>
								  <tbody className={TableBodyClassNames}>
								  	{
								  		items?.map((launch, index) => (
								  			<tr className="whitespace-nowrap" key={`${launch.mission_name}-${index}`}>
										      <td className={TableColumnClassNames()}>
										      	<input
										      		type="checkbox"
										      		name="fav"
										      		value={launch.mission_name}
										      		onChange={
										      			(event: React.ChangeEvent<HTMLInputElement>) => {
										      				onSaveToFavorite && onSaveToFavorite(event.target.value)
										      			}
										      		}
										      		className={CheckboxClassNames}
										      		checked={launch.favorited}
										      	/>
										      </td>
										      <td className={TableColumnClassNames()}>
										      	<div>{launch.mission_name}</div>
										      </td>
										      <td className={TableColumnClassNames('500')}>{launch.date}</td>
										      <td className={TableColumnClassNames('500')}>
										      	<div className={launch.description?.length > 23 ? `truncate w-44` : `w-44`}>
										      		{launch.description || `No description available`}
										      	</div>
										      </td>
										    </tr>
								  		))
								  	}
								  </tbody>
								</table>
          		)
          	}
					</div>
				</div>
			</div>
		</div>
	);
}