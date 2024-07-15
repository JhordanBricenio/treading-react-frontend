import { Avatar, AvatarImage } from "@/components/ui/avatar";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
const Activity = () => {
  return (
    <div className="p-5 lg:p-20">
      <h1 className="font-bold text-3xl  pb-5">Activity</h1>
      <Table className="mt-5 border">
        <TableHeader>
          <TableRow>
            <TableHead className="py-5">Date & Time</TableHead>
            <TableHead>Treading Pair</TableHead>
            <TableHead>Buy Price</TableHead>
            <TableHead>Selling Price</TableHead>
            <TableHead>Order Type</TableHead>
            <TableHead className="text-right">Profite/Loss</TableHead>
            <TableHead className="text-right">Value</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {[1, 1, 1, 1, 1, 1, 1].map((item, index) => (
            <TableRow key={index}>
              <TableCell><p>2024/05/31</p><p className="text-gray-400">12:39:32</p></TableCell>
              <TableCell className="font-medium flex items-center gap-2">
                <Avatar className="-z-50">
                  <AvatarImage src="https://assets.coingecko.com/coins/images/1/standard/bitcoin.png?1696501400" />
                </Avatar>
                <span>Bitcoin</span>
              </TableCell>
              <TableCell>$278557</TableCell>
              <TableCell>$1,146,773,788,772</TableCell>
              <TableCell className="text-red-700">-0.02000089</TableCell>
              <TableCell className="text-right">$54,000</TableCell>
              <TableCell className="text-right text-green-500">7362</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Activity;
