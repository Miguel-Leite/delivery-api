
<h1 align="center">Delivery</h1>

<span align="center">

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white)
![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)

</span>


<h4 align="center"> 
	🚧  Delivery 🚀 Under construction...  🚧
</h4> 

<hr />

<p align="center">
  <a href="#dart-about">About</a> &#xa0; | &#xa0; 
  <a href="#sparkles-features">Features</a> &#xa0; | &#xa0;
  <a href="#rocket-technologies">Technologies</a> &#xa0; | &#xa0;
  <a href="#white_check_mark-requirements">Requirements</a> &#xa0; | &#xa0;
  <a href="#checkered_flag-starting">Starting</a> &#xa0; | &#xa0;
  <a href="#memo-license">License</a> &#xa0; | &#xa0;
  <a href="https://github.com/Miguel-Leite" target="_blank">Author</a>
</p>

<br>

## :dart: About ##

Delivery is a delivery system, where the courier must register in the system to deliver to the customer at the time the customer is registered in the system. The delivery person and the customer must be registered in the system so that the delivery person can make the delivery and the customer can receive the delivery.

## :sparkles: Features ##

- [x] Create a delivery
- [x] Create a deliveryman
- [x] Create a client
- [x] Update data delivery
- [x] Deliveryman authentication with JWT
- [x] Client Authentication with JWT
- [x] Validation on router for create a delivery
- [x] Validation on router for find all available delivery
- [ ] Find delivery using deliveryman token
- [ ] Find delivery of deliveryman
- [ ] Delivery update with delivery date

## :rocket: Technologies ##

The following tools were used in this project:

- [Node.js](https://nodejs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Express](https://expressjs.com/)
- [JWT](https://jwt.io/)
- [Prisma](https://www.typescriptlang.org/)
- [PostgreSQL](https://www.postgresql.org/)

## :white_check_mark: Requirements ##

Before starting :checkered_flag:, you need to have [Git](https://git-scm.com), [Node](https://nodejs.org/en/) and [PostgreSQL](https://www.postgresql.org/) installed.

<b>Note:</b> You can change the database driver from postgresql to sqlite if you don't have postgresql installed on your PC, don't have problem this.

## :checkered_flag: Starting ##

```bash
# Clone this project
$ git clone https://github.com/Miguel-Leite/delivery

# Access
$ cd delivery

# Install dependencies
$ yarn

# Run the migrations
$ yarn prisma migrate dev

# Run the project
$ yarn dev

# The server will initialize in the <http://localhost:3000>
```

## :memo: License ##

This project is under license from MIT. For more details, see the [LICENSE](LICENSE.md) file.


Made with :heart: by <a href="https://github.com/Miguel-Leite" target="_blank">Miguel Leite</a>

