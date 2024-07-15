import { Avatar, AvatarImage } from "@/components/ui/avatar";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const Portfolio = () => {
  return (
    <div className="p-5 lg:p-20">
      <h1 className="font-bold text-3xl  pb-5">Portfolio</h1>
      <Table className="mt-5">
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">ASSET</TableHead>
            <TableHead>PRICE</TableHead>
            <TableHead>UNIT</TableHead>
            <TableHead>CHANGE</TableHead>
            <TableHead>CHANGE%</TableHead>
            <TableHead className="text-right">VALUE</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {[1, 1, 1, 1,  1].map((item, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium flex items-center gap-2">
                <Avatar className="-z-50">
                  <AvatarImage src="https://assets.coingecko.com/coins/images/1/standard/bitcoin.png?1696501400" />
                </Avatar>
                <span>Bitcoin</span>
              </TableCell>
              <TableCell>BTC</TableCell>
              <TableCell>41,931,278,557</TableCell>
              <TableCell>$1,146,773,788,772</TableCell>
              <TableCell className="text-green-500">+1.23%</TableCell>
              <TableCell className="text-right">$54,000</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Portfolio;
