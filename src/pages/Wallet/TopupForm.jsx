import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { DotFilledIcon } from "@radix-ui/react-icons";
import { useState } from "react";

export const TopupForm = () => {
  const [amount, setAmount] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("RAZORPAY");
  const handlePaymentMethodChange = (value) => {
    setPaymentMethod(value);
  };
  const handleChange = (e) => {
    setAmount(e.target.value);
  };

  const handleSubmit=()=>{
    console.log(amount,paymentMethod)
  }

  return (
    <div className="pt-10 space-y-5">
      <div>
        <h1 className="pb-1">Enter Amount</h1>
        <Input
          className="py-7 text-lg "
          onChange={handleChange}
          value={amount}
          placeholder="$99887"
        />
      </div>
      <div>
        <h1 className="pb-1">Select payment method</h1>
        <RadioGroup
          onValueChange={(value) => handlePaymentMethodChange(value)}
          className="flex "
          defaultValue="RAZORPAY"
        >
          <div className="flex items-center space-x-2 border p-3 px-5">
            <RadioGroupItem
              icon={DotFilledIcon}
              className="h-9 w-9"
              value="RAZORPAY"
              id="r1"
            />
            <Label htmlFor="r1">
              <div className="bg-white rounded-md px-5 py-2 w-32">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Razorpay_logo.svg/800px-Razorpay_logo.svg.png?20171127075036"
                  alt=""
                />
              </div>
            </Label>
          </div>

          <div className="flex items-center space-x-2 border p-3 px-5">
            <RadioGroupItem
              icon={DotFilledIcon}
              className="h-9 w-9"
              value="STRIPE"
              id="r2"
            />
            <Label htmlFor="r2">
              <div className="bg-white rounded-md px-5  w-32">
                <img 
                className="h-8"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Stripe_Logo%2C_revised_2016.svg/512px-Stripe_Logo%2C_revised_2016.svg.png?20210114172858"
                  alt=""
                />
              </div>
            </Label>
          </div>
        </RadioGroup>
      </div>
      <Button onClick={handleSubmit} className="w-full py-7">Submit</Button>
    </div>
  );
};
