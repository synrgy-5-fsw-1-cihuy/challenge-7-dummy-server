const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const populateData = (cars) => {
  return cars.map((car) => {
    const isPositive = getRandomInt(0, 1) === 1;
    const timeAt = new Date();
    const mutator = getRandomInt(1000000, 100000000);
    const availableAt = new Date(
      timeAt.getTime() + (isPositive ? mutator : -1 * mutator)
    );
    const newImage =
      "https://raw.githubusercontent.com/fnurhidayat/probable-garbanzo/main/public/" +
      car.image;
    return {
      ...car,
      image: newImage,
      availableAt,
    };
  });
};

const multiFilterCars = () => {};

module.exports = {
  populateData,
  multiFilterCars,
};
