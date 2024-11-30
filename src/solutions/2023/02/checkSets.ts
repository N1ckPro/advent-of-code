enum MaxCubes {
	red = 12,
	green,
	blue,
}

export const checkSets = (sets: string[]) =>
	sets.every((set) => {
		const cubes = set.split(', ');
		return cubes.every((cube) => {
			const data = cube.split(' ');
			return MaxCubes[data[1] as keyof typeof MaxCubes] >= Number(data[0]);
		});
	});
