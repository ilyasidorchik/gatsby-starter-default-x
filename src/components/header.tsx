import { Link } from 'gatsby'
import React from 'react'

import './header.scss'

interface IHeaderProps {
	siteTitle?: string
}

const Header = ({ siteTitle = '' }: IHeaderProps) => (
	<header className="Header">
		<div
			style={{
				margin: `0 auto`,
				maxWidth: 960,
				padding: `1.45rem 1.0875rem`,
			}}
		>
			<h1 style={{ margin: 0 }}>
				<Link
					to="/"
					style={{
						color: `#fff`,
						textDecoration: `none`,
					}}
				>
					{siteTitle}
				</Link>
			</h1>
		</div>
	</header>
)

export default Header
