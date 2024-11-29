import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const events = [
	{
		id: 1,
		name: "Открытый урок танцев",
		slug: "otkrytyy-urok-tantsev",
		city: "Санкт-Петербург",
		location: "Танцевальная школа 'Танцы SPB'",
		date: "2023-12-05T00:00:00+03:00",
		organizer: "Компания 'Dance Life Studio'",
		imageUrl:
			"https://todes-spb.ru/cache/images/1_1024x1024_205320afacca866598c2f5eea6bef3b1.jpg",
		description:
			"Приглашаем всех желающих на открытый урок танцев. Вы научитесь основным движениям популярных стилей: сальса, хип-хоп и классический вальс.",
	},{
		id: 1121,
		name: "Открытый урок танцев",
		slug: "otkrytyy-urok-tantsev6",
		city: "Санкт-Петербург",
		location: "Танцевальная школа 'Танцы SPB'",
		date: "2023-12-05T00:00:00+03:00",
		organizer: "Компания 'Dance Life Studio'",
		imageUrl:
			"https://todes-spb.ru/cache/images/1_1024x1024_205320afacca866598c2f5eea6bef3b1.jpg",
		description:
			"Приглашаем всех желающих на открытый урок танцев. Вы научитесь основным движениям популярных стилей: сальса, хип-хоп и классический вальс.",
	},
	{
		id: 121,
		name: "Открытый урок танцев",
		slug: "otkrytyy-urok-tantsev4",
		city: "Санкт-Петербург",
		location: "Танцевальная школа 'Танцы SPB'",
		date: "2023-12-05T00:00:00+03:00",
		organizer: "Компания 'Dance Life Studio'",
		imageUrl:
			"https://todes-spb.ru/cache/images/1_1024x1024_205320afacca866598c2f5eea6bef3b1.jpg",
		description:
			"Приглашаем всех желающих на открытый урок танцев. Вы научитесь основным движениям популярных стилей: сальса, хип-хоп и классический вальс.",
	},
	{
		id: 111,
		name: "Открытый урок танцев",
		slug: "otkrytyy-urok-tantsev3",
		city: "Санкт-Петербург",
		location: "Танцевальная школа 'Танцы SPB'",
		date: "2023-12-05T00:00:00+03:00",
		organizer: "Компания 'Dance Life Studio'",
		imageUrl:
			"https://todes-spb.ru/cache/images/1_1024x1024_205320afacca866598c2f5eea6bef3b1.jpg",
		description:
			"Приглашаем всех желающих на открытый урок танцев. Вы научитесь основным движениям популярных стилей: сальса, хип-хоп и классический вальс.",
	},
	{
		id: 11,
		name: "Открытый урок танцев",
		slug: "otkrytyy-urok-tantsev2",
		city: "Санкт-Петербург",
		location: "Танцевальная школа 'Танцы SPB'",
		date: "2023-12-05T00:00:00+03:00",
		organizer: "Компания 'Dance Life Studio'",
		imageUrl:
			"https://todes-spb.ru/cache/images/1_1024x1024_205320afacca866598c2f5eea6bef3b1.jpg",
		description:
			"Приглашаем всех желающих на открытый урок танцев. Вы научитесь основным движениям популярных стилей: сальса, хип-хоп и классический вальс.",
	},
	{
		id: 2,
		name: "Концерт классической музыки",
		slug: "koncert-klassicheskoy-muzyki",
		city: "Санкт-Петербург",
		location: "Большой концертный зал 'Октябрьский'",
		date: "2023-12-05T00:00:00+03:00",
		organizer: "Музыкальная ассоциация 'Классика в XXI веке'",
		imageUrl:
			"https://kuda-spb.ru/uploads/0d11da5cba895db5191ad4cb03b70558.jpg",
		description:
			"Уникальная возможность насладиться классической музыкой в исполнении мировых звезд.",
	},
	{
		id: 222,
		name: "Концерт классической музыки",
		slug: "koncert-klassicheskoy-muzyki354",
		city: "Санкт-Петербург",
		location: "Большой концертный зал 'Октябрьский'",
		date: "2023-12-05T00:00:00+03:00",
		organizer: "Музыкальная ассоциация 'Классика в XXI веке'",
		imageUrl:
			"https://kuda-spb.ru/uploads/0d11da5cba895db5191ad4cb03b70558.jpg",
		description:
			"Уникальная возможность насладиться классической музыкой в исполнении мировых звезд.",
	},
	{
		id: 3,
		name: "Фестиваль уличной еды",
		slug: "festival-ulichnoy-edy",
		city: "Москва",
		location: "Парк Горького",
		date: "2023-12-10T00:00:00+03:00",
		organizer: "Агентство 'ГастроШоу'",
		imageUrl:
			"https://kzngo.ru/images/events/b9951fbb289d904/135ca77c415336b_main.jpg",
		description:
			"Фестиваль уличной еды с участием лучших фудтраков Москвы. Посетителей ждут гастрономические мастер-классы.",
	},
	{
		id: 4,
		name: "Кинофестиваль",
		slug: "kinofestival",
		city: "Москва",
		location: "Кинотеатр 'Пионер'",
		date: "2023-12-15T00:00:00+03:00",
		organizer: "Компания 'КиноАрт'",
		imageUrl:
			"https://s.zagranitsa.com/images/guides/17936/original/28c0340352c9dc70bc4605ba557489fb.jpg",
		description:
			"Кинофестиваль с показом фильмов молодых режиссеров. В программе – эксклюзивные премьеры и встречи с авторами картин.",
	},
	{
		id: 5,
		name: "Художественная выставка",
		slug: "khudozhestvennaya-vystavka",
		city: "Нижний Новгород",
		location: "Галерея 'Арсенал'",
		date: "2023-12-20T00:00:00+03:00",
		organizer: "Центр современного искусства 'Арсенал'",
		imageUrl: "https://nn-grad.ru/images/places/big/SDIM2417_copy.jpg",
		description:
			"Выставка работ современных художников. Представлены живопись, скульптура и цифровое искусство.",
	},
	{
		id: 6,
		name: "Театральная постановка",
		slug: "teatralnaya-postanovka",
		city: "Нижний Новгород",
		location: "Драматический театр",
		date: "2023-12-25T00:00:00+03:00",
		organizer: "Театральное бюро 'Вдохновение'",
		imageUrl: "https://drama.nnov.ru/images/O_teatre/365_b_teatr4.jpg",
		description:
			"Постановка классического произведения в современном исполнении с живой музыкой.",
	},
	{
		id: 7,
		name: "Выставка роботов",
		slug: "vystavka-robotov",
		city: "Новосибирск",
		location: "Экспоцентр 'Новосибирск'",
		date: "2024-01-15T00:00:00+03:00",
		organizer: "Научный центр 'ТехноБудущее'",
		imageUrl:
			"https://a-a-ah-ru.s3.amazonaws.com/uploads/items/14350/351748/large_i10070985__2_.jpg",
		description:
			"Интерактивная выставка роботов и технологий. Посетители смогут пообщаться с роботами и попробовать управлять техникой.",
	},
	{
		id: 8,
		name: "Научная конференция",
		slug: "nauchnaya-konferenciya",
		city: "Новосибирск",
		location: "Новосибирский государственный университет",
		date: "2024-01-10T00:00:00+03:00",
		organizer: "Академический центр 'Наука Сибири'",
		imageUrl:
			"https://optim.tildacdn.com/tild3665-6538-4730-b166-633863623130/-/format/webp/Rectangle_1066.png",
		description:
			"Конференция по современным научным исследованиям и открытиям. Участников ждут доклады ученых и дискуссии.",
	},
	{
		id: 9,
		name: "Музыкальный фестиваль",
		slug: "muzykalnyy-festival",
		city: "Казань",
		location: "Стадион 'Казань Арена'",
		date: "2024-02-10T00:00:00+03:00",
		organizer: "Концертное агентство 'Звук Казани'",
		imageUrl: "https://i.archi.ru/i/650/117282.jpg",
		description:
			"Музыкальный фестиваль с участием популярных артистов. Программа включает концерты и встречи с музыкантами.",
	},
	{
		id: 10,
		name: "Фестиваль воздушных шаров",
		slug: "festival-vozdushnykh-sharov",
		city: "Казань",
		location: "Центральный парк",
		date: "2024-02-05T00:00:00+03:00",
		organizer: "Клуб воздухоплавания 'Небо России'",
		imageUrl:
			"https://kzn-tur.ru/wp-content/uploads/2018/03/%D0%9F%D0%B0%D1%80%D0%BA-%D0%A2%D1%8B%D1%81%D1%8F%D1%87%D0%B5%D0%BB%D0%B5%D1%82%D0%B8%D1%8F-%D1%81-%D0%B2%D1%8B%D1%81%D0%BE%D1%82%D1%8B-600.jpg",
		description:
			"Фестиваль с участием воздушных шаров. Зрителей ждут показательные полеты и вечернее шоу с подсветкой.",
	},
	{
		id: 11,
		name: "Фестиваль кофе",
		slug: "festival-kofe",
		city: "Екатеринбург",
		location: "Центр культуры 'Космос'",
		date: "2024-03-10T00:00:00+03:00",
		organizer: "Кофейное сообщество 'УралКофе'",
		imageUrl:
			"https://мы-с-урала.рф/upload/iblock/7fb/sjlit7hmy19b40cpzgpt8r3n2m6pr3sz.jpg",
		description:
			"Фестиваль для любителей кофе. Участников ждут дегустации, мастер-классы и конкурсы.",
	},
	{
		id: 12,
		name: "Зимний марафон",
		slug: "zimniy-marafon",
		city: "Екатеринбург",
		location: "Городской парк",
		date: "2024-03-15T00:00:00+03:00",
		organizer: "Спортивный клуб 'Движение Урала'",
		imageUrl:
			"https://cdn.tripster.ru/thumbs2/03f0c986-2016-11ed-b3bd-fa19996bfdf6.1220x600.jpeg",
		description:
			"Зимний марафон для профессионалов и любителей. Каждый участник получит памятные сувениры.",
	},
	{
		id: 13,
		name: "Литературный вечер",
		slug: "literaturnyy-vecher",
		city: "Ростов-на-Дону",
		location: "Дом литераторов",
		date: "2024-03-20T00:00:00+03:00",
		organizer: "Общество писателей Дона",
		imageUrl:
			"https://ro.today/uploads/posts/2022-08/v-rostove-nachalos-tehnicheskoe-obsledovanie-dom-aktera-na-ul-maksima-gorkogo-foto-1.jpg",
		description:
			"Творческий вечер с участием писателей и поэтов. В программе чтения, дискуссии и автограф-сессии.",
	},
	{
		id: 14,
		name: "Тренинг по саморазвитию",
		slug: "trening-samorazvitie",
		city: "Ростов-на-Дону",
		location: "Конференц-зал 'Дон-Плаза'",
		date: "2024-03-25T00:00:00+03:00",
		organizer: "Школа личностного роста 'Сила успеха'",
		imageUrl:
			"https://cdn.worldota.net/t/828x560/extranet/c1/f7/c1f7f36cf366294a2d1d0697383659ddd6f146f3.jpeg",
		description:
			"Практический тренинг для всех, кто хочет развить уверенность в себе и раскрыть потенциал.",
	},
	{
		id: 15,
		name: "Фестиваль современного искусства",
		slug: "festival-sovremennogo-iskusstva",
		city: "Владивосток",
		location: "Приморская картинная галерея",
		date: "2024-04-05T00:00:00+03:00",
		organizer: "Центр искусства 'Арт-Восток'",
		imageUrl:
			"https://visit-primorye.ru/upload/resize_cache/webp/upload/medialibrary/338/PAV_1919.webp",
		description:
			"Выставка инсталляций, перформансы и мастер-классы по современному искусству.",
	},
	{
		id: 16,
		name: "Марафон здоровья",
		slug: "marafon-zdorovya",
		city: "Владивосток",
		location: "Набережная Цесаревича",
		date: "2024-04-10T00:00:00+03:00",
		organizer: "Ассоциация активного отдыха 'Здоровый мир'",
		imageUrl:
			"https://vladivostok-city.com/uploads/i/bg/54918ad2c08d43.48792245.1164.jpg",
		description:
			"Марафон здоровья для всей семьи: пробежки, йога и лекции о здоровом образе жизни.",
	},
	{
		id: 17,
		name: "Ярмарка ремесел",
		slug: "yarmarka-remesel",
		city: "Самара",
		location: "Самарская площадь",
		date: "2024-05-15T00:00:00+03:00",
		organizer: "Культурный фонд 'Самарские традиции'",
		imageUrl:
			"https://samara.travel/upload/iblock/242/242fec8dae5dc37d4f1454a5c3781349.jpg",
		description:
			"На ярмарке ремесел представлены уникальные изделия ручной работы: керамика, текстиль, ювелирные украшения.",
	},
	{
		id: 18,
		name: "Концерт джазовой музыки",
		slug: "koncert-dzhazovoy-muzyki",
		city: "Самара",
		location: "Филармония Самары",
		date: "2024-05-20T00:00:00+03:00",
		organizer: "Музыкальное агентство 'Jazz Forever'",
		imageUrl:
			"https://filarm.ru/allimages/28fe0e13acd09395b1f62683881363d2-28261.jpg",
		description:
			"Выступление ведущих джазовых коллективов России и Европы в рамках ежегодного фестиваля.",
	},
	{
		id: 19,
		name: "Летний кинотеатр под открытым небом",
		slug: "letniy-kinoteatr",
		city: "Краснодар",
		location: "Чистяковская роща",
		date: "2024-06-10T00:00:00+03:00",
		organizer: "Киноклуб 'Кубань Фильм'",
		imageUrl:
			"https://optim.tildacdn.com/tild3735-3733-4033-b566-653339643061/-/format/webp/9f76422d2467e3c37e7f.jpg",
		description:
			"Показ культовых фильмов в живописном месте Краснодара под открытым небом.",
	},
	{
		id: 20,
		name: "Фестиваль национальной кухни",
		slug: "festival-natsionalnoy-kukhni",
		city: "Краснодар",
		location: "Театральная площадь",
		date: "2024-06-15T00:00:00+03:00",
		organizer: "Центр этнокультуры 'Кубанский вкус'",
		imageUrl:
			"https://kr123.ru/wp-content/uploads/2022/07/Teatralnaya-ploshad-1.jpeg",
		description:
			"Фестиваль с участием местных и приглашенных шеф-поваров. Посетителей ждут дегустации блюд разных народов.",
	},
	{
		id: 21,
		name: "Фестиваль огня и света",
		slug: "festival-ognya-i-sveta",
		city: "Челябинск",
		location: "Парк Гагарина",
		date: "2024-07-05T00:00:00+03:00",
		organizer: "Пиротехническое шоу 'Уральский свет'",
		imageUrl:
			"https://chel.dk.ru/system/images/news/000/956/432_x_large_new_webp_origin_copyright.webp",
		description:
			"Великолепное шоу огня и света, включающее фейерверки, лазерные инсталляции и танцы с огнем.",
	},
	{
		id: 22,
		name: "Театральный фестиваль",
		slug: "teatralnyy-festival",
		city: "Челябинск",
		location: "Челябинский театр драмы",
		date: "2024-07-10T00:00:00+03:00",
		organizer: "Областной театральный союз",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/%D0%94%D1%80%D0%B0%D0%BC_%D1%82%D0%B5%D0%B0%D1%82%D1%80.jpg/1280px-%D0%94%D1%80%D0%B0%D0%BC_%D1%82%D0%B5%D0%B0%D1%82%D1%80.jpg",
		description:
			"Фестиваль с участием театральных коллективов со всей страны. Спектакли, мастер-классы и обсуждения.",
	},
	{
		id: 23,
		name: "Фестиваль уличных музыкантов",
		slug: "festival-ulichnykh-muzykantov",
		city: "Воронеж",
		location: "Площадь Ленина",
		date: "2024-08-10T00:00:00+03:00",
		organizer: "Ассоциация 'Город музыки'",
		imageUrl: "https://img.tourister.ru/files/2/9/6/9/0/0/4/5/original.jpg",
		description:
			"Уличные музыканты со всей России собираются, чтобы исполнить свои лучшие произведения.",
	},
	{
		id: 24,
		name: "Летний карнавал",
		slug: "letniy-karnaval",
		city: "Воронеж",
		location: "Центральный проспект",
		date: "2024-08-15T00:00:00+03:00",
		organizer: "Клуб праздничных событий 'Радость'",
		imageUrl:
			"https://gkgz.ru/wp-content/uploads/2021/05/shkola-Voronezh-1-770x540.jpg",
		description:
			"Летний карнавал с яркими костюмами, танцами и шествиями по центральным улицам города.",
	},
	{
		id: 25,
		name: "Выставка ретроавтомобилей",
		slug: "vystavka-retroavtomobiley",
		city: "Пермь",
		location: "Площадь перед ТРЦ 'Планета'",
		date: "2024-09-05T00:00:00+03:00",
		organizer: "Автоклуб 'Ретро Пермь'",
		imageUrl:
			"https://n1s1.hsmedia.ru/b5/22/63/b52263829c4774a07cbf562b400653a8/1364x768_1_d99eb18eabf54415216682f13d1c17f3@1364x768_0xj90HAXCN_4267730821634809618.jpg.webp",
		description:
			"Выставка ретроавтомобилей со всего региона. Демонстрация редких моделей и эксклюзивных экземпляров.",
	},
	{
		id: 26,
		name: "Фестиваль воздухоплавания",
		slug: "festival-vozdushnogo-sharov",
		city: "Пермь",
		location: "Парк культуры и отдыха",
		date: "2024-09-10T00:00:00+03:00",
		organizer: "Ассоциация 'Небо Урала'",
		imageUrl:
			"https://www.culture.ru/_next/image?url=https%3A%2F%2Fcdn.culture.ru%2Fimages%2Fb63f8cd6-f863-55f2-a710-a43093f96bd8%2Fw_884%2Ch_442%2Cc_fill%2Cg_center%2F42c070d987adea7bcf7b23ac4af719ac-jpeg.webp&w=1080&q=75",
		description:
			"Полеты на воздушных шарах, ночное шоу и множество развлекательных мероприятий.",
	},
	{
		id: 27,
		name: "Фестиваль народного танца",
		slug: "festival-narodnogo-tantsa",
		city: "Омск",
		location: "Театральный сквер",
		date: "2024-10-05T00:00:00+03:00",
		organizer: "Культурный центр 'Традиция'",
		imageUrl:
			"https://www.culture.ru/_next/image?url=https%3A%2F%2Fcdn.culture.ru%2Fimages%2F747b7364-0bff-520a-bff9-8b98dc856ea4%2Fw_884%2Ch_442%2Cc_fill%2Cg_center%2F0afa3890ecc68c39b383d8a34c8f06bd-jpg.webp&w=1080&q=75",
		description:
			"Праздник народного танца с выступлениями ансамблей из разных уголков страны.",
	},
	{
		id: 28,
		name: "Осенний фотоконкурс",
		slug: "osenniy-fotokonkurs",
		city: "Омск",
		location: "Дом творчества 'Омская палитра'",
		date: "2024-10-10T00:00:00+03:00",
		organizer: "Фотографический клуб 'Свет'",
		imageUrl:
			"https://www.pulslive.com/upload/iblock/333/%D0%B4%D0%B2%D0%BE%D1%80%D0%B5%D1%86.jpg",
		description:
			"Выставка лучших работ фотоконкурса на тему осени. Возможность посетить мастер-классы по фотографии.",
	},
	{
		id: 29,
		name: "Фестиваль авторской песни",
		slug: "festival-avtorskoy-pesni",
		city: "Тула",
		location: "Парк Патриот",
		date: "2024-11-05T00:00:00+03:00",
		organizer: "Клуб авторской песни 'Струны души'",
		imageUrl: "https://tulskieparki.ru/assets/images/patriot/7(2).jpg",
		description:
			"Концерты и творческие встречи с известными бардами в уютной атмосфере.",
	},
	{
		id: 30,
		name: "Выставка оружия",
		slug: "vystavka-oruzhiya",
		city: "Тула",
		location: "Музей оружия",
		date: "2024-11-10T00:00:00+03:00",
		organizer: "Музейный комплекс Тулы",
		imageUrl: "https://www.museum-arms.ru/img/5_a.jpg",
		description:
			"Выставка исторического и современного оружия с экскурсиями и интерактивными зонами.",
	},
];

async function main() {

	for (const event of events) {
		const result = await prisma.tEvent.upsert({
      where: { id: event.id },
      update: {},
      create: event,
    });
    console.log(`Created event with id: ${result.id}`);
	};
}


main()
	.then(async () => {
		await prisma.$disconnect();
	})
	.catch(async (e) => {
		console.error(e);
		await prisma.$disconnect();
		process.exit(1);
	});