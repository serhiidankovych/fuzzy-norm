export function calculateTNorms(membershipValues, parameters) {
  const numericMembershipValues = membershipValues.map(Number);
  const { alpha, gamma } = parameters;

  // T-norm calculations
  const product = numericMembershipValues.reduce((acc, val) => acc * val, 1);

  const gamakherProduct = numericMembershipValues.reduce(
    (acc, val) => (acc * val) / (acc + val - acc * val),
    1
  );

  const einsteinProduct = numericMembershipValues.reduce(
    (acc, val) => (acc * val) / (2 - (acc + val - acc * val)),
    1
  );

  const reinforcedProduct =
    Math.max(...numericMembershipValues) === 1
      ? Math.min(...numericMembershipValues)
      : 0;

  const boundedDifference = numericMembershipValues.reduce(
    (acc, val) => Math.max(0, acc + val - 1),
    0
  );

  const sum = numericMembershipValues.reduce((acc, val) => acc + val, 0);
  const meanArithmetical = sum / numericMembershipValues.length;

  const harmonicMean =
    numericMembershipValues.length /
    numericMembershipValues.reduce((acc, val) => acc + 1 / val, 0);

  const geometricMean = Math.pow(product, 1 / numericMembershipValues.length);

  const generalizedMean =
    numericMembershipValues.reduce(
      (acc, val) => acc + Math.pow(val, alpha),
      0
    ) /
    numericMembershipValues.length ** (1 / alpha);

  const gammaMin =
    gamma * Math.min(...numericMembershipValues) +
    (1 / numericMembershipValues.length) * (1 - gamma) * sum;

  return {
    Production: product,
    "Gamakher production": gamakherProduct,
    "Einstein production": einsteinProduct,
    "Reinforced production": reinforcedProduct,
    "Bounded difference": boundedDifference,
    "Arithmetic Mean": meanArithmetical,
    "Harmonic Mean": harmonicMean,
    "Geometric Mean": geometricMean,
    "Generalized Mean": generalizedMean,
    "Gamma Mean": gammaMin,
  };
}
