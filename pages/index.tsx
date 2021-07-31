import React, { VFC } from 'react';
import { Button } from '@material-ui/core';
import { Layout } from '../components/Layout';

const Home: VFC = () => {
	return (
		<Layout title="Home">
			<Button variant="contained">Default</Button>
			<Button variant="contained" color="primary">
				Primary
			</Button>
			<Button variant="contained" color="secondary">
				Secondary
			</Button>
		</Layout>
	)
}

export default Home
