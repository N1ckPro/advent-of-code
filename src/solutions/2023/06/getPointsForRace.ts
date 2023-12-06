export const getPointsForRace = (time: number, distance: number) => {
	const first = time / 2 - Math.sqrt((time / 2) ** 2 - distance);
	const second = time / 2 + Math.sqrt((time / 2) ** 2 - distance);
	return (second % 1 === 0 ? second - 1 : Math.floor(second)) - Math.floor(first);
};
