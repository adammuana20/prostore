import { Metadata } from "next";
import { notFound, redirect } from "next/navigation";

import { auth } from "@/auth";

import { getOrderById } from "@/lib/actions/order.actions";
import OrderDetailsTable from "./order-details-table";

import { ShippingAddress } from "@/types";

export const metadata: Metadata = {
  title: "Order Details",
};

const OrderDetailsPage = async (props: {
  params: Promise<{
    id: string;
  }>;
}) => {
  const { id } = await props.params;
  // const session = await auth();

  const order = await getOrderById(id);

  if (!order) notFound();

  // if(order.userId !== session?.user?.id && session?.user?.role !== 'admin') {
  //   return redirect('/unauthorized')
  // }

  return (
    <>
      <OrderDetailsTable
        order={{
          ...order,
          shippingAddress: order.shippingAddress as ShippingAddress,
        }}
        paypalClientId={process.env.PAYPAL_CLIENT_ID || "sb"}
      />
    </>
  );
};

export default OrderDetailsPage;
