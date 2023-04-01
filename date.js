exports.getDate = function () {
  const today = new Date();

  const options = {
    weekday: "long",
    day: "numeric",
    mounth: "long",
  };

  return today.toLocaleDateString("en-US", options);
};
