# Champions Festival - A PTCG Results Database by Jeremy Lim

### Description

Just a small project done by a UNSW Commerce/Computer Science student out of boredom.
It aims to collect data of Pokemon TCG results in the Australian and New Zealand
competitive circuit, in order to be used for analytical uses by other people.
There are plenty of extensible improvements, such as automated tournament collection,
decklist integration, player data, etc.
The front-end is built using JavaScript and React.js and the back-end is built
using Node.js.

### Prerequisites

Will need npm or yarn to start the application

### Running client

```
git clone https://github.com/hitokage13/champions-festival.git
cd champions-festival/client
yarn install
yarn start
```

Go on ```http://localhost:3000/``` for the front-end

There is currently no back-end implementation at the moment.
For any updates to the tournament or deck database, please run the scripts
provided to generate new player data.

```
cd client/src/scripts
node init_players.js
```

### Running server

```
git clone https://github.com/hitokage13/champions-festival.git
yarn install
node server.js
```

Go on ```http://localhost:5000/``` for the back-end

## Built With

* [React](https://reactjs.org/)
* [create-react-app](https://facebook.github.io/create-react-app/)
* [Node.js](https://nodejs.org/en/)

Thanks for all the support!
