import Link from 'next/link';
import React from 'react';

const DrinksList = ({ drinks }) => {
	return (
		<ul>
			{drinks.map((drink) => (
				<li>
					<Link href={`/drinks/${drink.idDrink}`}>{drink.strDrink}</Link>
				</li>
			))}
		</ul>
	);
};

export default DrinksList;
