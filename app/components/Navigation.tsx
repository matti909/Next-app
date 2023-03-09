import React from 'react';
import Link from 'next/link';

const links = [
	{
		label: 'Home',
		route: '/',
	},
	{
		label: 'About',
		route: '/about',
	},
];

export function Navigation() {
	return (
		<header className='flex justify-center p-4 m-2 mb-2 border-2 border-white border-solid rounded-sm'>
			<nav>
				<ul className='flex gap-32 '>
					{links.map(({label, route}) => (
						<li key={route}>
							<Link href={route}>{label}</Link>
						</li>
					))}
				</ul>
			</nav>
		</header>
	);
}
