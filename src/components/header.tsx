import React, { FC } from 'react'
import { Link } from 'gatsby'
import { cn } from '@bem-react/classname'

import './header.scss'

interface IHeaderProps {
	siteTitle?: string
}

const Header: FC<IHeaderProps> = ({ siteTitle = '' }) => {
	const header = cn('Header')

	return (
		<header className={header()}>
			<div className={header('Content')}>
				<h1 className={header('Title')}>
					<Link className={header('Link')} to="/">
						{siteTitle}
					</Link>
				</h1>
			</div>
		</header>
	)
}

export default Header
