import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { onRender } from "@printerz-app/template-sdk"
import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "./components/ui/card"
import { Separator } from "./components/ui/separator"

type Invoice = {
  invoiceNumber: string
  company: {
    name: string
    address: string
    email: string
    phone: string
  }
  client: {
    name: string
    address: string
    email: string
  },
  date: string
  dueDate: string
  items: {
    description: string
    quantity: number
    price: number
    total: number
  }[],
  subtotal: number
  tax: number
  total: number
}

function App() {
  const [invoice, setInvoice] = useState<Partial<Invoice>>({})

  const { register, unregister } = onRender<Invoice>((printVariables) => {
    setInvoice(printVariables)
  });

  useEffect(() => {
    register();

    return () => {
      unregister();
    };
  }, [register, unregister]);

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <Card className="max-w-4xl mx-auto bg-white shadow-lg">
        <CardHeader className="space-y-1 pb-8 border-b">
          <div className="flex justify-between items-start">
            <div>
              <CardTitle className="text-3xl font-bold text-gray-900">Invoice</CardTitle>
              <p className="text-sm text-gray-500">#{invoice.invoiceNumber}</p>
            </div>
            <div className="text-right">
              <h2 className="text-2xl font-semibold text-gray-900">{invoice.company?.name}</h2>
              <p className="text-sm text-gray-500">{invoice.company?.address}</p>
              <p className="text-sm text-gray-500">{invoice.company?.email}</p>
              <p className="text-sm text-gray-500">{invoice.company?.phone}</p>
            </div>
          </div>
        </CardHeader>
        <CardContent className="pt-8 space-y-6">
          <div className="flex justify-between">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Bill To:</h3>
              <p className="text-gray-700">{invoice.client?.name}</p>
              <p className="text-gray-500">{invoice.client?.address}</p>
              <p className="text-gray-500">{invoice.client?.email}</p>
            </div>
            <div className="text-right">
              <p className="text-gray-700"><span className="font-semibold">Invoice Date:</span> {invoice.date}</p>
              <p className="text-gray-700"><span className="font-semibold">Due Date:</span> {invoice.dueDate}</p>
            </div>
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Description</TableHead>
                <TableHead className="text-right">Qty</TableHead>
                <TableHead className="text-right">Price</TableHead>
                <TableHead className="text-right">Total</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {invoice.items?.map((item, index) => (
                <TableRow key={index}>
                  <TableCell>{item.description}</TableCell>
                  <TableCell className="text-right">{item.quantity}</TableCell>
                  <TableCell className="text-right">${item.price.toFixed(2)}</TableCell>
                  <TableCell className="text-right">${item.total.toFixed(2)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <div className="flex justify-end">
            <div className="w-1/2 space-y-2">
              <div className="flex justify-between">
                <span className="font-semibold">Subtotal:</span>
                <span>${invoice.subtotal?.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold">Tax (8%):</span>
                <span>${invoice.tax?.toFixed(2)}</span>
              </div>
              <Separator />
              <div className="flex justify-between text-lg font-bold">
                <span>Total:</span>
                <span>${invoice.total?.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </CardContent>
        <div className="bg-gray-50 rounded-b-lg p-6">
          <p className="text-sm text-gray-500">Thank you for your business!</p>
        </div>
      </Card>
    </div>
  )
}

export default App
