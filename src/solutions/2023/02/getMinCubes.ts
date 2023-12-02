export const getMinCubes = (sets: string[]) => {
	let red = 0;
	let green = 0;
	let blue = 0;

	for (const set of sets) {
		const cubes = set.split(', ');
		for (const cube of cubes) {
			const data = cube.split(' ');

			const cubes = Number(data[0]);
			switch (data[1]) {
				case 'red':
					if (cubes > red) red = cubes;
					break;
				case 'green':
					if (cubes > green) green = cubes;
					break;
				case 'blue':
					if (cubes > blue) blue = cubes;
					break;
			}
		}
	}

	return red * green * blue;
};
