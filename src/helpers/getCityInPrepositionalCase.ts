

export const getCityInPrepositionalCase = (resolvedParams: { city: string }): { newCity: string; city: string } => {
  let { city } = resolvedParams;
	city = decodeURIComponent(city);
  let newCity = city;

  if (city.charAt(city.length - 1) === "а") {
    newCity = newCity.slice(0, -1) + "е";
  } else if (city.charAt(city.length - 1) === "ь") {
    newCity = newCity.slice(0, -1) + "и";
  } else if (city.toLowerCase() === "нижний новгород") {
    newCity = "Нижнем Новгороде";
    city = "Нижний Новгород";
  } else {
    newCity = newCity + "е";
  }

  return { newCity, city };
}