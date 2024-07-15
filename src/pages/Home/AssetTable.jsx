import { Avatar, AvatarImage } from "@/components/ui/avatar";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const AssetTable = () => {
  return (
    <Table className="mt-5">
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Coin</TableHead>
          <TableHead>SYMBOL</TableHead>
          <TableHead>VOLUME</TableHead>
          <TableHead>MARKET CAP</TableHead>
          <TableHead>24H</TableHead>
          <TableHead className="text-right">PRICE</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {[1,1,1,1,1,1,1,1,1].map((item, index) => <TableRow key={index}>
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
        </TableRow>)}
        
      </TableBody>
    </Table>
  );
};

export default AssetTable;
