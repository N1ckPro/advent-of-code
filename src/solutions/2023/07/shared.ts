enum HandType {
	HighCard,
	OnePair,
	TwoPair,
	ThreeKind,
	FullHouse,
	FourKind,
	FiveKind,
}

export const getHandType = (hand: [string, number][]) => {
	switch (hand[0][1]) {
		case 5:
			return HandType.FiveKind;
		case 4:
			return HandType.FourKind;
		case 3:
			return hand[1][1] === 2 ? HandType.FullHouse : HandType.ThreeKind;
		case 2:
			return hand[1][1] === 2 ? HandType.TwoPair : HandType.OnePair;
		default:
			return HandType.HighCard;
	}
};
