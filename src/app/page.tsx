"use client"
import { Card, CardHeader, CardBody } from "@nextui-org/card";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Button } from "@nextui-org/react";


export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center h-[65vh] w-full">
      <Card >
        <CardHeader>
          <h2 className="font-bold text-xl">

          Your supplies
          </h2>
        </CardHeader>
        <CardBody>
          <Table  removeWrapper  fullWidth  className="w-[40vw]" aria-label="Example static collection table">
            <TableHeader  >
              <TableColumn>Asset</TableColumn>
              <TableColumn>Balance</TableColumn>
              <TableColumn>APY</TableColumn>
              <TableColumn align="end" >Actions</TableColumn>

            </TableHeader>
            <TableBody >
              <TableRow key="1">
                <TableCell>ETH</TableCell>
                <TableCell>
                  <div>
                    <p className="font-bold text-lg">1.000000</p>
                    <p className="font-light">$4000</p>
                  </div>
                </TableCell>
                <TableCell>32%</TableCell>
                <TableCell >
                  <div className="w-full justify-end items-center flex flex-row gap-2">
                  <Button className="font-semibold" variant="solid">
                      Supply
                    </Button>
                    <Button className="font-semibold" variant="flat">
                      Withdraw
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
              
              <TableRow key="2">
                <TableCell>WBTC</TableCell>
                <TableCell>
                  <div>
                    <p className="font-bold text-lg">1.000000</p>
                    <p className="font-light">$60000</p>
                  </div>
                </TableCell>
                <TableCell>32%</TableCell>
                <TableCell >
                  <div className="w-full justify-end items-center flex flex-row gap-2">
                    <Button className="font-semibold" variant="solid">
                      Supply
                    </Button>
                    <Button className="font-semibold" variant="flat">
                      Withdraw
                    </Button>
                  </div>
                </TableCell>
              </TableRow>

              <TableRow key="3">
                <TableCell>DAI</TableCell>
                <TableCell>
                  <div>
                    <p className="font-bold text-lg">1.000000</p>
                    <p className="font-light">$400</p>
                  </div>
                </TableCell>
                <TableCell>32%</TableCell>
                <TableCell >
                  <div className="w-full justify-end items-center flex flex-row gap-2">
                  <Button className="font-semibold" variant="solid">
                      Supply
                    </Button>
                    <Button className="font-semibold" variant="flat">
                      Withdraw
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
             
            </TableBody>
          </Table>
        </CardBody>
      </Card>
    </div>
  );
}
