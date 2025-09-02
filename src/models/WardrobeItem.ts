import { Schema, model, models } from 'mongoose';

export interface IWardrobeItem {
  user: string; // ref to User
  name: string;
  category: 'top' | 'bottom' | 'outerwear' | 'footwear' | 'accessory' | 'other';
  color?: string;
  size?: string;
  brand?: string;
  season?: 'spring' | 'summer' | 'autumn' | 'winter' | 'all';
  imageUrl?: string;
  notes?: string;
  createdAt: Date;
  updatedAt: Date;
}

const WardrobeItemSchema = new Schema<IWardrobeItem>({
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true, index: true },
  name: { type: String, required: true, trim: true },
  category: { type: String, enum: ['top','bottom','outerwear','footwear','accessory','other'], required: true },
  color: { type: String },
  size: { type: String },
  brand: { type: String },
  season: { type: String, enum: ['spring','summer','autumn','winter','all'], default: 'all' },
  imageUrl: { type: String },
  notes: { type: String },
}, { timestamps: true });

WardrobeItemSchema.index({ user: 1, name: 1 });

const WardrobeItem = models.WardrobeItem || model<IWardrobeItem>('WardrobeItem', WardrobeItemSchema);
export default WardrobeItem;
