# user-wallet

## How to setup development environment

1. Update your `node-version` to `>14.0.0`
2. Clone Project from GitLab `https://github.com/ravindrap52/user-wallet.git` and install its `node-modules`
3. Now start it with `npm run dev` and open `localhost:3000` in `Chrome`.
4. To build the project run ` npm run build`.

#  Technical and Design Decisions

Before I start working on the project i did some research on Next.js and Nuxt,js. Both are having same similarities like
- dynamic routing
- full stack capabilities
- we can develop SEO friendly applications.
- automatic code-splitting

We can use this link for the comparison between [next.js and nuxt.js](https://www.gatsbyjs.com/features/jamstack/gatsby-vs-nextjs-vs-nuxtjs), so the reason why i didn't choose nuxt is because of [this](https://medium.com/@OPTASY.com/are-there-any-strong-reasons-not-to-use-nutx-js-9b897e40d51b).
Next.js also have some disadvantages like
- Routing
- Build time

But it has more advantages like
- safety
- lazy loading
- Performance

I choose Next 13 as most of the things are stable according to their github, but we still can't use it in production  . The advantages of the Next 13 is server and client components as it  uses [React Server Components](https://github.com/reactjs/rfcs/blob/main/text/0188-server-components.md). Every component inside app directory is a server component and if we need client component then we need to specify ```use client``` on top of the file. I can explain in detail when we are having a call.

##  Challenges

Initially i faced so many challenges because this is the first time i'm working on block chain and the things associated with it. I overcome the challenges by reading Web3.js and Evmos API documentation and created test accounts to fetch the data by sending request to api's and understanding the response. 
Still there is a lot to learn but i gained some knowledge to finish the task. I hope i did good.

##  Some Know issues 

- After adding web3.js i'm getting one issue in node modules, i didn't get much time to look in to it deeper.
- I have hard coded the transaction hash to show the  transaction page view, i tried with the existing hash that i got from the accounts API, but it is always returning null, i don't know the exact reason, that's why i created one transaction in meta mask and i'm using that code to display the page.

## Things can be improved
- Adding a state management to save the currency option and use across the application.
- Better UX design, as i spent most of the time in understanding the concepts i couldn't concentrate much on UX.
- more unit tests.

