// export const Setting = {
//   PlacesCount: 312
// };

export const DATA = [
  {
    id: '6af6f711-c28d-4121-82cd-e0b462a27f00',
    title: 'Beautiful & luxurious studio at great location',
    type: 'apartment',
    price: 120,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.35514938496378,
        longitude: 4.673877537499948,
        zoom: 8
      }
    },
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8
    },
    isFavorite: false,
    isPremium: false,
    rating: 4,
    previewImage: 'https://static.tildacdn.com/tild3636-6662-4764-a337-656637316562/___.png'
  },
  {
    id: '5cd74f14-6509-4761-8dde-b959d43b0dff',
    title: 'Beautiful & luxurious studio at great location',
    type: 'hotel',
    price: 100,
    city: {
      name: 'Minsk',
      location: {
        latitude: 52.35514938496378,
        longitude: 4.673877537499948,
        zoom: 8
      }
    },
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8
    },
    isFavorite: false,
    isPremium: false,
    rating: 4,
    previewImage: 'https://7d9e88a8-f178-4098-bea5-48d960920605.selcdn.net/138baeb7-1dab-4a74-a1ae-96f477301f15/-/format/jpeg/-/resize/1300x/'
  },
  {
    id: '6af6f711-c28d-4121-82cd-e0b462a27f50',
    title: 'Luxurious room at great location',
    type: 'hotel',
    price: 150,
    city: {
      name: 'Paris',
      location: {
        latitude: 52.35514938496378,
        longitude: 4.673877537499948,
        zoom: 8
      }
    },
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8
    },
    isFavorite: true,
    isPremium: false,
    rating: 4,
    previewImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfsfFfpq7HUK_eb8d6kRihljVWdhE65XoODw&s'
  }
];


export enum AppRoute {
    Root = '/',
    Login = 'login',
    Favorites = 'favorites',
    Offer = 'offer/:id'
  }

export enum AuthorizationStatus {
    Auth = 'AUTH',
    NoAuth = 'NO_AUTH',
    Unknown = 'UNKNOWN',
  }
