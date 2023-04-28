import Hero from './components/Hero';
import Skills from './components/Skills';
function App() {
	return (
		<main className='bg-neutral-900'>
			<section className='lg:h-4/5 flex-col items-center justify-center'>
				<Hero />
			</section>
			<section className='flex items-center justify-center'>
				<Skills />
			</section>
		</main>
	);
}

export default App;
