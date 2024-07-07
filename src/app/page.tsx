"use client"
import { Card, CardHeader, CardBody } from "@nextui-org/card";
import { Table, TableHeader, TableColumn, TableBody } from "@nextui-org/react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, TableRow, TableCell, Input } from "@nextui-org/react";


export default function Home() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div className="flex flex-col justify-center items-center h-[65vh] w-full">
      <Card >
        <CardHeader>
          <h2 className="font-bold text-xl">

            Your supplies
          </h2>
        </CardHeader>
        <CardBody>
          <Table removeWrapper fullWidth className="w-[40vw]" aria-label="Example static collection table">
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
                    <Button onPress={onOpen} className="font-semibold" variant="solid">
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
                    <p className="font-light">$4000</p>
                  </div>
                </TableCell>
                <TableCell>32%</TableCell>
                <TableCell >
                  <div className="w-full justify-end items-center flex flex-row gap-2">
                    <Button onPress={onOpen} className="font-semibold" variant="solid">
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
                    <p className="font-light">$4000</p>
                  </div>
                </TableCell>
                <TableCell>32%</TableCell>
                <TableCell >
                  <div className="w-full justify-end items-center flex flex-row gap-2">
                    <Button onPress={onOpen} className="font-semibold" variant="solid">
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
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-black">Supply ETH</ModalHeader>
              <ModalBody>
                <Input
                  autoFocus

                  label="Amount"
                  placeholder="0.00"
                  variant="bordered"
                />

                <p>Transaction Overview</p>
                <div className="border-[#e4e4e7] border-[2px] rounded-[12px]">
                  <div className="flex flex-row justify-between items-center p-2">
                    <p>Supply APY</p>
                    <p>30%</p>
                  </div>
                  <div className="flex flex-row justify-between items-center p-2">
                    <p>Collateralization</p>
                    <p>Enabled</p>
                  </div>
               
                </div>
              </ModalBody>
              <ModalFooter>
                <Button fullWidth color="primary" onPress={onClose}>
                  Supply
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
