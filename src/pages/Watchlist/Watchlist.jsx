import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { BookmarkFilledIcon } from "@radix-ui/react-icons";

export const Watchlist = () => {

  const handleRemoveToWatchlist=(value)=>{
    console.log(value)
  }
  return (
    <div className="p-5 lg:p-20">
      <h1 className="font-bold text-3xl  pb-5">Walchlist</h1>
      <Table className="mt-5 border">
        <TableHeader>
          <TableRow>
            <TableHead className="py-5">Coin</TableHead>
            <TableHead>SYMBOL</TableHead>
            <TableHead>VOLUME</TableHead>
            <TableHead>MARKET CAP</TableHead>
            <TableHead>24H</TableHead>
            <TableHead className="text-right">PRICE</TableHead>
            <TableHead className="text-right text-red-600">REMOVE</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {[1, 1, 1, 1, 1, 1, 1].map((item, index) => (
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
              <TableCell className="text-right">
                <Button variant="ghost" onClick={()=>handleRemoveToWatchlist(item.id)} size="icon" className="h-10 w-10 ">
                  <BookmarkFilledIcon className="w-6 h-6"/>
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
