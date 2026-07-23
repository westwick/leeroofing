import { Star, Quote } from "lucide-react";
import type { Review } from "@/lib/content";

export default function ReviewCard({ review }: { review: Review }) {
  const rating = Math.max(0, Math.min(5, review.rating || 5));

  return (
    <figure className="break-inside-avoid rounded-2xl border border-white/10 bg-charcoal-600 p-7 shadow-lg">
      <div className="flex items-center justify-between">
        <Quote className="h-8 w-8 text-brand/60" />
        <div className="flex gap-0.5 text-brand">
          {Array.from({ length: rating }).map((_, i) => (
            <Star key={i} className="h-4 w-4 fill-current" />
          ))}
        </div>
      </div>
      <blockquote className="mt-4 text-[15px] leading-relaxed text-silver">
        &ldquo;{review.body}&rdquo;
      </blockquote>
      <figcaption className="mt-5 border-t border-white/10 pt-4">
        <span className="font-bold text-white">{review.name}</span>
      </figcaption>
    </figure>
  );
}
