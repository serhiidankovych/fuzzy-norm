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

  const gammaMean =
    gamma * Math.min(...numericMembershipValues) +
    (1 / numericMembershipValues.length) * (1 - gamma) * sum;

  return {
    Production: product,
    Min: Math.min(...numericMembershipValues),
    "Gamakher production": gamakherProduct,
    "Einstein production": einsteinProduct,
    "Reinforced production": reinforcedProduct,
    "Bounded difference": boundedDifference,
    "Arithmetic Mean": meanArithmetical,
    "Harmonic Mean": harmonicMean,
    "Geometric Mean": geometricMean,
    "Generalized Mean": generalizedMean,
    "Gamma Mean": gammaMean,
  };
}

export function calculateSNorms(membershipValues, parameter) {
  const numericMembershipValues = membershipValues.map(Number);

  const algebraicSum = numericMembershipValues.reduce(
    (acc, val) => acc + val - acc * val,
    0
  );

  const gamakherSum = numericMembershipValues.reduce(
    (acc, val) => (acc + val - 2 * acc * val) / (1 - acc * val),
    0
  );
  const einsteinSum = numericMembershipValues.reduce(
    (acc, val) => (acc + val) / (1 + acc * val),
    0
  );
  const reinforcedSum =
    Math.min(...numericMembershipValues) === 0
      ? Math.max(...numericMembershipValues)
      : 1;

  const boundedSum = numericMembershipValues.reduce(
    (acc, val) => Math.min(1, acc + val),
    0
  );

  const gamakherUnion = numericMembershipValues.reduce(
    (acc, val) =>
      (acc + val + (parameter - 1) * (acc * val)) /
      (1 + parameter * (acc * val))
  );
  const yagerUnion = Math.min(
    1,
    numericMembershipValues.reduce(
      (acc, val) =>
        (Math.pow(acc, parameter) + Math.pow(val, parameter)) ** 1 / parameter
    )
  );

  const arithmeticSum = numericMembershipValues.reduce(
    (acc, val) => acc + val,
    0
  );

  return {
    Max: Math.max(...numericMembershipValues),
    "Algebraic sum": algebraicSum,
    "Gamakher sum": gamakherSum,
    "Einstein sum": einsteinSum,
    "Reinforced sum": reinforcedSum,
    "Bounded sum": boundedSum,
    "Gamakher Union": gamakherUnion,
    "Yager Union": yagerUnion,
    "Arithmetic Sum": arithmeticSum,
  };
}
