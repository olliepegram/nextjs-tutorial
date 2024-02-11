import Link from 'next/link';
import Image from 'next/image';

const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

const fetchDrink = async (id) => {
	const res = await fetch(`${url}${id}`);

	if (!res.ok) {
		throw new Error('Failed to fetch drink...');
	}
	const data = await res.json();
	return data;
};

const SingleDrinkPage = async ({ params }) => {
	const data = await fetchDrink(params.id);
	const title = data?.drinks[0].strDrink;
	const imgSrc = data?.drinks[0].strDrinkThumb; // specify witdth and height for aspect ratio

	return (
		<div>
			<Link
				href='/drinks'
				className='btn btn-primary mb-12 mt-8'
			>
				Back to drinks
			</Link>
			<h1 className='text-4xl mb-8'>{title}</h1>
			<Image
				src={imgSrc}
				alt={title}
				width='300'
				height='300'
				className='w-48 h-48 rounded-lg shadow-lg mb-4'
				priority
			/>
		</div>
	);
};

export default SingleDrinkPage;
