import type { Component } from 'solid-js';
import Button from '@/components/Button'

const App: Component = () => {
	return (
		<div>
			<Button onClick={()=>{console.log("click")}}/>
		</div>
	);
};

export default App;
