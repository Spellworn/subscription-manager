import { subscriptionsAdapter } from "../../app/adapters.ts";
import { createSelector, createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store.ts";
import type { SubscriptionId } from "./Subscription.ts";

const initialState = subscriptionsAdapter.getInitialState();

export const subscriptionsSlice = createSlice({
  name: "subscriptions",
  initialState,
  reducers: {
    subscriptionAddedOrEdited: subscriptionsAdapter.upsertOne,
    subscriptionDeleted: subscriptionsAdapter.removeOne,
    subscriptionEdited: subscriptionsAdapter.updateOne,
  },
});

const subscriptionsSelector = subscriptionsAdapter.getSelectors<RootState>(
  (state) => state.subscriptions,
);

export const selectSubscriptionById = createSelector(
  [
    subscriptionsSelector.selectEntities,
    (_, id: SubscriptionId | undefined) => id,
  ],
  (subscription, id) => {
    if (!id) {
      return undefined;
    }

    return subscription[id];
  },
);

export const selectSubscriptionsIdsAndSize = createSelector(
  [subscriptionsSelector.selectAll],
  (subscriptions) => {
    return subscriptions.map((subscription) => ({
      id: subscription.id,
      size: subscription.price,
    }));
  },
);

export const selectCostOfAllSubscription = createSelector(
  [subscriptionsSelector.selectAll],
  (subscriptions) => {
    let subscriptionPrice = 0;
    for (let i = 0; i < subscriptions.length; i++) {
      subscriptionPrice += subscriptions[i].price;
    }

    return subscriptionPrice;
  },
);

export const {
  subscriptionAddedOrEdited,
  subscriptionDeleted,
  subscriptionEdited,
} = subscriptionsSlice.actions;
