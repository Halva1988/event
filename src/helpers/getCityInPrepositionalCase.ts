export const getCityInPrepositionalCase = (resolvedParams: { city: string }): { newCity: string; city: string } => {
  enum CityInPrepositionalCase {
    "Санкт-Петербург" = "Санкт-Петербурге",
    "Москва" = "Москве",
    "Нижний Новгород" = "Нижнем Новгороде",
    "Новосибирск" = "Новосибирске",
    "Казань" = "Казани",
    "Екатеринбург" = "Екатеринбурге",
    "Ростов-на-Дону" = "Ростове-на-Дону",
    "Владивосток" = "Владивостоке",
    "Самара" = "Самаре",
    "Краснодар" = "Краснодаре",
    "Челябинск" = "Челябинске",
    "Воронеж" = "Воронеже",
    "Пермь" = "Перми",
    "Омск" = "Омске",
    "Тула" = "Туле"
  };

  let { city } = resolvedParams;
	city = decodeURIComponent(city);
  if (city === "ростов на дону") city = "Ростов-на-Дону";
  city = city.charAt(0).toUpperCase() + city.slice(1)
  
  const newCity: string | undefined = CityInPrepositionalCase[city as keyof typeof CityInPrepositionalCase];
  
  return { newCity, city };
}