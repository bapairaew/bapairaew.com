<script>
	const links = [
		{
			name: 'GitHub',
			href: 'https://github.com/bapairaew'
		},
		{
			name: 'LinkedIn',
			href: 'https://www.linkedin.com/in/ntechaval'
		},
		{
			name: 'Email',
			href: 'mailto:iam@bapairaew.com'
		}
	];
</script>

<section class="container relative mx-auto px-2 py-32">
	<div class="text-center">
		<h1 class="font-black text-7xl lg:text-8xl">Dom.</h1>
		<h2 class="text-2xl py-6">Software Engineer</h2>
		<ul class="links flex justify-center gap-4">
			{#each links as link (link.href)}
				<li>
					<a href={link.href} target="_blank" rel="noopener noreferrer">
						{link.name}
					</a>
				</li>
			{/each}
		</ul>
	</div>
	<div class="gradient opacity-50 -z-10 absolute top-0 left-0 w-full h-full"></div>
</section>

<section class="container mx-auto px-4 pb-8 prose text-justify lg:prose-md dark:prose-invert">
	<p>
		👋 This is Dom, a software engineer who’s been piecing together the tech puzzle for a good while
		now. I like to think of myself as someone who connects the dots and turns ideas into reality.
	</p>
	<p>
		But I’m not just about coding. I’m a problem solver at heart, and I love figuring things out,
		whether it’s tech-related or not. When I’m not working, I’m probably out exploring new places,
		trying different foods, and collecting stories from the people I meet.
	</p>
</section>

<style>
	.gradient {
		background-image: conic-gradient(
			from 230.29deg at 51.63% 52.16%,
			theme('colors.green.500') 0deg,
			theme('colors.blue.500') 60deg,
			theme('colors.pink.500') 120deg,
			theme('colors.red.500') 180deg,
			theme('colors.orange.500') 240deg,
			theme('colors.purple.500') 300deg
		);
		filter: blur(100px);
		animation: glow 1s linear forwards;
		transform: translateZ(0); /* Fix background does not show up properly in Safari */
	}

	@keyframes glow {
		from {
			opacity: theme('opacity.0');
		}
		to {
			opacity: theme('opacity.50');
		}
	}
</style>
