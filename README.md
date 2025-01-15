# Printerz Custom stripe Invoice template tutorial

Built with :
- React 
- TailwindCSS
- Vite
- TypeScript
- shadcn UI
- v0.dev

### Want to modify it ?

1. Clone the repository and run the following commands :

```bash
npx degit https://github.com/printerz-app/printerz-example-templates/react-invoice-template
```

2. Install dependencies

```bash
pnpm install
## or
npm install
## or 
yarn install
```

3. Run the development server

```bash
pnpm dev
## or
npm run dev
## or 
yarn dev
```

4. Make your changes

You can test the print variable behavior by copy pasting the following code in the console of your browser :
```js
window.printerzRender( {
  invoiceNumber: "123456789",
  company: {
    name: "ACME Inc.",
    address: "123 Main St, Anytown, USA",
    email: "info@acme.com",
    phone: "555-123-4567"
  },
  client: {
    name: "John Doe",
    address: "123 Main St, Anytown, USA",
    email: "john@acme.com"
  },
  date: "2022-01-01",
  dueDate: "2022-01-31",
  items: [
    {
      description: "Product 1",
      quantity: 2,
      price: 100,
      total: 200
    },
    {
      description: "Product 2",
      quantity: 1,
      price: 50,
      total: 50
    }
  ],
  subtotal: 300,
  tax: 8,
  total: 388
})
```

5. Build the project

```bash
pnpm build
## or
npm run build
## or 
yarn build
```

6. Zip the dist folder and upload it to your printerz dashboard