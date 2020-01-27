import { Link } from 'gatsby'
import React from 'react'

import './header.scss'

interface IHeaderProps {
	siteTitle?: string
}

const Header = ({ siteTitle = '' }: IHeaderProps) => (
	<header className="Header">
		<div className="Header-Content">
			<h1 className="Header-Title">
				<Link className="Header-Link" to="/">
					{siteTitle}
				</Link>
			</h1>
		</div>
	</header>
)

export default Header
