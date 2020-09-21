import React from 'react'
import styled from 'styled-components'
import { FormattedMessage } from 'react-intl'
import { Layout, Container } from '../components/common'
import SEO from '../components/common/SEO'
import Header from '../components/theme/Header'

const NotFoundPage = () => (
	<Layout>
		<React.Fragment>
			<SEO title="not_found" />
			<Header />
			<NotFound as={Container}>
				<h2>
					<FormattedMessage id="not_found" />
				</h2>
			</NotFound>
		</React.Fragment>
	</Layout>
)

const NotFound = styled.div`
	padding: 6rem 0;
`

export default NotFoundPage
