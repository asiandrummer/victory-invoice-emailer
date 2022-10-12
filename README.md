# Victory Worship Invoice System Prototype

This is a demo of how we could automate contractors submitting their invoices to Victory church. I just got super bored and saw my wife struggling to open the laptop to do this, so here it is.
I wasn't gonna go create all the stack by myself so I used Vercel and Next.js for easy deployment. This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## How to Try

- Go to https://victory-invoice-emailer.vercel.app/
- Type in date and invoice number
  - CAUTION: make sure you type in some kind of valid date format (2022/09/10) as I'm not validating input yet.
- Click "Send"
- Wait for "TestURL" to pop up. It's a link - click it.
- Check out the attachment to see the auto-generated invoice.

## Next Steps?

I might go off and try implementing a bunch of features but honestly, we should move away from this manually-emailing model. I have some ideas to build a whole app/system on this.

But if I do end up building more features...

- Date picker
- Input validation
- Recipient typeahead/dropdown
- Name/Address/Phone #/email address that are cached to your browser
- better UI

## Bugs? Doesn't work?

I'll fix them just give me some time... if you know how to reach me, just reach out via private messages and I'll deal with it

## [DEV] Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
