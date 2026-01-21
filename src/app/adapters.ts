import { createEntityAdapter } from "@reduxjs/toolkit";
import type {
  Subscription,
  SubscriptionId,
} from "../features/subscriptions/Subscription.ts";

export const subscriptionsAdapter = createEntityAdapter<
  Subscription,
  SubscriptionId
>({
  selectId: (subscription: Subscription) => subscription.id,
  sortComparer: (a, b) => b.price - a.price,
});
