import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

import { updateOrderToPaid } from "@/lib/actions/order.actions";

export async function POST(req: NextRequest) {
  // Build the webhook event
  let event: Stripe.Event;
  try {
    event = await Stripe.webhooks.constructEvent(
      await req.text(),
      req.headers.get("stripe-signature") as string,
      process.env.STRIPE_WEBHOOK_SECRET as string,
    );
  } catch (err) {
    console.error("❌ Stripe signature verification failed", err);
    return NextResponse.json({ error: "Webhook error" }, { status: 400 });
  }

  // Check for successful payment
  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;

    const orderId = session.metadata?.orderId;
    if (!orderId) {
      console.error("❌ Missing orderId in Stripe metadata");
      return NextResponse.json({ error: "Missing orderId" }, { status: 400 });
    }

    // Update order status
    await updateOrderToPaid({
      orderId: session.metadata!.orderId,
      paymentResult: {
        id: session.id,
        status: "COMPLETED",
        email_address: session.customer_details!.email!,
        pricePaid: (session.amount_total! / 100).toFixed(),
      },
    });

    return NextResponse.json({
      message: "updateOrderToPaid was successful",
    });
  }

  return NextResponse.json({
    message: "event is not charge.succeeded",
  });
}
