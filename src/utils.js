export const flattenObject = nestedObject => {
	let output = {};

	Object.keys(nestedObject).forEach(componentKey => {
		output = { ...output, ...nestedObject[componentKey] };
	});

	return output;
};
