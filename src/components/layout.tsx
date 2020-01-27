/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { ReactNode } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { cn } from '@bem-react/classname'

import Header from './header'
import './layout.scss'

interface ILayoutProps {
	children: ReactNode
}

const Layout = ({ children }: ILayoutProps) => {
	const layout = cn('Layout')
	const data = useStaticQuery(graphql`
		query SiteTitleQuery {
			site {
				siteMetadata {
					title
				}
			}
		}
	`)

	return (
		<>
			<Header siteTitle={data.site.siteMetadata.title} />
			<div className={layout()}>
				<main>{children}</main>
				<footer>
					© {new Date().getFullYear()}, Built with
					{` `}
					<a href="https://www.gatsbyjs.org">Gatsby</a>
				</footer>
			</div>
		</>
	)
}

export default Layout
