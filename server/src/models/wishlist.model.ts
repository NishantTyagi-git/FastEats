import mongoose, { Schema, Types } from "mongoose";

export interface IWishlistItem {
    dishId: Types.ObjectId;
}

export interface IWishlist {
    userId: Types.ObjectId;
    items: IWishlistItem[];
}

const wishlistItemSchema = new Schema<IWishlistItem>(
    {
        dishId: {
            type: Schema.Types.ObjectId,
            ref: "Dish",
            required: true,
        },
    },
    {
        _id: false,
    }
);

const wishlistSchema = new Schema<IWishlist>(
    {
        userId: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true,
            unique: true,
        },

        items: {
            type: [wishlistItemSchema],
            default: [],
        },
    },
    {
        timestamps: true,
    }
);

const Wishlist =
    (mongoose.models.Wishlist as mongoose.Model<IWishlist>) ||
    mongoose.model<IWishlist>("Wishlist", wishlistSchema);

export default Wishlist;